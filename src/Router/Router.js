import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import Connection from "../components/Connection/Connection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const AppRouter = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path='/' component={Header} />
            </Switch>
            <About />
            <Services/>
            <Connection />
            <Footer/>
        </Router>
    )
}

export default AppRouter
