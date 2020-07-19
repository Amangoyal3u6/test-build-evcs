import React, { Component } from 'react';
 import OwlCarousel from 'react-owl-carousel';
 import 'owl.carousel/dist/assets/owl.carousel.css';
 import 'owl.carousel/dist/assets/owl.theme.default.css';
 import carousel1 from "./jordan.jpg"
 import carousel2 from "./jordan2.jpg" 

 import "./App.css"
 
const options = {
    items: 8,
};



class VendorCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <OwlCarousel
                className="owl-carousel owl-theme"
                autoplay  
                margin={5}
                items={9}
                autoWidth='false'
                nav="true"
                // {...options}
            >
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture"  width="150px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" width="100px" height="80px"/> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" width="100px" height="80px"/> </div>

                </OwlCarousel>
         );
    }
}
 
export default VendorCarousel;