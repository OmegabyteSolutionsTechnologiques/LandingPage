import { useState } from "react";
import { motion } from "framer-motion"

import Toilette from "../../../assets/demolick/toilette.png";
import Seche from "../../../assets/demolick/seche.png";
import Autre from "../../../assets/demolick/autre.png";
import "./LickHome.css";


const LickPage = (props) =>
{

  //State
  const [display, setDisplay] = useState("Category"); //Category, Problem, Comment, Send
  const [isCategory, setIsCategory] = useState(true);
  const [category, setCategory] = useState(undefined);
  const [problem, setProblem] = useState(undefined);
  const [comment, setComment] = useState("");


  //Const
  const listCategory = [
    {
      label: "Toilette",
      image: Toilette,
      value: "toilette",
      problem: [
        {
          label: "Manque de papier hygiènique",
          value: "paper"
        },
        {
          label: "Insalubrité",
          value: "dirty"
        },
        {
          label: "Toilette bouchée",
          value: "stuck"
        },
        {
          label: "Dysfonctionnement",
          value: "broke"
        },
        {
          label: "Autre",
          value: "other"
        }
      ]
    },
    {
      label: "Sèche main",
      image: Seche,
      value: "seche",
      problem: [
        {
          label: "Dysfonctionnement",
          value: "broke"
        },
        {
          label: "Autre",
          value: "other"
        }
      ]
    },
    {
      label: "Autre",
      image: Autre,
      value: "autre",
    }
  ];


  const onClickCategory = (e, _category) => {

    if (category == _category){
      setCategory(undefined);
      setDisplay("Category");
    }
    else {
      setCategory(_category);
      if (_category.problem){
        setDisplay("Problem");
        console.log("oui")
      }
      else
        setDisplay("Comment");
    }


  };

  const onClickProblem = (_problem) => {

    setProblem(_problem);

    if (_problem)
      setDisplay("Comment");
    else {
      if (category.problem)
        setDisplay("Problem");
      else
        setDisplay("Category");
    }

  }

  const onChangeComment = (e) => {

    setComment(e.target.value);

  };


  const onClickEnvoyer = (e) => {

    setDisplay("Send");

  }

  const onClickReturn = (e) => {

    setDisplay("Category");
    setCategory(undefined);
    setProblem(undefined);
    setComment("");
  }

  return (
    <div className="lickhome_page">
      <div className="lickhome_header">
        <div className="lickhome_header_localisation">
          Salle de bain
        </div>
        <div className="lickhome_header_company">
          Tanguay
        </div>
      </div>
      {display == "Category" &&
        <div className="lickhome_body">
          <div className="lickhome_body_question">
            Pour quel installation souhaitez-vous faire une requête?
          </div>
          <motion.section className="lickhome_body_category"
            variants={{
              hidden: {opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.10
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {listCategory.map((c, index) => (
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0}, exit: { opacity: 0 } }}
                className="lickhome_body_category_item page_noselect" key={index} onClick={(e) => onClickCategory(e, c)}>
                <div className="lickhome_body_category_item_title">
                  {c.label}
                </div>
                <div className="lickhome_body_category_item_image">
                  <img src={c.image} className="lickhome_img" alt="Omegabyte" />
                </div>
              </ motion.div>
            ))}
          </motion.section>
        </ div>
      }
      {display == "Problem" &&
        <div className="lickhome_body">
          <motion.div
            transition={{ delay: 0.1}}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            className="lickhome_problem_title page_noselect" onClick={(e) => onClickCategory(e, category)}>
            {category.label}
          </ motion.div>
          <motion.div className="lickhome_body_question"
            transition={{ delay: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Quel type de problème rencontrez-vous ?
          </motion.div>
          <div className="liockhome_category_problem_cont">
            {category.problem.map((p, index) => (
              <motion.div 
                transition={{ delay: 0.20 * index }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="liockhome_category_problem_item page_noselect"
                onClick={() => onClickProblem(p)}
                key={index}  
              >
                {p.label}
              </motion.div>
            ))}
          </div>
        </div>
      }
      {display == "Comment" &&
        <div className="lickhome_body">
          <motion.div
            transition={{ delay: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lickhome_problem_title page_noselect" onClick={(e) => onClickProblem(undefined)}>
            {problem ? category.label + " - " + problem.label : category.label }
          </ motion.div>
          <motion.div className="lickhome_body_question"
            transition={{ delay: 0.15 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Commentaire (optionel)
          </motion.div>
          <motion.div 
            transition={{ delay: 0.20 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="liockhome_category_problem_cont">
            <textarea
              className={"page_textarea_input"}
              rows={4}
              value={comment}
              type="text"
              style={{ width: "80%", maxWidth: "400px" }}
              onChange={onChangeComment}
            />
          </motion.div>

          <motion.div
            transition={{ delay: 0.30 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="liockhome_category_problem_cont">
            <input
              type="button"
              className="page_button"
              style={{width: "200px", height: "40px", marginTop: "10px"}}
              value="Envoyer"
              onClick={onClickEnvoyer}
            />
          </motion.div>
        </div>


      }
      {display == "Send" &&
        <div className="lickhome_body">
          <motion.div className="lickhome_body_sent"
            transition={{ delay: 0.15 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Merci de nous avoir signalé le problème.
            
          </motion.div>
          <motion.div
            transition={{ delay: 0.30 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="liockhome_category_problem_cont">
            <input
              type="button"
              className="page_button"
              style={{ width: "200px", height: "40px", marginTop: "10px" }}
              value="Retour"
              onClick={onClickReturn}
            />
          </motion.div>
        </div>
      }
    </div>
  );

}

export default LickPage;
