import React, { Component } from 'react';
import VendorCarousel from './VendorCarousel'
import Modal from 'react-modal';
import DatePicker from 'react-date-picker';


class ListModal extends Component {
  state = {  }
  render() { 
    console.log(this.props.isOpen);
    return (
      <div>
        <Modal onRequestClose={  this.props.isClose } isOpen={this.props.isOpen}  style={{ overlay:{background:'transparent' , zIndex: 1000} , content:{background : 'white' }  }}  >
          <div>
              <VendorCarousel />
            <div style={{textAlign:'center'}}>
              <h2>{this.props.currentVendor.name}</h2>
              <hr style={{width:'50%' , margin:'0 auto'}} /> 
              <div style={{marginTop:'20px'}}> <DatePicker /> </div>
              <p>Modal body</p>
              <button onClick={this.props.isClose}>Close</button>
            </div>

          </div>
         
        </Modal>
      </div>
      );
  }
}
 
export default ListModal;