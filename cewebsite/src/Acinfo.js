import React, { useState, useEffect } from "react";
import "./acinfo.css";

const Acinfo = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) newIndex = 1;
      if (newIndex < 1) newIndex = 3;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName("dot");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      if (slides[slideIndex - 1])
        slides[slideIndex - 1].style.display = "block";
      if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
    };
    showSlides();
  }, [slideIndex]);

  return (
    <div className="page1">
      <div className="slide">
        <div class="img1">
          <div className="on">
            <div className="textleft1">
              <h1>IOT TEAM</h1>
              <p>
                เป็นโปรเจค Smart door locking systerm
                โดยจะติดตั้งอุปกรณ์ที่ประตูชมรม
              </p>
              <div className="btn1">more</div>
            </div>
            <div className="subimg1">
              <div className="subimg-L1"></div>
              <div className="subimg-R1" onClick={() => plusSlides(1)}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide">
        <div class="img2">
          <div className="on">
            <div className="textleft2">
              <h1>WEBSITS TEAM</h1>
              <p>
                เป็นทีมที่ออกแบบเว็บไซต์และเขียนขึ้นมา
                เว็บไซต์สาขาเป็นเว็บไซต์ที่เขียนจากชมรม
              </p>
              <div className="btn1">more</div>
            </div>
            <div className="subimg2">
              <div className="subimg-L2"></div>
              <div className="subimg-R2" onClick={() => plusSlides(1)}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide">
        <div class="img3">
          <div className="on">
            <div className="textleft3">
              <h1>AI</h1>
              <p>
                เป็นกิจกรรมที่จะศึกษา code ภาษา การทำงานของอัลกอริทึม
                ให้แสดงผลออกมา
              </p>
              <div className="btn1">more</div>
            </div>
            <div className="subimg3">
              <div className="subimg-L3"></div>
              <div className="subimg-R3" onClick={() => plusSlides(1)}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="prev" onClick={() => plusSlides(1)}>&#10094;</div>
      <div className="next" onClick={() => plusSlides(1)}>&#10095;</div>
      <div className="Dot">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Acinfo;
