import './style.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar, Footer } from '../components'
import { Home, ResumePage } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  	<>
    <div className="App">
      <Router>
        <NavBar />
      	<Switch>
      		<Route path='/' exact component={Home}/>
          <Route path='/resume' exact component={ResumePage}/>
      	</Switch>
        <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
