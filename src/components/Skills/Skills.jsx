import "./Skills.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.jpg";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.jpg";
import uxui from "../../assets/images/uxui.png";
import scrum from "../../assets/images/scrum.jpg";
import node from "../../assets/images/node.png";
import vite from "../../assets/images/vite.png";
import postgresql from "../../assets/images/postgresql.png";
import tailwind from "../../assets/images/tailwind.png";
import sequelize from "../../assets/images/sequelize.png";

const Skills = () => {
  return (
    <div>
      <h1 className="skill-text">My Skills</h1>
      <div className="skills-container">
        <div className="skill">
          <div>
            <img
              className="content"
              src={react}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>REACT</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={uxui}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>UX/UI</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={html}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={css}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={js}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>JS</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={redux}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>REDUX</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={scrum}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>SCRUM</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={node}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>nodeJS</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={vite}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>VITEjs</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={tailwind}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>Tailwind</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={postgresql}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>postgreSQL</h3>
        </div>
        <div className="skill">
          <div>
            <img
              className="content"
              src={sequelize}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <h3>Sequelize</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
