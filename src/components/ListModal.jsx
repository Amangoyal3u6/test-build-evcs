import React, { Component } from 'react';

import Modal from 'react-modal';


class ListModal extends Component {
  state = {  }
  render() { 
    console.log(this.props.isOpen);
    return (
      <div>
        <Modal isOpen={this.props.isOpen}  style={{ overlay:{background:'transparent' , zIndex: 1000} , content:{background : 'white' }  }}  >
          <div > 
          <h2>Modal</h2>
          <p> Modal body </p>
          </div>
         
        </Modal>
      </div>
      );
  }
}
 
export default ListModal;