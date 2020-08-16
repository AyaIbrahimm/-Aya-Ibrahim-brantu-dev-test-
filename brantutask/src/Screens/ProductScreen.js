import React, { useLayoutEffect, useEffect } from 'react'

import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../Actions/productActions'
import { bindActionCreators } from 'redux'
import { connect } from 'mongoose'

function ProductScreen (props) {
    console.log("aho",props.match.params.id)

    const productDetails = useSelector(state=>state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
            //
        };


    },[]) 

 
    return <div>
        <div className="back-to-home">
            <Link to="/"style={{ color: '#000' }}> Back to Homepage</Link>
        </div> 
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        (
            <div className="details"> 
          <div className="details-image">
              <img src={product.image} alt="product"></img>
           </div>  
           <div className="details-info">
               <ul>
                   <li>
                      <h4> {product.name}</h4>
                   </li>
                   <li>
                      Price: <b>{product.price}</b>
                   </li>
                   <li>
                      Brand: <b>{product.brand}</b>
                   </li>
               </ul>
               </div>
           </div>
        )
}
        
    </div>
}

export default ProductScreen