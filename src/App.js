import React from 'react'
import './App.css'

import { Router } from 'react-router-dom'
import history from './Services/history'
import Routes from './Routes/Route'
import ScrollToTop from 'react-router-scroll-top'


function App() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
