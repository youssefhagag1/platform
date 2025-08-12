import React, { useEffect, useState } from 'react'
import Styles from "./Teacher.module.css"
import { useParams } from 'react-router-dom'
import { Container, Image, Col , Row } from 'react-bootstrap';
import axios from 'axios';
import cover from "../../assets/images/cover.png"
import CourseCard from '../CourseCard/CourseCard';
import PrimaryBtn from "../CustomBtns/PrimaryBtn/PrimaryBtn"
import Rating from '../Rating/Rating';
function Teacher() {
    const {id} = useParams();
    const [teacher, setTeacher] = useState(null);
    const [courses, setCourses] = useState([]);
    const [ rate , setRate] = useState(0);
    const base_url = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        axios.get(`${base_url}/teacher/${id}`)
        .then(response => {
            console.log(response.data.teacher);
            setTeacher(response.data.teacher);
            calcRateAvg(response.data.teacher.courses)
            const processedCourses = response.data.teacher.courses.map(course => ({
                ...course,
                teacher: {
                    name: response.data.teacher.name
                }
            }));
            setCourses(processedCourses);
        })
        .catch(err => console.log(err));
    }, [id, base_url]); // Added dependencies

    const calcRateAvg = (courseData) => {
    if (courseData.length === 0) {
        setRate(0);
        return;
    }

    let total = 0;
    courseData.forEach(course => {
        total += course.rate;
    });

    const avg = total / courseData.length;
    setRate(avg);
};

    if(!teacher) return <div>Loading...</div>;

    return (
        <div>
            <div className={Styles.bg}>
                <Container>
                    <Row>
                       <Col lg={4} className= {Styles.head}>
                        <div className={`${Styles.teacherImage} mx-auto mx-lg-0`}>
                            <Image src={courses.cover_photo || cover} fluid />
                        </div>
                        <div className='mt-4 text-lg-start text-center'>
                            <h2>{teacher.name.split(" ", 3).join(" ")}</h2>
                            <p>{teacher.specialization}</p>

                        </div>
                        <div className='my-4  '>
                            <div className='d-flex justify-content-center justify-content-lg-start'><Rating rate={rate} /></div>
                            <p className='mt-2 text-center text-lg-start'>{rate} Rating</p>
                        </div>
                        <a href={`mailto:${teacher.email}`} className='d-flex justify-content-center justify-content-lg-start'>
                            <PrimaryBtn text="Contact"/>
                        </a>
                    </Col>
                    <Col lg={8}>
        <Row >
                    {courses.length > 0 ? (
                        courses.map(course => (
                            <Col md={6}  key={course.id} className='g-4'>
                                <CourseCard course={course} />
                            </Col>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            No courses available at the moment.
                        </div>
                    )}
                </Row>
                    </Col>
                    </Row>
                </Container>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fef8f3" fillOpacity="1" d="M0,224L9.2,202.7C18.5,181,37,139,55,112C73.8,85,92,75,111,90.7C129.2,107,148,149,166,138.7C184.6,128,203,64,222,53.3C240,43,258,85,277,133.3C295.4,181,314,235,332,250.7C350.8,267,369,245,388,250.7C406.2,256,425,288,443,288C461.5,288,480,256,498,256C516.9,256,535,288,554,293.3C572.3,299,591,277,609,272C627.7,267,646,277,665,261.3C683.1,245,702,203,720,181.3C738.5,160,757,160,775,186.7C793.8,213,812,267,831,250.7C849.2,235,868,149,886,101.3C904.6,53,923,43,942,69.3C960,96,978,160,997,160C1015.4,160,1034,96,1052,80C1070.8,64,1089,96,1108,101.3C1126.2,107,1145,85,1163,80C1181.5,75,1200,85,1218,117.3C1236.9,149,1255,203,1274,213.3C1292.3,224,1311,192,1329,176C1347.7,160,1366,160,1385,181.3C1403.1,203,1422,245,1431,266.7L1440,288L1440,0L1430.8,0C1421.5,0,1403,0,1385,0C1366.2,0,1348,0,1329,0C1310.8,0,1292,0,1274,0C1255.4,0,1237,0,1218,0C1200,0,1182,0,1163,0C1144.6,0,1126,0,1108,0C1089.2,0,1071,0,1052,0C1033.8,0,1015,0,997,0C978.5,0,960,0,942,0C923.1,0,905,0,886,0C867.7,0,849,0,831,0C812.3,0,794,0,775,0C756.9,0,738,0,720,0C701.5,0,683,0,665,0C646.2,0,628,0,609,0C590.8,0,572,0,554,0C535.4,0,517,0,498,0C480,0,462,0,443,0C424.6,0,406,0,388,0C369.2,0,351,0,332,0C313.8,0,295,0,277,0C258.5,0,240,0,222,0C203.1,0,185,0,166,0C147.7,0,129,0,111,0C92.3,0,74,0,55,0C36.9,0,18,0,9,0L0,0Z"></path>
            </svg>


        </div>
    )
}

export default Teacher