import React, { Component } from 'react';
 import OwlCarousel from 'react-owl-carousel';
 import 'owl.carousel/dist/assets/owl.carousel.css';
 import 'owl.carousel/dist/assets/owl.theme.default.css';


class VendorCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <OwlCarousel
                className="owl-theme"
                autoplay loop
                margin={5}
                
                items={2}
                autoWidth='true'
                nav
            >
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>
                <div class="item"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1c343usMa4cWIsAvowi7NzkFJXt9dWFmM4n78-eDc3vSJ3wKp&usqp=CAU" /> </div>

                </OwlCarousel>
         );
    }
}
 
export default VendorCarousel;