import "./Button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a
        href="https://drive.google.com/file/d/12bCP1OD3lTreXZal7lJvUr36sm-tyKfj/view?usp=drive_link"
        className="btn pri"
        target={"blank"}
      >
        ENGLISH CV
      </a>
      <a
        href="https://drive.google.com/file/d/17snkENURw0954xHBq1j3LPxYZ8BadyKm/view?usp=drive_link"
        className="btn sec"
        target={"blank"}
      >
        SPANISH CV
      </a>
    </div>
  );
}

export default Buttons;
