import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchImages } from '../actions/imageActions';
class FetchImage extends Component {

componentDidMount() {
    setInterval( () => 
    this.props.FetchImages(),
        500);
}


    render(){
        const postItems=this.props.images.map(({ _id, image }) => (
            <div key={_id}>
            <img src={'/uploads/' + image} alt="hi" style={{  height: '300px' ,width: '40%'}}></img> 
            <br /><br />
            </div>
          ));
        return (
            <div>
                {postItems}
            </div>
        
    )
   
}
}

const mapStateToProps = state => ({
    images:state.image.items
  });

export default connect(mapStateToProps, { FetchImages })(FetchImage);