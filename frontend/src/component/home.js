import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (buttonText) => {
    // Navigate to the corresponding page based on the button clicked
    switch (buttonText) {
      case "chatbot":
        navigate("/chatbot");
        break;
      case "translator":
        navigate("/translator");
        break;
      case "faq":
        navigate("/faq");
        break;
      case "about":
        navigate("/about");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="cent">
        <div className="title"> Fruit.Ai </div>{" "}
        <div className="subtitle"> "Be Healthy!" </div>{" "}
        <div className="button-container">
          <button
            className="button chat"
            onClick={() => handleClick("chatbot")}
          >
            Chat{" "}
          </button>{" "}
          <button
            className="button translate"
            onClick={() => handleClick("translator")}
          >
            Translate{" "}
          </button>{" "}
          <button className="button faqs" onClick={() => handleClick("faq")}>
            FAQs{" "}
          </button>{" "}
          <button className="button about" onClick={() => handleClick("about")}>
            About{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
