
// App.js
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    darkMode: localStorage.getItem("theme") === "dark"
  };

  toggleDarkMode = () => {
    const newMode = !this.state.darkMode;
    this.setState({ darkMode: newMode });
    document.body.className = newMode ? "bg-dark text-light" : "bg-light text-dark";
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  componentDidMount() {
    document.body.className = this.state.darkMode ? "bg-dark text-light" : "bg-light text-dark";
  }

  render() {
    return (
      <div style={{ paddingTop: '70px' }}>
        <Router>
          <Navbar
            darkMode={this.state.darkMode}
            setDarkMode={this.toggleDarkMode}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="General" />} />
            <Route exact path="/Business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="Business" />} />
            <Route exact path="/Entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="Entertainment" />} />
            <Route exact path="/General" element={<News apiKey={this.apiKey} key="general2" pageSize={this.pageSize} country="us" category="General" />} />
            <Route exact path="/Health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="Health" />} />
            <Route exact path="/Science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="Science" />} />
            <Route exact path="/Sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="Sports" />} />
            <Route exact path="/Technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
