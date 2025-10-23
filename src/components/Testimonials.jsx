import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Testimonials.css";

const testimonials = [
  {
    quote:
      "I enjoyed building your 14 ft. Commander Fisherman. It was designed and planned outbeautifully. I am 15 years old and built the kit in only 3 or 4 weekends. It is a perfect boat for me. I get a lot of use in my crabbing and shrimping business. It is a tough little boat and I would recommend ft to anyone.",
    author: "S. N. GEORGIA",
    role: "Commander 14 Fisherman",
  },
  {
    quote:
      "P.S. Also enclosed is a photograph of the boat we made last winter. We also got the frame and hardware kit for this boat from your company. I powered this boat with a 155 HP OMC stem drive and the boat handled it beautifully. And the design of the hull made it a very seaworthy craf sit amet elit quis lectus  tincidunt congue. Integer et leo vel enim pretium euismod. Proin nec semper elit. In sit amet ipsum eget erat tincidunt lacinia.",
    author: "J. T. MICHIGAN",
    role: "Mariner 20",
  },
  {
    quote:
      "We find the lines of these boats just beautiful. My seven year old Grandson is so happy with his boat.estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nullam eget hendrerit erat. Cras tristique viverra orci at feugiat.",
    author: "S. H. NORTH CAROLINA",
    role: "Dory",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <p className="subtitle">TESTIMONIALS</p>
        <h2 className="title">WHAT ARE BUILDERS SAY.</h2>

        
        <div className="custom-prev nav-arrow">
          <svg viewBox="0 0 22.25 40" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M22.25 2.82 19.43 0 0 20 19.43 40l2.82-2.82L5.63 20 22.25 2.82z"
            />
          </svg>
        </div>
        <div className="custom-next nav-arrow">
          <svg viewBox="0 0 22.25 40" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="m0 2.82 2.82-2.82L22.25 20 2.82 40 0 37.18 16.62 20 0 2.82z"
            />
          </svg>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, reverseDirection: true }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop={true}
          speed={1000}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-content">
                <p className="quote">{item.quote}</p>
                <p className="author">
                  {item.author} <span>/ {item.role}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
