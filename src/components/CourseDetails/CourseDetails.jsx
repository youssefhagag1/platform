import React, { useEffect , useState , useContext, useRef} from 'react'
import Styles from "./CourseDetails.module.css"
import {  Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Container, Image, Row , Col } from 'react-bootstrap';
import single_course from "../../assets/images/single_cource.webp";
import Our from "../Our/Our"
import PrimaryBtn from "../CustomBtns/PrimaryBtn/PrimaryBtn"
import Rating from "../Rating/Rating"
import { LogedContext } from '../../Context/loged';
import Swal from 'sweetalert2'
import { Slider } from "primereact/slider";
import { MeContext } from '../../Context/Me';
import Spiner from '../Spiner/Spiner';

function courseDetails() {
    const [loading , setloading] = useState(true);
    const {user} = useContext(MeContext);
    const [quality, setQuality] = useState(2);
    const [puncuality, setPuncuality] = useState(4);
    const [reliable, setReliable] = useState(3);
    const [text , setText] = useState("");
    const { isLogedIn } = useContext(LogedContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    const [course , setCourse] = useState(null);
    const [rate , setRate] = useState(0);
    const base_url = import.meta.env.VITE_API_BASE_URL;
    const [userReview , setUserReview] = useState(null);
    const reviewRef = useRef();
    const getCourses = () => {
      axios.get(`${base_url}/course/${id}`)
    .then(response => {
        console.log(response.data);
        setCourse(response.data);
        calcRateAvg(response.data); 
        
    })
    .catch(err => {
        setloading(false);
        console.log(err)
    })
    }
useEffect(() => {
    getCourses();
}, []);
useEffect(() => {
  if (!course || !course.reviews) return;
  const review = course.reviews.find(
    (review) => review.name === user?.name
  );
  setUserReview(review);

  if (reviewRef.current) {
    reviewRef.current.value = review?.content || "";
  }

  setQuality(review?.votes || quality);
  setPuncuality(review?.votes || puncuality);
  setReliable(review?.votes || reliable);

  setloading(false);
}, [user, course]);



const handleEnrollment = async () => {
    if (isLogedIn) {
        if (course.price === "free") {
            try {
                const res = await axios.get(
                    `${base_url}/enroll/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                Swal.fire({
                title: `${res.data.message}`,
                type: "success",
                 });

            } catch (err) {
                console.log(err);
              Swal.fire({
                title: "Already Registered",
                type: "info", 
                });

            }
        }else{
                try {
                const res = await axios.get(
                    `${base_url}/enroll/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                window.location.href = res.data.url;

            } catch (err) {
                console.log(err);
              Swal.fire({
                title: "Already Registered",
                type: "info", 
                });

            }
        
        }
    } else {
        navigate('/login', { state: { from: location } });
    }
};
const sbmitFeedback = async () => {
  if (isLogedIn) {
    const avg = parseInt((quality + reliable + puncuality) / 3);
    console.log(avg , text)
    const formData = new FormData();
    formData.append("votes", avg);
    if (text) {
      formData.append("content", text);
    }

    try {
      const res = await axios.post(
        `${base_url}/course/review/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
        console.log(res.data.message)
        getCourses();
      Swal.fire({
        title: res.data.message,
        type: "success",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "smothing wrong , again ",
        type: "error",
      });
    }
  } else {
    navigate("/login", { state: { from: location } });
  }
};
const updateFeedback = async () => {
if (isLogedIn) {
    const avg = parseInt((quality + reliable + puncuality) / 3);
    const formData = new FormData();
    formData.append("votes", avg);
    if (text) {
      formData.append("content", text);
    }

    try {
      const res = await axios.post(
        `${base_url}/update/review/${userReview.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
        console.log(res.data.message)
      Swal.fire({
        title: res.data.message,
        type: "success",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Enroll To course frist",
        type: "error",
      });
    }
  } else {
    navigate("/login", { state: { from: location } });
  }
}
const deleteFeedback = async () => {
  if (isLogedIn) {
    try {
      let res = await axios.delete(`${base_url}/course/review/${userReview.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      reviewRef.current.value = "";
      setText("");
      setQuality(1);
      setPuncuality(1);
      setReliable(1);
      console.log(res.data.message);
      Swal.fire({
        title: res.data.message,
        type: "success", // use 'icon' instead of 'type'
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something went wrong, try again",
        type: "error",
      });
    }
  } else {
    navigate("/login", { state: { from: location } });
  }
};

const calcRateAvg = (courseData) => {
    if (courseData.reviews.length === 0) {
        setRate(0);
        return;
    }

    let total = 0;
    courseData.reviews.forEach(review => {
        total += review.votes;
    });

    const avg = total / courseData.reviews.length;
    setRate(avg);
};

    if(loading) return <Spiner/>
  return (
    <div className={`z-3  position-relative ${Styles.course}`}>
        <Container >
            <Our title={course.title}/>
            <Row className='gx-4 gy-4 mt-5 p-3'>
                <Col lg={7} className='p-0 px-lg-4'>
                    <Image src={single_course}  className={` object-fit-cover w-100 h-100 ${Styles.courseImage}`}/>
                </Col>
                <Col lg={5} className={`p-4 border  ${Styles.info}`}>
                    <div className='d-flex justify-content-between pb-3 mb-4 border-bottom' >
                        <span>Trainer</span>
                        <Link className={Styles.trainer} to={`/teacher/${course.id}`}>{course.teacher.name.split(" " , 3).join(" ")}</Link>
                    </div>
                    <div className='d-flex justify-content-between pb-3 mb-4 border-bottom' >
                        <span>Course Fee</span>
                        <span>{course.price === "free" ? course.price : "$" + course.price}</span>
                    </div>
                    <div className='d-flex justify-content-between pb-3 mb-4 border-bottom' >
                        <span>Lessons</span>
                        <span>{course.lessons_count}</span>
                    </div>
                    <div className='d-flex justify-content-between pb-3 mb-4 border-bottom' >
                        <span>Exams</span>
                        <span>{course.exams_count}</span>
                    </div>
                    <div className="d-flex justify-content-center" onClick={handleEnrollment}>
                        <PrimaryBtn text="Enroll The Course" width="w-100"/>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col lg={7} >
                        <div className={`${Styles.text} border-bottom mb-4 pb-3`}>
                            <span className='text-capitalize fs-3 mb-3 d-block'>Objectives</span>
                            <p>
                                When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope
                            </p>
                            <p className='mt-5'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                        <div className={`${Styles.text} border-bottom mb-4 pb-3`}>
                            <span className='text-capitalize fs-3 mb-3 d-block'>Eligibility</span>
                            <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.                            </p>
                            <p className='mt-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.                            </p>
                        </div>
                        <div className={Styles.text}>
                            <span className='text-capitalize fs-3 mb-3 d-block'>description</span>
                            <p>
                                {course.description}
                            </p>
                        </div>
                </Col>
                <Col lg = {5}>
                    <div className={Styles.reviews}>
                        <span className='text-capitalize fs-3 mb-3 d-block'>Reviews</span>
                        <p className='text-danger my-4 fs-5'>Provide Your Rating</p>
                    </div>
                    <div className={`d-flex justify-content-between align-items-baseline mb-4 ${Styles.rate}`}>
                        <span>Quality</span>
                        <Rating rate={rate}/>
                    </div>
                    <div className={`d-flex justify-content-between align-items-baseline mb-4 ${Styles.rate}`}>
                        <span>Puncuality</span>
                        <Rating rate={rate}/>
                    </div>
                    <div className={`d-flex justify-content-between align-items-baseline ${Styles.rate}`}>
                        <span>Reliable</span>
                        <Rating rate={rate}/>
                    </div>

                    <div className={`${Styles.feedback} mt-4`}>
                        <span className='d-block mb-4 fs-3'>Feedback</span>
                                    <div className='mb-4 '>
                                        <Slider 
                                        value={quality}
                                         onChange={(e) => setQuality(e.value)}
                                          className='mb-3'  min={1} 
                                            max={5}/>
                                            <span>Quality</span>
                                    </div>
                                    <div className='mb-4'>
                                        <Slider 
                                        value={puncuality}
                                         onChange={(e) => setPuncuality(e.value)} 
                                         className='mb-3'  
                                         min={1} 
                                            max={5}/>
                                            <span>Puncuality</span>
                                    </div>
                                    <div className='mb-4'>

                                            <Slider 
                                            value={reliable} 
                                            onChange={(e) => setReliable(e.value)} 
                                            className="mb-3"
                                            min={1} 
                                            max={5}
                                            />
                                            <span>Reliable</span>
                                    </div>

                        <textarea name="feedback" ref={reviewRef} value={text} rows={8} className=' w-100 ' placeholder={!userReview ? "optional" : ""} onChange={e => setText(e.target.value)}>
                        </textarea>
                            {
    userReview ? (
        <div className='d-flex justify-content-end gap-4'>
            <button 
            onClick={updateFeedback}
            className={`border-0 text-white d-block px-5 py-2 mt-2 position-relative  ${Styles.send}`}
        >
            Update
        </button>
            <button 
            onClick={deleteFeedback}
            className={`border-0 text-white d-block px-5 py-2 mt-2 position-relative  ${Styles.delete}`}
        >
            delete
        </button>
        </div>
    ) : (
        <button 
            onClick={sbmitFeedback}
            className={`border-0 text-white d-block px-5 py-2 mt-2 position-relative ms-auto ${Styles.send}`}
        >
            Send
        </button>
    )
}
                    </div>
                </Col>
            </Row>
      </Container>
    </div>
  )
}

export default courseDetails
