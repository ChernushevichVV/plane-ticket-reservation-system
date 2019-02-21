/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
