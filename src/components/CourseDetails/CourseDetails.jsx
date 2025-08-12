import React, { useEffect , useState} from 'react'
import Styles from "./CourseDetails.module.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { Container, Image, Row , Col } from 'react-bootstrap';
import single_course from "../../assets/images/single_cource.webp";
import Our from "../Our/Our"
import PrimaryBtn from "../CustomBtns/PrimaryBtn/PrimaryBtn"
import Rating from "../Rating/Rating"
function courseDetails() {
    const {id} = useParams();
    const [course , setCourse] = useState(null);
    const [rate , setRate] = useState(0);
    const base_url = import.meta.env.VITE_API_BASE_URL;
useEffect(() => {
    axios.get(`${base_url}/course/${id}`)
    .then(response => {
        console.log(response.data);
        setCourse(response.data);
        calcRateAvg(response.data); 
    })
    .catch(err => {
        console.log(err)
    })
}, []);

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

    if(!course) return;
  return (
    <div className={`z-3  position-relative ${Styles.course}`}>
        <Container >
            <Our title={course.title}/>
            <Row className='gx-5 gy-4 mt-5'>
                <Col lg={7} className='p-0 px-lg-4'>
                    <Image src={single_course} fluid className={`w-100 object-fit-cover ${Styles.courseImage}`}/>
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
                    <div className="d-flex justify-content-center">
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
                        <span>Quality</span>
                        <Rating rate={rate}/>
                    </div>

                    <div className={`${Styles.feedback} mt-4`}>
                        <span className='d-block mb-4 fs-3'>Feedback</span>
                        <textarea name="feedback" rows={6} className=' w-100 '>

                        </textarea>
                    </div>
                </Col>
            </Row>
      </Container>
    </div>
  )
}

export default courseDetails
