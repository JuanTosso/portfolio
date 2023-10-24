import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="projects-txt">projects</h1>

      <div className="projects projects-2">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Nomad Locals</h1>
          <h3 className="position">Web Page</h3>
          <h4 className="about">
            Nomad Locals is an innovative application that connects users
            through various activities. Whether creating their own events or
            joining forces in local activities organized by others, users can
            expand their social circles and enjoy meaningful shared experiences.
          </h4>
          <a
            href="https://nomandlocals.netlify.app/"
            target={"blank"}
            className="contact-projects"
          >
            <span>See More...</span>
          </a>
        </div>
      </div>

      <div className="projects projects-1">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Countries</h1>
          <h3 className="position">Single Page App</h3>
          <h4 className="about">
            Was developed for my Individual Project on the Henry Fullstack
            Developer bootcamp. The data is extracted from an internal API.
          </h4>
          <a
            href="https://github.com/JuanTosso/Countries"
            target={"blank"}
            className="contact-projects"
          >
            <span>See More...</span>
          </a>
        </div>
      </div>

      <div className="projects projects-3">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Rick & Morty</h1>
          <h3 className="position">Personal Proyect</h3>
          <h4 className="about">
            Was developed as an Individual Project. The data is extracted from
            the Rick&Morty API.
          </h4>
          <a
            href="https://github.com/JuanTosso/RickAndMorty"
            className="contact-projects"
            target={"blank"}
          >
            <span>See More...</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
