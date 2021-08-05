import React from 'react'
import { Switch,Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>

)
// ! discuss a little more detail of what is going on here
// todo: compnent -  will be the compnent that we wnat to render
// todo: path - will be a string equal to the path itself from the current place; ex. localhost:3000
// todo:exact - is a true or false property
  // *these are the main thing we need for our route component
// todo: switch component - we need to wrap our wrote components in it
  // todo: what this does is the moment that route inside of it finds a match in its path, it does not render anything else but that route
  // todo: switch will match slash first and then it will not render anthing else after it
function App() {
  return (
    <div>
    <switch>
      {/* what this is sayin is that this math must be exactlly 'slash' in order to render our home page component  */}
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage} />
    </switch>
    
      
    
    </div>
  );
}

export default App;
