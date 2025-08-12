import React from 'react'
import Styles from "./CourseCard.module.css"
import { Image } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import { Link, useLocation } from 'react-router-dom'

function CourseCard({course}) {
  const location = useLocation();
  return (
    <Link className={Styles.card} to = {`/courses/${course.id}`}>
      <div className={Styles.imageContainer}>
        <Image src={course.thumbnail} fluid className={`w-100 object-fit-cover ${Styles.img}`}/>
        {course.price === "free" && (
          <div className={Styles.freeBanner}>FREE</div>
        )}
      </div>
      <div className=' p-4 border bg-white border-top-0'>
        <div className='d-flex align-items-center justify-content-between'>
          <button className={Styles.track}>
            {course.track}
          </button>
          <span className='text-capitalize'>{course.price === "free" ? course.price : `$${course.price}`}</span>
        </div>
        <div className={`my-4 pb-2 ${Styles.info}`}>
          <h5>{ course.title}</h5>
          <p className='mt-2'>{ course.description}</p>
        </div>
        <div className='d-flex justify-content-between'>
          <div className={Styles.techer}>
            <p className='mb-1'>Conducted by :</p>
            <span>{course.teacher.name.split(" ", 3).join(" ")}</span>
          </div>
          <div>
            <Rating rate={course.rate}/>
            <p className='d-block mt-2 text-end text-secondary'>{course.rate} Ratings</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard