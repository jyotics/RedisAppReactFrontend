import React,{Component} from 'react';
import axios from 'axios';

const initialState = {
                firstname:'',
                lastname:'',
                email:'',
                phonenumber:'',
                firstnameError :'',
                emailError :'',
                lastnameError :'',
                phonenumberError :'',success_msg:'',error_msg:''
            };

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        
        this.onchangeFirstName =this.onchangeFirstName.bind(this);
        this.onchangeLastName =this.onchangeLastName.bind(this);
        this.onchangeEmail =this.onchangeEmail.bind(this);
        this.onchangePhoneNumber =this.onchangePhoneNumber.bind(this);


        this.onSubmit =this.onSubmit.bind(this);
        

        

        this.state={
            firstname:'',
            lastname:'',
            email:'',
            phonenumber:'',
            firstnameError :'',
            emailError :'',
            lastnameError :'',
            phonenumberError :'',success_msg:'',error_msg:''
        }
    }
    onchangeFirstName(e){
        this.setState({
            firstname:e.target.value
        })
    }

    onchangeLastName(e){
        this.setState({
            lastname:e.target.value
        })
    }

    onchangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    onchangePhoneNumber(e){
        this.setState({
            phonenumber:e.target.value
        })
    }


    
     validate = () => {

     		let firstnameError = "";
		    let emailError = "";
		    // let passwordError = "";

		    if (!this.state.firstname) {
		      firstnameError = "First Name cannot be blank";
		    }

		    if (!this.state.email.includes("@")) {
		      emailError = "Invalid Email";
		    }

		    if (emailError || firstnameError) {
		      this.setState({ emailError, firstnameError });
		      return false;
		    }

		    return true;
    };

    onSubmit(e){
        e.preventDefault();
        console.log('Form Submitted:');
        /*console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);*/

        const isValid = this.validate();
	    if (isValid) {
	      console.log(this.state);
	      // clear form
	      this.setState(initialState);

	      	 const newUser={
	            firstname:this.state.firstname,
	            lastname:this.state.lastname,
	            email:this.state.email,
	            phonenumber:this.state.phonenumber

        	}

	         axios.post('http://localhost/ci/welcome/add_user',newUser)
             .then(res => {
                    const code = res.data.status;
                    if(code == 203){
                        this.setState({error_msg: res.data.error_msg});
                    }else{
                        this.setState({success_msg: res.data.suceess_msg});
                    }
                    
                  }

              );

             

	    }
        

     
             
        
    }


    render() {
        return (
            <div className="container" style={{marginTop :20}} >
                <h3>Create User</h3>
                <div style={{fontSize :15, color:"green"}}>{this.state.success_msg}</div>
                <div style={{fontSize :15, color:"red"}}>{this.state.error_msg}</div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" 
                        className="form-control" 
                        value={this.state.firstname}
                        onChange={this.onchangeFirstName} />
                    </div>
                    <div style={{fontSize :15, color:"red"}}>{this.state.firstnameError}</div>


                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" 
                        className="form-control" 
                        value={this.state.lastname}
                        onChange={this.onchangeLastName} />
                    </div>
                    <div style={{fontSize :15, color:"red"}}>{this.state.lastnameError}</div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                        className="form-control" 
                        value={this.state.email}
                        onChange={this.onchangeEmail} />
                    </div>
                    <div style={{fontSize :15, color:"red"}}>{this.state.emailError}</div>


                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" 
                        className="form-control" 
                        value={this.state.phonenumber}
                        onChange={this.onchangePhoneNumber} />
                    </div>
                    <div style={{fontSize :15, color:"red"}}>{this.state.phonenumberError}</div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>

                    </div>

                </form>
                 
            </div>
        )

    }
}