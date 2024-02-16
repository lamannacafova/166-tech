import React from 'react'
import exam from ".././../../../../public/image/exam.png"
const SecOne = () => {
  return (
    <>
      <div className="container">
          <div className="cards">
              <div className="exam-about">
                 <h2>3-cü sinif imtahanı</h2>
                 <ul>
                   <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                   <li>Lorem Ipsum has been the industry's standard dummy text ever</li>
                   <li>Lorem Ipsum has been the industry's standard dummy text ever</li>
                 </ul>
                 <button className="btn">1 AZN imtahanı al</button>
              </div>
              <div className="images">
                <img src={exam} alt=""/>
              </div>
          </div>
      </div>
    </>
  )
}

export default SecOne
