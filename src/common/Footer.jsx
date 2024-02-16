import Logo from '../components/logo/Logo'
import { IoMdMail } from "react-icons/io"
import { FaPhone ,FaFacebook,FaTelegram } from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai"
import { RiWhatsappFill } from "react-icons/ri"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
        <div className="footer-about">
        <div className="logo">
            <Logo/>
          </div>
          <div className="list">
              <ul>
                  <li><a href="#">Haqqımızda</a></li>
                  <li><a href="#">Kitablar</a></li>
                  <li><a href="">İmtahanlar</a></li>
                  <li><a href="">Bizimlə əlaqə</a></li>
              </ul>
          </div>
        </div>
        <div className="contact">
         <div className="mail-box">
         <div className="mail">
            <IoMdMail/>
          </div>
          <p>Nümunə@gmail.com</p>
         </div>
         <div className="phone-box">
           <div className="phone">
             <FaPhone/>
           </div>
           <p>000 000 00 00</p>
         </div>
        </div>
        <div className="networking">
          <div className="instagram">
              <AiFillInstagram className="icon"/>
          </div>
          <div className="facebook">
            <FaFacebook className="icon"/>
          </div>
          <div className="whatsap">
            <RiWhatsappFill className="icon"/>
          </div>
          <div className="telegram">
            <FaTelegram className="icon"/>
          </div>
        </div>
        <div className="bg-line"></div>
        <p>© 2024, şirkərin adı. Bütün hüquqlar qorunur</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
