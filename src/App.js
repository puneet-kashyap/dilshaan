import React, { Component } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Carousel from './Components/Utils/carousel';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Carousel />
          <Footer />
      </div>
    );
  }
}

export default App;
