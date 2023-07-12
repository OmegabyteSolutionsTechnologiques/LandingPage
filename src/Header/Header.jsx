import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import "./Header.scss";
import Logo from "../assets/Side_logo.png";
import Logo_Mobile from "../assets/logo_mobile_text.png";
import { MdMenu } from "react-icons/md";

const Header = (props) => {

  //Props
  const IsDesktop = props.IsDesktop;

  //State
  const [menu, setMenu] = useState(false);


  if (IsDesktop){
    return (
      <div className="header_cont">
        <div className="header_cont_logo">
          <img src={Logo} className="header_logo" alt="Omegabyte" />
        </div>
        <div className="header_cont_menu">
            <NavLink to={"/"}
              className={({ isActive }) => isActive ? "header_cont_item_active" : "header_cont_item"}>
              Accueil
            </NavLink>
            <NavLink to={"/contact"}
              className={({ isActive }) => isActive ? "header_cont_item_active" : "header_cont_item"}
              >
              Contact
            </NavLink>
        </div>
      </div>
    )
  }else{

    return (
      <div className="header_cont_mobile">
        <div className="header_cont_mobile_logo">
          <img src={Logo_Mobile} className="header_logo_mobile" alt="Omegabyte" />
        </div>
        <div className="header_cont_menu_mobile">
          <div className="header_cont_menu_mobile_icon" onClick={() => setMenu(menu => !menu)}>
            <MdMenu />
          </div>
          <div className="header_menu_list page_noselect" style={{ right: (menu ? "0px" : "-260px") }}>
            <div className="header_menu_list_parent">
              <NavLink to={"/"} onClick={() => setMenu(menu => !menu)}
                className={({ isActive }) => isActive ? "header_cont_item_active" : "header_cont_item"}>
                Accueil
              </NavLink>
            </div>
            <div className="header_menu_list_parent">
              <NavLink to={"/contact"} onClick={() => setMenu(menu => !menu)}
                className={({ isActive }) => isActive ? "header_cont_item_active" : "header_cont_item"}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }



};

export default Header;
