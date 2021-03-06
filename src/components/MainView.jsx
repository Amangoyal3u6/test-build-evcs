import React, { Component } from 'react'
import { Layout, Navigation, Header, Drawer, Content, List, ListItem, ListItemAction, ListItemContent, Icon } from 'react-mdl';
import ListModal from './ListModal'
import { Card } from 'react-bootstrap'
import './App.css';
import MyProfile from './MyProfile'


class MainView extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            list: [
                { key: 0, name: 'Singh Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
                { key: 1, name: 'Goyal Gas Station', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrilQTDd90pmhWeP0ot8zorczcWI_wA3znO97Zi2Ty3vPbT3ZJ&usqp=CAU" },
                { key: 2, name: 'Goyal Gas Station', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrilQTDd90pmhWeP0ot8zorczcWI_wA3znO97Zi2Ty3vPbT3ZJ&usqp=CAU" },
                { key: 3, name: 'Aman Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
                { key: 4, name: 'Shivam Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
                { key: 5, name: 'Upinder Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
                { key: 6, name: 'Palak Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
                { key: 7, name: 'Jit Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" },
                { key: 8, name: '$ingh Gas Station', img: "https://avatarfinancial.com/uploads/images/birchwood---front.jpg" }
            ],
            isModalOpen: false,
            isToggle: false,
            SelectedVendor: 0,
            activeComponent:1
        }
        this.renderComponent = this.renderComponent.bind(this);
        this.handleComponentLoading = this.handleComponentLoading.bind(this);
    }


      renderComponent(){
            if(this.state.activeComponent === 0){
                return(
                    <div>
                        <List style={{ width: '70%' }}>
                            {this.RenderList()}
                        </List>
                    </div>
                )
            }

            else if (this.state.activeComponent === 1 ){
                return (
                    <div>
                        <MyProfile />
                    </div>
                )
            }
      }

    RenderList = () => {
        return this.state.list.map((vendor) => (
            < ListItem key={vendor.key} className='stationListItem' threeLine >
                <img src={vendor.img} height="60px" width="80px" className="listItemImg" />
                <ListItemContent onClick={() => { this.changeFocus(vendor) }} subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle."> <a onClick={this.isModalOpen}>{vendor.name}</a>
                </ListItemContent>
                <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                </ListItemAction>
            </ ListItem >
        ));
    }

    handleComponentLoading(n){

        this.setState({ currentPage : n }, () => {console.log("set state : ")});
    }


    changeFocus = (eleKey) => {
        console.log("eleKey", eleKey);
        const SelectedVendor = eleKey;
        this.setState({ SelectedVendor }, () => {
            console.log(this.state.SelectedVendor);
        })
    }

    isModalOpen = () => {
        console.log("inside IsmodelOpen");
        this.setState({ isModalOpen: true })

        //     const obj = this.state.list.filter( (n) =>{ n.key == this.state } )

    }

    isModalClose = () => {
        console.log("inside IsmodelClose");
        this.setState({ isModalOpen: false })

    }

    render() {
        return (
            <div className='MainView'>
                <div className="demo-big-content" >
                    <Layout fixedHeader  >
                            <Header id="main-header" title="EVCS" scroll>
                                <Navigation>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                    <a href="#">Link</a>
                                </Navigation>
                            </Header>
                        <Drawer style={{background:"rgba(0, 0, 0, 0.9)" , padding:"13px 13px" }}>
                            <div className="card">
                                <Card>
                                    <div className="class-content">
                                        <Card.Img id="sidebar-img" variant="top" src="logo.jpg" fluid />
                                        <Card.Body id="sidebar-userinfo" >
                                            <Card.Title>Shivam Jha</Card.Title>
                                            <Card.Text>Gatsby_Operator@gmail.com</Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                            <div className="list-container" >
                                <ul>
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(1)} } href=""> <i className="fa fa-user"></i> My Profile </a></li>           <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(2)} } to="/myvehicle"><i className="fa fa-car"></i> My Vehicle</a></li>      <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-history"></i> My Trips</a></li>            <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-credit-card"></i> Payment</a></li>         <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-share-alt"></i> Share</a></li>             <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-address-card"></i> Contact Us</a></li>     <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-star"></i> Rate Us</a></li>                <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-cog"></i> Settings</a></li>                <hr className="sidebar-list-hr" />
                                    <li className="nav-item">   <a className="sidebar-links" onClick={ () => {this.handleComponentLoading(0)} } href="#"><i className="fa fa-sign-out"></i> Logout</a></li>             <hr className="sidebar-list-hr" />
                                </ul>
                            </div>
                        </Drawer>
                        <Content>

                            <div  className="page-content">
                                {this.renderComponent()}
                                < ListModal currentVendor={this.state.SelectedVendor} isClose={this.isModalClose} isOpen={this.state.isModalOpen} />
                            </div>

                        </Content>
                    </Layout>
                </div>
            </div>
        );
    }


}

export default MainView;
