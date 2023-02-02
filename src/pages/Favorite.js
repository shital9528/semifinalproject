import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import '../component/Favorite.css';
export default function Favorite() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

  const Loading = () => {
    return(
      <>
        <div className='col-md-6'>
           <Skeleton height={400}/>
        </div>
        <div className='col-md-6' style={{lineHeight:2}}>
           <Skeleton height={50} width={300}/>
           <Skeleton height={75}/>
           <Skeleton height={25} width={150}/>
           <Skeleton height={50}/>
           <Skeleton height={150}/>
           <Skeleton height={50} width={100}/>
           <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div>
      </>
    )
  }

  const ShowProduct = () => {
    return(
      <>
       <div className="col-md-3 mb-4 py-4" id="p">
                                <div class="card h-100 p-4" key={product.id}>
                                
                                    <button class="btns3">
                                    <i className='fa fa-heart me-1 '></i>

                                    </button>

                                    <img src={product.image} class="card-img-top" alt={product.title} height="275px" />
                                    
                                    <div class="card-body">
                                        
                                        <h5 class="card-title mb-0"> {product.title}</h5>
                                        <p class="card-text lead fw-bold ">${product.price}</p>
                                        <p className='lead my-1'>
                                            { product.rating && product.rating.rate} <i className='fa fa-star'></i>
                                        </p>
                                        <Link to={`/products/${product.id}`} class="btn btn-dark">ADD ITEM</Link>
                                    </div>
                                </div>
                            </div>
      </>
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-4'>
          {loading ? <Loading /> : <ShowProduct/>}
        </div>
      </div>

    </div>
  )
}
