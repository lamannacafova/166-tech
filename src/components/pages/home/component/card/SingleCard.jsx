import React from 'react'
import { FaClock } from "react-icons/fa6";
import { FaStar,FaRegStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
const SingleCard = () => {
  return (
    <>
           <div className="class-card">
                     <h5>3-cü sinif imtahanı</h5>
                     <div className="second">
                         <div>
                             <FaClock className="icon"/>
                             <span>45 dəqiqə</span>
                         </div>
                         <div className="between">
                             <div className="star">
                                <FaStar className="icon"/>
                                <FaStar className="icon"/>
                                <FaStar className="icon"/>
                                <FaStar className="icon"/>
                                <FaRegStar className="icon"/>
                             </div>
                            <div>
                            <TbPointFilled className="point"/>
                             <span>2 rəy</span>
                            </div>
                         </div>
                     </div>
                     <div className="question">
                         <h5>Suallar</h5>
                         <ul>
                             <li>10 sual- Azərbaycan dili</li>
                             <li>10 sual-Riyaziyyat</li>
                         </ul>
                     </div>
                     <div className="line"></div>
                     <div className="buttons">
                         <button>İbtidai sinif</button>
                         <button>3-cü sinif</button>
                     </div>
                     <button className="btn">1 AZN -indi al</button>
                 </div>
    </>
  )
}

export default SingleCard
