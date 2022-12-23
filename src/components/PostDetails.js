import React, { Component } from 'react';
import axios from 'axios';
import { params } from 'react-router-dom';


export default class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };

  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });


        console.log(this.state.post);
      }

    });


  }

  render() {

    const{sku,productname,qty,price,productdecription,productimages} = this.state.post;

    
    return (
      <div style={{marginTop:'20px'}}>
        <h2>{productname}</h2>
        <hr/>

        <dl className="row">
          <dt className="col-sm-3">Product Decription</dt>
          <dt className="col-sm-3">{productdecription}</dt>

          <dt className="col-sm-3">Price</dt>
          <dt className="col-sm-3">{price}</dt>

       </dl>
      </div>
    )
  }
}
