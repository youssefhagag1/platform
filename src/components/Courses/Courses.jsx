import React, { useState, useEffect } from 'react';
import Our from '../Our/Our';
import { Container, Row, Col, Card, Placeholder } from 'react-bootstrap';
import CourseCard from "../CourseCard/CourseCard";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Styles from "./Courses.module.css";

function Courses() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true); 

  const handlePagination = () => {
    const pages = [];
    const prev = (
      <button
        className={Styles.arrowButton}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
    );
    if (currentPage > 1) {
      pages.unshift(prev);
    }

    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`${Styles.paginationButton} ${
            currentPage === i ? Styles.activeButton : ""
          }`}
        >
          {i}
        </button>
      );
    }

    const next = (
      <button
        className={Styles.arrowButton}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </button>
    );
    if (currentPage < lastPage) {
      pages.push(next);
    }

    return pages;
  };

  const fetchCourses = (pageNum) => {
    setLoading(true); 
    axios.get(`${baseURL}/courses?page=${pageNum}`)
      .then(response => {
        setCourses(response.data.data);
        setLastPage(response.data.meta.last_page);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses(currentPage);
  }, [currentPage]);

  // Placeholder Card Component
  const PlaceholderCard = () => (
    <Card className="my-5">
      <Placeholder as={Card.Img} variant="top" style={{ height: "200px" }} animation="glow" />
      <Card.Body>
        <Placeholder.Button variant="primary" xs={6} className = {Styles.placeholderBtn} />
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );

  return (
    <div className='my-5'>
      <Container>
        <Our title="our courses" />
      </Container>
      <Container>
        <Row className='mt-5'>
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <Col md={6} lg={4} key={idx}>
                <PlaceholderCard />
              </Col>
            ))
          ) : courses.length > 0 ? (
            courses.map(course => (
              <Col md={6} lg={4} key={course.id} className='g-4'>
                <CourseCard course={course} />
              </Col>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              No courses available at the moment.
            </div>
          )}
        </Row>
        <div>
          <div className='text-center mt-4'>
            {handlePagination()}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Courses;
