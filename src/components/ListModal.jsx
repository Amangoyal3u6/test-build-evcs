import React, { Component } from 'react';
import VendorCarousel from './VendorCarousel'
import Modal from 'react-modal';


class ListModal extends Component {
  state = {  }
  render() { 
    console.log(this.props.isOpen);
    return (
      <div>
        <Modal onRequestClose={  this.props.isClose } isOpen={this.props.isOpen}  style={{ overlay:{background:'transparent' , zIndex: 1000} , content:{background : 'white' }  }}  >
          <div>
            <div styel={{width:'70%' , height:'150px'}}>
              <VendorCarousel />
            </div>
          <h2>this</h2>
          <p>Modal body</p>
          <button onClick={this.props.isClose}>close</button>
          </div>
         
        </Modal>
      </div>
      );
  }
}
 
export default ListModal;