import React, { Component } from 'react'
import {Layout , Navigation, Header, Drawer, Content , List , ListItem , ListItemAction , ListItemContent , Icon, Button} from 'react-mdl';
import './App.css';
import ListModal from './ListModal'



class MainView extends Component {
    
    state = { list :[
        {key:0 , value:'Singh Gas Station' , img : "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
        {key:1 , value:'Goyal Gas Station' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrilQTDd90pmhWeP0ot8zorczcWI_wA3znO97Zi2Ty3vPbT3ZJ&usqp=CAU"},
        {key:3 , value:'Aman Gas Station', img:"https://avatarfinancial.com/uploads/images/birchwood---front.jpg"},
        {key:4 , value:'Shivam Gas Station', img:"https://avatarfinancial.com/uploads/images/birchwood---front.jpg"},
        {key:5 , value: 'Upinder Gas Station', img:"https://avatarfinancial.com/uploads/images/birchwood---front.jpg"},
        {key:6 , value: 'Palak Gas Station', img:"https://avatarfinancial.com/uploads/images/birchwood---front.jpg"},
        {key:7 , value: 'Jit Gas Station', img:"https://avatarfinancial.com/uploads/images/birchwood---front.jpg"},
        {key:8 , value: '$ingh Gas Station', img:"https://avatarfinancial.com/uploads/images/birchwood---front.jpg"}
    ],
    isModalOpen:false,
    isToggle:false,
    SelectedVendor:0
   }
   
   RenderList = () => { 
    return this.state.list.map((ele) => (
                        
        < ListItem key={ele.key} className='stationListItem' threeLine >
                <img src={ele.img} height="60px" width="80px" className="listItemImg"/>
                <ListItemContent  subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle."> <a onClick={this.isModalOpen}>{ele.value}</a>
                </ListItemContent>
            <ListItemAction>
                <a href="#"><Icon name="star" /></a>
            </ListItemAction>
        </ ListItem >
    ));
    }

    changeFocus = () =>{
        

    }

     isModalOpen = () => {
         console.log("inside IsmodelOpen");
         this.setState({isModalOpen:true} )
        
    //     const obj = this.state.list.filter( (n) =>{ n.key == this.state } )
        
     }

    isModalClose = () => {
        console.log("inside IsmodelClose");
        this.setState({isModalOpen:false} )
        
    }

    render() {
          
        return ( 
            <div className='MainView'>
                <div className="demo-big-content">
                    <Layout fixedHeader >
                        <Header title="EVCS" scroll>
                            <Navigation>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="EVCS">
                            <Navigation>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>

                            <div className="page-content">
                                
                                <List style={{width: '70%'}}>
                                    {this.RenderList()}
 
                                </List>

                                < ListModal  isClose={this.isModalClose} isOpen = {this.state.isModalOpen} />
                               
                            </div>
                        </Content>
                    </Layout>
                </div>
            </div>
         );
}


}
 
export default MainView;
