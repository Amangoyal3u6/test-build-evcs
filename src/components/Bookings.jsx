import React, { Component } from 'react';

import {Tabs,Tab, List, ListItem, ListItemAction, Icon, ListItemContent} from 'react-mdl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt , faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class Bookings extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1 ,
                       activeContent:0,
            pastBookings :[
                { key:1, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:2, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:3, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:4, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},                
                { key:5, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:6, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:7, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:8, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},                
                { key:9, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:10, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},                
                { key:11, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:12, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                { key:13, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"}


            ],

            activeBookings:[

                {key:1, StationName:"Gursidak Gas Station", date:"August 26,2020", daysPending:"Days_Pndng" },
                {key:2, StationName:"Aman Gas Station", date:"August 26,2020"    , daysPending:"Days_Pndng" },
                {key:3, StationName:"Rapid Gas Station", date:"August 26,2020"   , daysPending:"Days_Pndng" }

                
            ]
        
        
        };

        this.renderContent = this.renderContent.bind(this);
    }

    renderContent(){
        

        if(this.state.activeTab===0){
            return (
                <div>
                    {this.state.pastBookings.map((vendor) => {

                    return(
                        < ListItem key={vendor.key} className='' threeLine >
                        <ListItemContent subtitle={vendor.date}> <a>{vendor.StationName}</a>
                        </ListItemContent>
                        <ListItemAction>
                            <FontAwesomeIcon icon={faCheckCircle} id="paymentDoneIcon" />
                            <p> {vendor.paid} </p>
                        </ListItemAction>
                        </ ListItem >
                    )
                        
                    } )}
                </div>
            )
            
        }


        if(this.state.activeTab===1){
            return (
                <div>
                    {this.state.activeBookings.map((vendor) => {

                    return(
                        < ListItem key={vendor.key} className='' threeLine >
                        <ListItemContent onClick={() => { this.changeFocus(vendor) }} subtitle={vendor.date}> {vendor.StationName}
                        </ListItemContent>
                        <ListItemAction>
                            <FontAwesomeIcon icon={faCalendarAlt} id="daysPendingIcon" />  
                            <p>{vendor.daysPending} </p>
                        </ListItemAction>
                        
                        </ ListItem >
                    )

                        
                    } )}
                </div>
            )
            
        }
    
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs fixedTabs={true} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab  >Past</Tab>
                    <Tab  >Active</Tab>
                </Tabs>
                <section className="bookings" >
                    {this.renderContent()}
                </section>
            </div>    
        );
    }
}

export default Bookings;

