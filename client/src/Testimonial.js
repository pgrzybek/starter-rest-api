import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Thumbs, Autoplay } from 'swiper';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';

export default function TestimonialSection() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="testimonial" className="spacer">
      <div className="testimonial-section">
        <div className="testi-user-img">
          <Swiper
            className="gallery-thumbs"
            spaceBetween={10}
            slidesPerView={4}
            // slideToClickedSlide
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
          >
            <SwiperSlide>
              <img className="u3" src="http://placekitten.com/100/150" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u1" src="http://placekitten.com/100/150" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u2" src="http://placekitten.com/100/150" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u4" src="http://placekitten.com/100/150" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="user-saying">
          <Swiper
            className="testimonial"
            spaceBetween={30}
            direction="vertical"
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, EffectCoverflow, Thumbs, Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false 
            }}
            // thumbs={{ swiper: ".gallery-thumbs" }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          >
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia, nostrum similique qui perferendis aliquam voluptatum magni repellat deleniti, nobis dicta. Optio veniam maiores nam sapiente suscipit eius provident aliquid."
                </p>
                <div className="name">-Ben Dover-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia, nostrum similique qui perferendis aliquam voluptatum magni repellat deleniti, nobis dicta. Optio veniam maiores nam sapiente suscipit eius provident aliquid."
                </p>
                <div className="name">-Ben Dover-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia, nostrum similique qui perferendis aliquam voluptatum magni repellat deleniti, nobis dicta. Optio veniam maiores nam sapiente suscipit eius provident aliquid."
                </p>
                <div className="name">-Ben Dover-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia, nostrum similique qui perferendis aliquam voluptatum magni repellat deleniti, nobis dicta. Optio veniam maiores nam sapiente suscipit eius provident aliquid."
                </p>
                <div className="name">-Ben Dover-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
         </Swiper>
        </div>
    </div>
    </section>
    )
}