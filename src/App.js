import Homepage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Shop from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
