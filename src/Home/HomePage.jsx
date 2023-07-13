import { useState } from "react";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import "./Home.scss";


const HomePage = (props) =>
{



  //Props
  const IsDesktop = props.IsDesktop;

  //State
  const [phone, setPhone] = useState(undefined);
  const [rawPhone, setRawPhone] = useState(0);

  //Hide phone number to stop bots
  const onClickPhone = () => {

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
    <div className="home_cont">
      <Header IsDesktop={IsDesktop} />
      <div className="home_body">
        <div className="home_section_title">
          Qui sommes-nous?
        </div>
        <div className="home_section_body">
          Omegabyte est une compagnie de programmation spécialisée dans le développement de solutions technologiques sur mesure. Nous vous aidons à créer des applications de bureau, web et mobile, à gérer efficacement vos bases de données, à intégrer des flux de données (ETL), à intégrer des API, à supporter des systèmes de gestion intégrés (ERP) et à concevoir des architectures de solutions adaptées à vos besoins.
          Contactez Omegabyte dès aujourd'hui pour discuter de vos besoins en matière de solutions technologiques et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
        </div>
        <div className="home_section_title">
          Services offerts
        </div>
        <div className="home_list_cont">
          <div className="home_list_row">
            <div className="home_list_title">
              Développement de logiciel :
            </div>
            <div className="home_list_data">
              Besoin d'une application interne pour automatiser vos processus ? Nous offrons un service de création sur mesure d'applications de toutes sortes, qu'il s'agisse d'un outil Web ou de bureau.
            </div>
          </div>
          <div className="home_list_row">
            <div className="home_list_title">
              Gestion de base de données :
            </div>
            <div className="home_list_data">
              Création, optimisation et support de vos bases de données, que ce soit pour MSSQL, MySQL, PostgreSQL ou même MongoDB.
            </div>
          </div>
          <div className="home_list_row">
            <div className="home_list_title">
              Processus d'intégration de données (ETL): 
            </div>
            <div className="home_list_data">
              Le processus d'intégration de données consiste simplement à transférer des données d'une source à une autre. Cela est souvent utilisé pour créer des entrepôts de données, ce qui permet de centraliser vos informations et de soulager votre base de données principale. Nous proposons des services de création, d'optimisation et de support pour ce processus d'intégration de données, afin de garantir une gestion fluide et efficace de vos informations.
            </div>
          </div>
          <div className="home_list_row">
            <div className="home_list_title">
              Intégration d'API:
            </div>
            <div className="home_list_data">
              Nous facilitons l'intégration de diverses fonctionnalités et services de fournisseurs tiers dans vos applications, vous permettant d'enrichir vos solutions avec des fonctionnalités supplémentaires et d'améliorer l'expérience utilisateur.
            </div>
          </div>
          <div className="home_list_row">
            <div className="home_list_title">
              Support de système de gestion intégré (ERP):
            </div>
            <div className="home_list_data">
              Nous vous accompagnons dans la personnalisation et l'intégration de votre système de gestion intégré (ERP), afin d'optimiser la gestion de vos opérations commerciales et d'améliorer l'efficacité de votre entreprise.
            </div>
          </div>
          <div className="home_list_row">
            <div className="home_list_title">
              Trouver des solutions:
            </div>
            <div className="home_list_data">
              Vous avez un système qui n'est plus pris en charge ? Une base de données qui n'a même pas de page Wikipédia ? Un logiciel conçu il y a 25 ans par un stagiaire ? Nous sommes passionnés par les défis et disponibles pour analyser votre situation.
            </div>
          </div>
        </div>
        <div className="home_section_title">
          Contactez-nous
        </div>
        <div className="home_section_body" style={{ width: "100%" }}>
          <div className="home_phone_row">
            <div className="home_phone_row_title">
              Adresse :
            </div>
            <div className="home_phone_row_data">
              Sainte-Marie, Québec, Canada
            </div>
          </div>
        </div>
        <div className="home_section_body" style={{width: "100%"}}>
          <div className="home_phone_row">
            <div className="home_phone_row_title">
              Téléphone :
            </div>
            <div className="home_phone_row_data">
              {phone ? (
                <a href={"tel:" + rawPhone} aria-label="Numéro de téléphone">{phone}</a>
              ) : (
                  <div className="home_phone_button" onClick={onClickPhone}>
                  Appuyer ici pour afficher
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="home_section_body" style={{ width: "100%" }}>
          <div className="home_phone_row">
            <div className="home_phone_row_title">
              Courriel :
            </div>
            <div className="home_phone_row_data">
              <a href="mailto:info@omegabyte.ca" aria-label="Adresse courriel info@omegabyte.ca">info@omegabyte.ca</a>
            </div>
          </div>
        </div>
      </div>
      <Footer IsDesktop={IsDesktop} />
    </div>
  )

};

export default HomePage;
