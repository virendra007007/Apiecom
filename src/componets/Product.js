import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addtocart } from '../cartdata/cartSlice';

const Product = () => {

    const [data, setData] = useState(null)

    const  dispatch = useDispatch()

    //  first load
    useEffect(() => {
        //  product get set to state

        let url = 'https://dummyjson.com/products'

        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])

    const datatosave = (data) =>{
        dispatch(addtocart(data))
        toast.success('successfully add this item to cart!')
    }


    return (
        <div>
            <div className='d-flex mx-4 justify-content-between'>
                <h1 className='text-center'>E-com </h1>
                <div className='d-flex align-items-center'>
                   <Link to='/cart'> <button className='btn px-4 btn-success'>view</button></Link>
                </div>
            </div>
            <div className='container'>
                <div className='row'>

                    {
                        data != null && data.products.map((item, index) => {

                            return (
                                <div className='col-4 my-2'>
                                    <div className='card p-4'>
                                        <img src={item.thumbnail} className='img-fluid'></img>
                                        <div className=' justify-content-between'>
                                            <h2>${item.price}</h2>
                                            <p>{item.category}</p>
                                            <p>price={item.price}</p>
                                            <p>rating={item.rating}</p>


                                        </div>
                                        <button className='btn btn-primary my-2' onClick={()=>datatosave(item)}>
                                            Add to cart
                                        </button>

                                    </div>
                                </div>
                            )

                        })
                    }


                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Product