import React, { Component } from 'react';

class PersonalInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"" , email:"" }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log("handleSubmit of Personal Info");
        this.props.changeComponent();
        const info = { name:this.state.name , email:this.state.email };
        this.props.addValuesToState(info);
    }

    render() { 
        return ( 
        <React.Fragment>
            <form className="form-elements" onSubmit={this.handleSubmit}>
              
                <input type="text"   className="evcsInput"   required  placeholder="Good Name ..."  value={this.state.name} onChange={  (event) => {this.setState({ name:event.target.value} , () => {console.log(this.state.name)} ) } }    />
                <input type="tel"    className="evcsInput"   disabled  placeholder="Contact Number"  value={this.props.phoneNo}   />
                <input type="email"  className="evcsInput"   required  placeholder="Email address ..." value={this.state.email} onChange={  (event) => { this.setState({ email:event.target.value} ) } }         />
                <br/>
                <button type="submit" className="btn btn-danger evcsButton" > SUBMIT </button>
            </form>
        </React.Fragment>
             );
    }
}
 
export default PersonalInfoForm;