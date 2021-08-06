import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'
import { render } from '@testing-library/react';
import{auth} from './firebase/firebase.utils'

// ! discuss a little more detail of what is going on here
// todo: compnent -  will be the compnent that we wnat to render
// todo: path - will be a string equal to the path itself from the current place; ex. localhost:3000
// todo:exact - is a true or false property
// *these are the main thing we need for our route component
// todo: switch component - we need to wrap our wrote components in it
// todo: what this does is the moment that route inside of it finds a match in its path, it does not render anything else but that route
// todo: switch will match slash first and then it will not render anthing else after it
// ! discuss with carlos on firebase
// * firebase: for firebase, we want to store the state of our user aka how are they loggin in? ex. through goog?, email and password?
  // * to do this we will now convert the App() into a class
  // *w/ firebase, we just want to know when are we signed in and when we are signed out
  class App extends React.Component {
    constructor(){
      super()
      this.state={
        currentUser: null
      }
    }
    // *because this is an open subscription beleow aka ComponentDidmOunt(), we also have to close subscirtioins when an unomunt ahpppaens.  
      // * we don't want any memory leaks in our javascript applicatino
      unsubscribeFromAuth = null;
    // *what we are doing here makes this an open subsciption between our application and firebase app
      // *wherever any changes occur on firebase from any source related to this applicatino, 
      // *firebase sends out a message taht syas that the off status change
      // * the user has updated, whether they've signed in through some service, such as our google sign in or our email password sign up
      // * it wall call it so we don't actually have to manually fetch every time we want to check if that state has changed
        // !  discuss with carlos in regrds to the fetching
    componentDidMount(){
      
      // todo: onAuthStateChanged() - this is a method on the auth library that we get from firebase
      this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
        // *we are setting current user to the user object
        this.setState({currentUser:user})
        console.log(user)
      })
    }
    // *we want to close this subscription whenever our ocmponent un mounts 
    componentWillUnmount() {
      // *this will close the subscritpion
      this.unsubscribeFromAuth();
    }
  
  
    render(){
      return (
        <div>
        <Header/>
        <Switch>
          {/* what this is sayin is that this math must be exactlly 'slash' in order to render our home page component  */}
          <Route exact path='/' component={HomePage}/>
          {/* this will take us to our shop page */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>  
        </div>
      );
    }
  }
  
  

export default App;

// *we took out this because we wanted to show an example for linking and routing
// const HatsPage=()=>(
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>

// )