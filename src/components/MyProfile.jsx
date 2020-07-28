import React, { Component } from 'react';
import Jordan from './J.jpg';
import ImageUploader from "./ImageUploader.jsx";
import { Textfield } from 'react-mdl';



class Profile extends Component {
    constructor(props) {
        
        super(props);
        
        this.state = { 
            currentProfilePicture : Jordan ,
            UploadedFileObj:{},
            mobileNo:"+1 (647) 539 9953",
            newName:"",
            newEmailId:""
            }

        this.handleImageSelector = this.handleImageSelector.bind(this);
        this.setProfilePicture = this.setProfilePicture.bind(this);
    }

    handleImageSelector(event){
        console.log(event.target.files[0])
        this.setState({ currentProfilePicture : URL.createObjectURL(event.target.files[0]) , UploadedFileObj : event.target.files[0] } , () => {console.log(this.state.currentProfilePicture)} );
    }

    setProfilePicture(fileObj){
        console.log( "imported : " , fileObj);
        this.setState({ UploadedFileObj : fileObj } , ( ) => { this.setState({ currentProfilePicture : URL.createObjectURL(this.state.UploadedFileObj)  }) } );
    }

    render() { 
        return ( 
            <div id="myprofile-container">
                <img src={this.state.currentProfilePicture} alt="profile picture" id="profile-picture"  />
                <br />

                <div className="myprofile-imagebox">
                    
                    <ImageUploader  setProfilePic={this.setProfilePicture} />
                </div>
                <div className="myprofile-textfields" style={{textAlign:"left"}} >
                <h5> Change Name </h5>
                <Textfield
                    onChange={(event) => { this.setState({ newName : event.target.value } , () =>{console.log(this.state.newName)} ); }}
                    label="Full Name"
                    value={this.state.newName}
                    floatingLabel
                    style={{width: '200px'}}
                />
                <br/>

                <h5>Contact Number</h5>
                <Textfield
                    onChange={() => {}}
                    value = {this.state.mobileNo}
                    label=""
                    disabled
                    floatingLabel
                    style={{width: '200px'}}
                />
                <br />
                
                <h5>Change Email Id</h5>
                <Textfield
                    onChange={(event) => {this.setState({ newEmailId : event.target.value });}}
                    label="Email"
                    value={this.state.newEmailId}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    floatingLabel
                    style={{width: '200px'}}
                />
            </div>
                <button className="btn btn-danger evcs-button" >Save & Update</button>
            </div>

            
         );
    }
}
 
export default Profile;