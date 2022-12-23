/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/posts").then(res => {

      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts)
      }

    });
  }


onDelete= (id) =>{

  axios.delete(`/post/delete/${id}`).then((response)=>{
    console.log(response.data);
    alert("Delete Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){

  const result = posts.filter((post)=>
  post.productname.includes(searchKey)||
  post.price.includes(searchKey)
  
  
  )

  this.setState({posts:result})
}


handleSearcchArea = (e) =>{

  const searchKey =e.currentTarget.value;
  axios.get("http://localhost:8000/posts").then(res => {

  if (res.data.success) {
    
      this.filterData(res.data.existingPosts, searchKey)
  }

});

}

  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
        <h4>All Product</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input 
          className="frome-control"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearcchArea}>

          </input>
        </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              
              <th scope="col">SKU</th>
              <th scope="col">IMAGE</th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">PRICE</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) =>(
              <tr key={index}>              

            
                <td>{posts.sku}</td>
                <td>{posts.productimages}</td>
                <td>
                    
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.productname}
                    </a>
                    </td>
                <td>{posts.price}</td>
                <td>

                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                  

                </td>
              </tr>

            ))}

          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>New Product</a></button>

    
      </div>
    )
  }
}



 
 
      
