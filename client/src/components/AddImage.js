import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddnewImage } from '../actions/imageActions';
class AddImage extends Component {
    constructor(){
        super();
        this.state = {
            myImage:''
        }
    }

    onChange = (e) => {
        this.setState({ myImage:e.target.files[0] })
    }
//  async
    onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.myImage);
        this.props.AddnewImage(formData);
        this.setState({ myImage:'' })
    }

    render(){
    return (
        <div>
            <form method='post' onSubmit={this.onSubmit}>
                <input
                    type="file"
                    placeholder="Add File"
                    name="myImage"
                    onChange={this.onChange}
                ></input>
                <input
                    type="submit"
                    placeholder="Add Image"
                ></input>
            </form>
            <br/>
            
        </div>
        
    )
   
}
}

const mapStateToProps = state => ({
    imagenew:state.image.item
  });

export default connect(mapStateToProps, { AddnewImage })(AddImage);
