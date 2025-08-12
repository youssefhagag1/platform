import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from "./Tesimonials.module.css"
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import person_1 from "../../assets/images/testimonial_img_1.webp"
import person_2 from "../../assets/images/testimonial_img_2.webp"
import person_3 from "../../assets/images/testimonial_img_3.webp"
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import AltTitle from "../AltTitle/AltTitle"
function Tesimonials() {

       return (
        <>
        <div className='d-md-none d-block'>
            <AltTitle title="tesimonials" head="Happy Students"/>
        </div>
        <div className={Styles.tesimonials}>
            <Swiper
                slidesPerView={'auto'}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={`${Styles.text} shadow p-x rounded `}>
                        <div className='position-relative'>
                        <FontAwesomeIcon icon={faQuoteRightAlt}/>
                        <p>
                            Behold place was a multiply creeping creature his domin to thiren open void
                            hath herb divided divide creepeth living shall i call beginning
                        </p>
                        </div>
                        <h4>Michel Hashale</h4>
                        <span> Sr. Web designer</span>
                    </div>
                    <div>
                        <Image src={person_1} alt='i image'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${Styles.text}  shadow p-5 rounded`}>
                        <div className='position-relative'>
                        <FontAwesomeIcon icon={faQuoteRightAlt}/>
                        <p>
                            Behold place was a multiply creeping creature his domin to thiren open void
                            hath herb divided divide creepeth living shall i call beginning
                        </p>
                        </div>
                        <h4>Michel Hashale</h4>
                        <span> Sr. Web designer</span>
                    </div>
                    <div>
                        <Image src={person_2} alt='i image'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${Styles.text}  shadow p-5 rounded`}>
                        <div className='position-relative'>
                        <FontAwesomeIcon icon={faQuoteRightAlt}/>
                        <p>
                            Behold place was a multiply creeping creature his domin to thiren open void
                            hath herb divided divide creepeth living shall i call beginning
      
                        </p>
                        </div>
                        <h4>Michel Hashale</h4>
                        <span> Sr. Web designer</span>
                    </div>
                    <div>
                        <Image src={person_3} alt='i image'/>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
        </>
  );

}

export default Tesimonials
