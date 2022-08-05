import { items } from "../../data/procedureData";
import { Chrono } from "react-chrono";

const ChronoComponent = () => {
  return (
    <Chrono
      items={items}
      slideShow
      mode="VERTICAL_ALTERNATING"
      twoColumns
      fontSizes={{
        cardText: "19rem",
        cardTitle: "1.4rem",
        title: "1.4rem",
      }}
      theme={{
        primary: "lightskyblue",
        secondary: "blue",
        cardBgColor: "white",
        cardForeColor: "black",
        titleColor: "black",
        titleColorActive: "white",
      }}
    >
      <div className="chrono-icons">
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-tick-success-flatart-icons-lineal-color-flatarticons-1.png"
          alt="twitter"
        />
      </div>
    </Chrono>
  );
};

export default ChronoComponent;
