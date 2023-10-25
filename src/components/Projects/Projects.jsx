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

      <div className="projects projects-4">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Crypto Quote</h1>
          <h3 className="position">Personal Proyect</h3>
          <h4 className="about">
            Crypto quote generator, which consumes information from an API to
            provide real-time quotes for the main cryptocurrencies in different
            currencies, such as dollars, euros, etc.
          </h4>
          <a
            href="https://crypto-quoter-jt.netlify.app/"
            className="contact-projects"
            target={"blank"}
          >
            <span>See More...</span>
          </a>
        </div>
      </div>

      <div className="projects projects-5">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Vet Appointments</h1>
          <h3 className="position">Personal Proyect</h3>
          <h4 className="about">
            Project for a veterinary clinic, with the aim of scheduling
            patients, recording their symptoms, and being able to track them
            while updating their status until discharge.
          </h4>
          <a
            href="https://vetpacientesjt.netlify.app/"
            className="contact-projects"
            target={"blank"}
          >
            <span>See More...</span>
          </a>
        </div>
      </div>

      <div className="projects projects-6">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Expense control</h1>
          <h3 className="position">Personal Proyect</h3>
          <h4 className="about">
            Project to create and manage budgets, create expenses, edit them,
            and have a detailed record of them.
          </h4>
          <a
            href="https://gastos-presupuesto-jt.netlify.app/"
            className="contact-projects"
            target={"blank"}
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
