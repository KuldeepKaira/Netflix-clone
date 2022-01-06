import React, { Fragment } from "react";
import { Switch, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Fragment>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/netflix-show" component={NetFlixShow} />
        </Switch>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
