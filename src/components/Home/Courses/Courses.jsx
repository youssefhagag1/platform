import React, { useEffect, useState } from 'react'
import AltTitle from '../../AltTitle/AltTitle'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from "../../CourseCard/CourseCard"

function Courses() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    axios.get(`${baseURL}/courses`) 
      .then(response => {
        setCourses(response.data.data); // Store just the courses array
        console.log(response.data.data)
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later.");
      });
  }, []);

  return (
    <div className="courses-section">
      <AltTitle title="popular courses" head="Special Courses"/>
      <Container>
        <Row>
          {courses.length > 0 ? (
            courses.slice(0 , 6).map(course => (
              <Col md={6} lg={4} className='g-4'>
                  <CourseCard 
                  key={course.id} 
                  course={course}
                  />
              </Col>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              No courses available at the moment.
            </div>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Courses