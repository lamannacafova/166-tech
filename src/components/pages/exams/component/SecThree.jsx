import React from 'react'
import { FaMessage,FaStar ,FaRegStar  } from "react-icons/fa6";
const SecThree = () => {
  return (
    <>
      <div className="container">
          <div className="feedback-title">
              <h2>Rəylər</h2>
          </div>
          <div className="feedbacks">
             <div className="between-card">
                 <div className="card-price">
                     <h2>4.9</h2>
                   <FaMessage/> <span>440 rəy</span>
                 </div>
                <div className="valudation">
                <div className="stars">
                     <div className="space">
                         <span>378</span>
                         <FaStar/>
                         <FaStar/>
                         <FaStar/>
                         <FaStar/>
                         <FaStar/>
                     </div>
                     <div className="change-one"></div>
                 </div>

                 <div className="stars">
                     <div className="space">
                         <span>24</span>
                         <FaStar/>
                         <FaStar/>
                         <FaStar/>
                         <FaStar/>
                         <FaRegStar />
                     </div>
                     <div className="change-two"></div>
                 </div>
                 <div className="stars">
                     <div className="space">
                         <span>21</span>
                         <FaStar/>
                         <FaStar/>
                         <FaStar/>
                         <FaRegStar />
                         <FaRegStar />
                     </div>
                     <div className="change-three"></div>
                 </div>
                 <div className="stars">
                     <div className="space">
                         <span>15</span>
                         <FaStar/>
                         <FaStar/>
                         <FaRegStar />
                         <FaRegStar />
                         <FaRegStar />
                     </div>
                     <div className="change-four"></div>
                 </div>
                 <div className="stars">
                     <div className="space">
                         <span>2</span>
                         <FaStar/>
                         <FaRegStar />
                         <FaRegStar />
                         <FaRegStar />
                         <FaRegStar />
                     </div>
                     <div className="change-five"></div>
                 </div>
                </div>

             </div>
          </div>
      </div>
    </>
  )
}

export default SecThree
