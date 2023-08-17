import "./Skills.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.jpg";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.jpg";
import uxui from "../../assets/images/uxui.png";
import scrum from "../../assets/images/scrum.jpg";
import node from "../../assets/images/node.png";
import vite from "../../assets/images/vite.PNG";
import postgresql from "../../assets/images/postgresql.png";
import tailwind from "../../assets/images/tailwind.png";
import sequelize from "../../assets/images/sequelize.png";

const Skills = () => {
  return (
    <div>
      <span className="skill-text">My Skills</span>
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
          <h1>REACT</h1>
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
          <h1>UX/UI</h1>
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
          <h1>HTML</h1>
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
          <h1>CSS</h1>
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
          <h1>JS</h1>
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
          <h1>REDUX</h1>
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
          <h1>SCRUM</h1>
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
          <h1>nodeJS</h1>
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
          <h1>VITEjs</h1>
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
          <h1>Tailwind</h1>
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
          <h1>postgreSQL</h1>
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
          <h1>Sequelize</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
