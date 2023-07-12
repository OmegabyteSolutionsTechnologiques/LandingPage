import "./Footer.scss";

import { BsFacebook, BsLinkedin } from "react-icons/bs";


const Footer = (props) =>
{

  //Props
  const IsDesktop = props.IsDesktop;

  return (
    <div className="footer_cont">
      <div className="footer_social_cont">
        <a href="https://www.facebook.com/profile.php?id=100094550071422" target="_blank">
          <div className="footer_social_icon">
            <BsFacebook />
          </div>
        </a>
        <a href="https://www.linkedin.com/company/98244082/" target="_blank">
          <div className="footer_social_icon">
            <BsLinkedin />
          </div>
        </a>
      </div>
    </div>
  )



};

export default Footer;
