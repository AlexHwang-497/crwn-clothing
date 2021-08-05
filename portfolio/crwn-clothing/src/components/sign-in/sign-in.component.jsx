// *we build the sign-in first vs teh sign out because we are going to setup our firebase database
// * we will use a class componnet because we need to store what the users are typing in
import React from 'react'

import './sign-in.styles.scss'

// *in our state we store an empty string for email and password
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password: ''
        }
    }
    // *this will prevent the defalut submit action from firing because we want full control
    handleSubmit=event=>{
        event.preventDefault()
        this.setState({email:'', password:''})
        

    }
    // *we will pull the value and name off our event target
        // *the evnet target will end up being our input element itself 
        // *and we want the name value that we just set as 
        // *well as the actual value of the target they just typed in
    // *we will dynaically set our state aka set state, so that it sets the name, so it will render whatever the value that come in wil lbe
        // *for ex. if name is parrsowrd, it wall say password and point tot he value that they typed in.  the same applies for email as well

        

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    // *in our render we are going to return a div that contains our entire sign in component
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                {/* we include the onsubmit function  that calls our method handle submit*/}
                <form onSubmit={this.handleSubmit}>
                {/* required is an html attribute */}
                    <input name ='email' type='email' onChange={this.handleChange} value = {this.state.email} required/>
                    <label>Email</label>
                        <input 
                            name ='password' 
                            type='password' 
                            value = {this.state.password} 
                            // *we set onChange to to point to our handleChange()
                            onChange={this.handleChange}
                            required
                        />
                    <label>password</label>

                    <input type='submit' value ='Submit Form'/>
                </form>
            </div>

        )
    }
}


export default SignIn