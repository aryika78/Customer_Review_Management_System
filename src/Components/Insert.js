import React from 'react'
import { useState } from 'react';
import axios from 'axios';
//mt-5 (1-5) in bootstrap is used for margin top
//mt-0 = rem 0 mt-1 = 1.25 rem
const Insert = () => {
  const [custid, setcustId] = useState('')
  const [prodtid, setprodId] = useState('')
  const [review , setReview] = useState('')

  const custidchangeHandler = (Event) =>{
    setcustId(Event.target.value)
  }
  const prodidchangeHandler = (Event) =>{
    setprodId(Event.target.value)
  }
  const reviewchangeHandler = (Event) =>{
    setReview(Event.target.value)
  }
  const submitHandler = (Event) =>{
    Event.preventDefault()
    const customer ={
      customer_id : custid,
      product_id : prodtid,
      review : review
    }
    // fetch('http://localhost/reactCrud/insert.php',{
    //   method : "POST",
    //   body : JSON.stringify(customer),
    //   headers : {
    //     'content-Type' : 'application/json'
    //   }
    // })
    axios.post('http://localhost/reactCrud/insert.php', customer)
    .then ( res => console.log(res.data),
      alert('Review Added Successfully!')
  )
        setcustId('')
        setprodId('')
        setReview('')
  }

  return (
      <div className='mt-5'>     
      <h1 className='text-success'><i>Add Review</i></h1>
      <form onSubmit={submitHandler}>
        <div className='mb-3 col-md-8'>
          <label className='form-label'>Customer Id:</label>
          <input type='text' value={custid} onChange={custidchangeHandler} className='form-control form-control-lg' autoFocus/>
        </div>
        <div className='mb-3 col-md-8'>
          <label className='form-label'>Product Id:</label>
          <input type='text' value={prodtid} onChange={prodidchangeHandler} className='form-control form-control-lg'/>
        </div>
        <div className='mb-3 col-md-8'>
          <label className='form-label'> Review Please:</label>
          <input type='text' value={review} onChange={reviewchangeHandler} className='form-control form-control-lg '/>
        </div>
        <div className='mb-3' style={{marginTop : '20px', marginLeft : '900px'}}>
        <input type='submit' value="Add Review" className="btn btn-primary"/>
        </div>        
        </form>
    </div>
  )
}

export default Insert
