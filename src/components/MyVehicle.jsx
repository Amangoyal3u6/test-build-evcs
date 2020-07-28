import React, { Component } from 'react';
import './App.css';

var rclist =[];
class MyVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = { rcNo:null, 
          rcImage:null,
          RClist : [
            { SerialNumber : 1 , Number:"PB/000593/2020"},
            { SerialNumber : 2 , Number:"PB/000593/2020"},
            { SerialNumber : 3 , Number:"PB/000593/2020"},
            { SerialNumber : 4 , Number:"PB/000593/2020"}
          ],
          showform : 0,
          newRcNumber:"",
          newImageFile:""
          
        }
        this.renderRClist = this.renderRClist.bind(this)
        this.addRC = this.addRC.bind(this);
        this.fileSelector = this.fileSelector.bind(this);
        this.handleNewRCnumber = this.handleNewRCnumber.bind(this);
    }


    fileSelector(event) {

      if(event.target.files.length > 1){
        event.target.files.shift();
        console.log("Image array length : " , event.target.files , event.target.files.length )
      }
      else{
        console.log("In else : " , event.target.files);
      }
      this.setState({
          imageUploaded: event.target.files[0]
      }
      )
    }

    handleNewRCnumber(event){
      this.setState({ newRcNumber : event.target.value });
      

    }

    addRC(){
      for(var i=0 ; i<this.state.RClist.length ; i++){
        rclist[i] = this.state.RClist[i] 
      }
    }


    renderRClist(){
      return( 
        this.state.RClist.map((rc) => (
          <React.Fragment >
            <tr>
            <td>{rc.SerialNumber}</td>
            <td>{rc.Number}</td>
            <td><a href="#">Download</a> </td>
            </tr>
          </React.Fragment>         
         ) )
      );
    }

    render() { 
        return ( 
        <div id="myvehicle-container" >
          
          <h3 >My RC</h3>
          
          <table>            
            <tr>
              <th>Serial No</th>
              <th>RC Number</th>
              <th>Download RC</th>
            </tr>
            
            {this.renderRClist()}

          </table>
          <br/>
          <div>

        </div>
        <button onClick={ () => { this.setState({ showform:1  }); }} className="btn btn-danger">Add RC</button>
        
        <div className="addRC-form" style={{display: this.state.showform ? "block" : "none"}} >
        <form>
            <h3>Enter RC Number</h3>
            <input placeholder="Enter RC Number Here" onChange={this.handleNewRCnumber} className="addRC-inputs" type="text" />
            <br/>
            <h3 style={{marginTop:"0px"}}>Upload RC Photo</h3>
            <input className="addRC-inputs" type="file" onChange={this.fileSelector} />
            <br />
            <button onClick={ () => { this.setState({ showform : 0 }); this.addRC(); } } className="btn btn-danger" >Verify and Add</button>
        </form> 
        </div>
        </div>
         );
    }
}
 
export default MyVehicle;