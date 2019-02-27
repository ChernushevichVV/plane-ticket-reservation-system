import React, { Component } from "react";
import Header from "../pages/mainpage/Header";
import Section from "../pages/mainpage/Section";
import Footer from "../pages/mainpage/Footer";

export class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
