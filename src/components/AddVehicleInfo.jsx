import React, { Component } from 'react';
import './App.css'


class AddVehicleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { rcType:"" , regNo :"" , rcImage:"" }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.printValue = this.printValue.bind(this);
    
    }
    handleSubmit(){
        const info = {type:this.state.rcType , img:this.state.rcImage , reg:this.state.regNo}
        this.props.getInfo(info);
    }
    render() { 
        return ( 
        <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <select required className="evcsInput" onChange={ (event)=>{this.setState({ rcType:event.target.value });} } >
                    <option value="" disabled selected >Select RC Type</option>
                    <option value="temporary" >Temporary</option> 
                    <option value="permanent" >Permanent</option>
                </select>

                <input required type="text" value={this.state.regNo} placeholder="REG NUMBER ..." className="evcsInput" onChange={ (event)=>{this.setState({ regNo : event.target.value });} } />  

                <input required type="file" style={{border:"2px double grey" , borderRadius:"5px" , padding:"4px"}} className="evcsInput" onChange={ (event)=>{ this.setState( { rcImage : event.target.files[0] } ) } } />

                <button className="btn btn-danger evcsButton ">SUBMIT</button>          
            </form>
        </React.Fragment> 
            );
    }
}
 
export default AddVehicleInfo;