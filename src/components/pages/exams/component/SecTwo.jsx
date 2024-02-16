import React from 'react'
import { FaClock ,FaClipboardQuestion,FaCalendar,FaStar ,FaArrowRightLong  } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
const SecTwo = () => {
  return (
    <>
      <div className="container">
          <div className="results">
              <div className="card-about">
                 <h4>Məlumat</h4>
                 <div className="data">
                <div className="clock">
                <FaClock/> <span>45 deqiqe</span>
                </div>
               <div className="question">
               <FaClipboardQuestion/> <span>20 sual</span>
               </div>
                <div className="calendar">
                <FaCalendar/> <span>22.05.2023 hazırlanıb</span>
                </div>
                 </div>
                 <h4>Suallar</h4>
                 <ul>
                     <li>Azərbaycan dili-10 sual</li>
                     <li>Rizyyaziyyat-10 sual</li>
                 </ul>
              </div>
              <div className="card-results">
                  <h4>Imtahan üzrə nəticələr</h4>
                  <div className="results-order">
                      <div className="icon-div">
                          <div className="one-icon">
                            <FaStar className="color-icon"/>
                          </div>
                          <p>İlahə Nəzərova</p>
                      </div>
                      <div className="time">
                          <p>20 bal <TbPointFilled/> -12 deq <FaArrowRightLong/></p>
                      </div>
                  </div>
                  <div className="results-order">
                      <div className="icon-div">
                          <div className="two-icon">
                            <FaStar className="color-icon" />
                          </div>
                          <p>İlahə Nəzərova</p>
                      </div>
                      <div className="time">
                          <p>20 bal <TbPointFilled/> -00 deq <FaArrowRightLong/></p>
                      </div>
                  </div>
                  <div className="results-order">
                      <div className="icon-div">
                          <div className="three-icon">
                            <FaStar className="color-icon" />
                          </div>
                          <p>İlahə Nəzərova</p>
                      </div>
                      <div className="time">
                          <p>19 bal <TbPointFilled/> -12 deq <FaArrowRightLong/></p>
                      </div>
                  </div>
                  <div className="results-order">
                      <div className="icon-div">
                          <div className="four-icon">
                           <p>4</p>
                          </div>
                          <p>İlahə Nəzərova</p>
                      </div>
                      <div className="time">
                          <p>18 bal <TbPointFilled/> -12 deq <FaArrowRightLong/></p>
                      </div>
                  </div>
                  <div className="results-order">
                      <div className="icon-div">
                          <div className="five-icon">
                            <p>5</p>
                          </div>
                          <p>İlahə Nəzərova</p>
                      </div>
                      <div className="time">
                          <p>17 bal <TbPointFilled/> -12 deq <FaArrowRightLong/></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default SecTwo
