import React from 'react';
import Styles from "./Numbers.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import { useManualIntersection } from "../../Hooks/useManualIntersection";
import CountUp from 'react-countup';

function Numbers() {
  const [ref, isIntersecting] = useManualIntersection(100);

  const countersData = [
    { value: 1024, label: "All Teachers" },
    { value: 1838, label: "All Students" },
    { value: 1019, label: "Online Students" },
    { value: 819, label: "Offline Students" }
  ];

  return (
    <div 
      ref={ref}
      className={`${isIntersecting ? Styles.intersected : ""} ${Styles.numbers}`}
    >
      <Container>
        <Row className='g-4'>
          {countersData.map((counter, index) => (
            <Col key={index} md={6} lg={3} className={Styles.box}>
              <span className='display-4 fw-bold'>
                {isIntersecting ? (
                  <CountUp 
                    end={counter.value} 
                    duration={2} 
                  />
                ) : 0}
              </span>
              <span className={Styles.category}>{counter.label}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Numbers;