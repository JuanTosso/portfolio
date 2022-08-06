import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="projects-txt">projects</h1>
      <div className="projects projects-1">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Chrys</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-projects">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="projects projects-2">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">CChrys</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-projects">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="projects projects-3">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">CCChrys</h1>
          <h3 className="position">Another Leader Again</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-projects">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
