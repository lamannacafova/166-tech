import React from 'react'
import {FaStar ,FaRegStar  } from "react-icons/fa6";
const ExamCard = () => {
  return (
    <>
        <div className="card-student">
                  <h5>İlahə Nəzərova</h5>
                  <div className="star-price">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <span>2 gün əvvəl</span>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              </div>
    </>
  )
}

export default ExamCard
