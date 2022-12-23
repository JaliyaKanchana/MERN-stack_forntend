import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      sku:"",
      productname:"",
      qty:"",
      price:"",
      productdecription:"",
      productimages:"",
    }
  }

  handleInputChange =(e) =>{
    const{name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

 
  onSubmit= (e) =>{
    e.preventDefault();

    const{sku,productname,qty,price,productdecription,productimages} = this.state;

    const data ={
      sku:sku,
      productname:productname,
      qty:qty,
      price:price,
      productdecription:productdecription,
      productimages:productimages
    }

    console.log(data)

    axios.post("/post/save",data).then((res) => {
      if(res.data.success){
        this.setState(
        {
          sku:"",
          productname:"",
          qty:"",
          price:"",
          productdecription:"",
          productimages:"",
        }
      )
    }
    })


  }


  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
        <form className="mt-4">
        <div className=''>
                <h1 className="h3 mb-5 font-weight-normal">Add New Product</h1>
                  
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">SKU</label>
                        <input type="text"  name ="sku" className="form-control" value={this.state.sku} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Product Name</label>
                        <input type="text" name ="productname"className="form-control" value={this.state.productname} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">qty</label>
                        <input type="qty"  name ="qty" className="form-control" value={this.state.qty} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Price</label>
                        <input type="price"  name ="price" className="form-control" value={this.state.price} onChange={this.handleInputChange} aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Product Decription</label>
                        <input type="text"  name ="productdecription" className="form-control" value={this.state.productdecription} onChange={this.handleInputChange} aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Product Images</label>
                        <input type="text"  name ="productimages" className="form-control" value={this.state.productimages} onChange={this.handleInputChange} aria-describedby="emailHelp" />
                        
                    </div>
                  
                   
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
            </form>
      </div>
    )
  }
}
