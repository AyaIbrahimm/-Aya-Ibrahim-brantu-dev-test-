import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../Actions/productActions';

function CreateProductScreen(props){
    const[name,setName]= useState('');
    const[image,setImage] = useState('');
    const[price,setPrice] = useState('');
    const[brand,setBrand]= useState('');
    const[category,setCategory] = useState({ id:'',name:''});
    const productSave = useSelector(state=> state.productSave);
    const{loading : loadingSave, success: successSave, error: errorSave} = productSave;
    const dispatch = useDispatch();

    useEffect(()=>{
        return ()=>{
            //
        };
    },[successSave]);
    const handleChange=(e)=>{
      setCategory({...category,[e.target.name]:e.target.value});
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveProduct({name,image,price,brand,category}))
    }
    return <div>
        <div className="back-to-home">
            <Link to="/"style={{ color: '#000' }}> Back to Homepage</Link>
        </div> 
   
    
    <div className="form">

    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Product</h2>
        </li>
        <li>
          {loadingSave && <div>Loading...</div>}
          {errorSave && <div>{errorSave}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="image" onChange={(e) => setImage(e.target.value)}>
          </input>
        </li>

        <li>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" onChange={(e) => setPrice(e.target.value)}>
          </input>
        </li> 
        <li>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="categoryname">Category Name</label>
          <input type="text" id="categoryname" name="name" onChange={handleChange}>
          </input>
        </li> 
        <li>
          <label htmlFor="categoryid">Category ID</label>
          <input type="text" id="categoryid" name="id"   onChange={handleChange}>
          </input>
        </li>                         
        <li>
          <button type="submit"  className="button primary">Create</button>
        </li>
      </ul>
    </form>
  </div>  
  </div>

}

export default CreateProductScreen;