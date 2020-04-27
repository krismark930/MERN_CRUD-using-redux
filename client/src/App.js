import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './actions/store'
import {Provider} from 'react-redux'

import './App.css';
import Homecomponent from './components/Homecomponent'
import Addcomponent from './components/Addcomponent'
import Editcomponent from './components/Editcomponent'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
  <Router>

     <Switch>
       <Route path="/" component ={Homecomponent} exact />
       <Route path="/add" component = {Addcomponent}/>
       <Route path="/edit/:id" component ={Editcomponent}/>
     </Switch>

  </Router>
      </Provider>

    </div>
  );
}
export default App;
