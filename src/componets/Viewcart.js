import React from 'react'
import { useSelector } from 'react-redux'
import { plus } from '../cartdata/cartSlice'


const Viewcart = () => {

  const data = useSelector((state)=>state.managecart)
  console.log(data,'redux state')


  return (
    <div>

      {
        data.cart.map((item,i)=>{
          return(
            <div className='container'>
              <h2 className='text-center'>cart item</h2>
              <div className='  card my-2 p-4'>
                   <div className='row'>
                       <div className='col-2'>
                           <img src={item.thumbnail} className='img-fluid' alt="" />
                       </div>
                       <div className='col-3'>
                           <h5>{item.title}</h5>
                       </div>
                       <div className='col-3'>
                           <div className='d-flex'>
                                <button className='btn btn-primary mx-2'>+</button>
                                  <h5>{item.qty}</h5>
                                <button className='btn btn-primary mx-2'>-</button>
                           </div>
                       </div>
                       <div className='col-2'>
                           <h5>{item.price}</h5>
                       </div>
                       <div className='col-2'>
                           <h5>{item.total}</h5>
                       </div>
                   </div>
              </div>
               </div>
          )
        })
      }
    </div>
  )
}

export default Viewcart