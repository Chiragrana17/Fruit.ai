import Home from "./component/home";
import Login from "./component/login";
import About from "./component/about";
import Translator from "./component/translator";
import Faq from "./component/faq";
import Chatbot from "./component/chatbot";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
    return ( <
        div className = "App" > { /* <Router> */ } <
        Routes >
        <
        Route path = "/"
        element = { < Login / > }
        /> <
        Route path = "/home"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/translator"
        element = { < Translator / > }
        /> <
        Route path = "/faq"
        element = { < Faq / > }
        /> <
        Route path = "/chatbot"
        element = { < Chatbot / > }
        /> <
        /Routes> { /* </Router> */ }

        { /* <Login/> */ } <
        /div>
    );
}

export default App;