import axios from 'axios'
import React, { useEffect } from 'react' 
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const Edit = () => {

    const [custid, setcustId] = useState('')
    const [prodtid, setprodId] = useState('')
    const [review , setReview] = useState('')
    const [reviewlist,setReviewList] = useState([])
  
    const custidchangeHandler = (Event) =>{
      setcustId(Event.target.value)
    }
    const prodidchangeHandler = (Event) =>{
      setprodId(Event.target.value)
    }
    const reviewchangeHandler = (Event) =>{
      setReview(Event.target.value)
    }

  
  const fetchData = ( )=> {
    axios.get('http://localhost/reactCrud/getReviewById.php?id='+id)
    .then ( res =>
        {
          setReviewList(res.data)
          setcustId(reviewlist.cid)
          setprodId(reviewlist.pid)
          setReview(reviewlist.reviewDetails)
        })
      .catch(function(error){
        console.log(error)
      })
  }

  const{id} = useParams()
  const navigate = useNavigate()
  const submitHandler = (Event) =>{
    Event.preventDefault()
    const updatedCust ={
      cid: custid,
      pid:prodtid,
      review:review
    }
    //alert(JSON.stringify(updatedCust))
    axios.put('http://localhost/reactCrud/update.php?id='+id,updatedCust)
     .then
    (res =>{
    alert('Review Updated Successfully!')
    //window.location.href = "http://localhost:3000/View"
    navigate ("/View")
    setcustId('')
    setprodId('')
    setReview('')
    })
  }

  // useEffect(() => {
  //   fetchData()
  // },[]) means call fetchData only once not every time the component is refreshed. We do this when we are not able to updaye data even if we use onchange event handlers
  useEffect(() => {
    fetchData()
  },[id]) //here the function fetchData will be called when id will change
  
  return (
    <div className='mt-5'>     
      <h1 className='text-success mb-5'><i>Edit Review</i></h1>
      <form onSubmit={submitHandler}>
        <div className='mb-3 col-md-8'>
          <input type='text' value={custid} placeholder='Please Enter Customer Id here' onChange={custidchangeHandler} className='form-control form-control-lg' autoFocus/>
        </div>
        <div className='mb-3 col-md-8'>
          <input type='text' value={prodtid} placeholder='Please Enter Product Id here' onChange={prodidchangeHandler} className='form-control form-control-lg'/>
        </div>
        <div className='mb-3 col-md-8'>
          <input type='text' value={review} placeholder='Please Enter Review here' onChange={reviewchangeHandler} className='form-control form-control-lg '/>
        </div>
        <div className='mb-3' style={{marginTop : '20px', marginLeft : '900px'}}>
        <input type='submit' value="Edit Review" className="btn btn-primary"/>
        </div>        
        </form>
    </div>
  )
}

export default Edit
