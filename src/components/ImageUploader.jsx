import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures:[]};
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        
        //deleting the old profile picture from array picture
        if(picture.length === 2)
            picture.shift();
        this.props.setProfilePic(picture[0]);
    }

    render() {
        return (
            <div>
            <ImageUploader
                withIcon={false}
                buttonText='Change Profile Picture'
                onChange={this.onDrop}
                imgExtension={[".jpg" , ".png" , ".jpeg"]}
                maxFileSize={5242880}
            />
        </div>
        );
    }
}

export default ImageUpload;