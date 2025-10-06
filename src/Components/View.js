import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecordList from './RecordList'

const View = () => {

  const [reviewlist,setReviewList] = useState([]) 

  const fetchData = async () =>
  {
  axios.get('http://localhost/reactCrud/reviewlist.php')
      .then ( res =>
        {
          setReviewList(res.data)
        })
      .catch(function(error){
        console.log(error)
      })
  }
 useEffect(() => {
  fetchData()
  },[])
  return (
    <div className='mt-5'>
            <h1 className='text-success'><i>View Review</i></h1>
            <div className="container">
              <div className="row">
                <div className='col-md-12'>
                  <table className='table table-striped table-hover' style={{ marginTop:20 }}>
              <thead>
                <tr className='table-success'>
                  <th>Customer Id</th>
                  <th>Product Id</th>
                  <th>Review Details</th>
                  <th style={{textAlign:'center'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {reviewlist.map((review) =>
                    <tr key={review.rid}>
                      <td>{review.cid}</td>
                      <td>{review.pid}</td>
                      <td>{review.reviewDetails}</td>
                    </tr>
                )} */}
                {
                  reviewlist.map((review)=>(
                        <RecordList
                        key = {review.rid}
                        rid = {review.rid}
                        cid = {review.cid}
                        pid = {review.pid}
                        reviewDetail = {review.reviewDetails}
                        />
                ))}
              </tbody>
            </table>
                </div>
              </div>
            </div>        
    </div>
  )
}

export default View
