import React, { Component } from 'react';

class ChargerType extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            chargerType:"Charger Type",
            brands:[ 
                
               { key:1 , name:"Audi"   }
          
            ],
            //after getting brand name for user we will get the key of that brand name from brands object and will use that key in cars array to show models;
            cars:[

            { key:1 ,  name : "A7" },
            { key:2 ,  name : "Q5" },
            { key:3 ,  name : "RS7"}
           
            ]
    }
         
        this.renderBrands = this.renderBrands.bind(this);
        this.renderCars = this.renderCars.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    renderBrands(){

        return(
            <React.Fragment>
                {this.state.brands.map( (brand) => {
                   return( 
                
                    <option key={brand.key}> {brand.name} </option>
                   
                )
            }

                )}
            </React.Fragment>
        )
    }

    renderCars(){

        return(
            <React.Fragment>
                {this.state.cars.map( (car) => {
                   return( 
                
                    <option key={car.key}> {car.name} </option>
                   
                )
            }

                )}
            </React.Fragment>
        )
    }
    
    submitForm(){
        this.props.getChargerInfo(this.state.chargerType);
        this.props.changeComponent();
    }

    render() { 
        return (
            <form onSubmit={this.submitForm}>
                <select  className="evcsInput" >
                    <option selected disabled> Select Car Company</option>
                    {this.renderBrands()}
                </select>
                
                <select className="evcsInput" >
                    <option selected disabled>Select Car Name</option>
                    {this.renderCars()}
                </select>

                <input disabled className="evcsInput" value={this.state.chargerType} />
                <button className="btn btn-danger evcsButton" type="submit">NEXT</button>
            </form>
          );
    }
}
 
export default ChargerType;