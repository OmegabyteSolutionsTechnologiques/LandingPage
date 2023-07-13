import { useState } from "react";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import "./Contact.scss";


const ContactPage = (props) =>
{

  //Props
  const IsDesktop = props.IsDesktop;

  //State
  const [phone, setPhone] = useState(undefined);
  const [rawPhone, setRawPhone] = useState(0);


  //Hide phone number to stop bots
  const onClickPhone = () =>
  {

    let First = 0;
    let Second = 0;
    let Third = 0;

    First = 400 + 8 + 10;

    Second = 3 + 800;

    Third = 800 + 60 + 8000 + 4;

    setPhone("(" + First.toString() + ") " + Second.toString() + "-" + Third.toString());

    setRawPhone(First.toString() + Second.toString() + Third.toString())

  };


  return (
    <div className="contact_cont">
      <Header IsDesktop={IsDesktop} />
      <div className="contact_body">
        <div className="contact_phone_row">
          <div className="contact_phone_row_title">
            Téléphone :
          </div>
          <div className="contact_phone_row_data">
            {phone ? (
              <a href={"tel:" + rawPhone} aria-label="Numéro de téléphone">{phone}</a>
            ) : (
                <div className="contact_phone_button" onClick={onClickPhone}>
                Appuyer ici pour afficher
              </div>
            )}
          </div>
        </div>
        <div className="contact_phone_row">
          <div className="contact_phone_row_title">
            Courriel :
          </div>
          <div className="contact_phone_row_data">
            <a href="mailto:info@omegabyte.ca">info@omegabyte.ca</a>
          </div>
        </div>
      </div>
      <Footer IsDesktop={IsDesktop} />
    </div>
  )

};

export default ContactPage;
