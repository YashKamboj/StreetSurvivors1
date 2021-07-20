import "./App.css";
import Header from "./components/header/header-component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/footer/footer-component";
import HomePage from "./pages/homepage/homepage-component";
import AboutUs from "./pages/aboutus/aboutus-component";
import SupportUs from "./pages/supportus/supportus-component";
import SignInAndSignUpPage from "./pages/sign-in-sign-out-page/sign-in-sign-up-page";
import DonateNow from "./pages/donate/donate-component";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Router>
            <Header className="header-component" />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/supportus" component={SupportUs} />
              <Route exact path="/donate" component={DonateNow} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
