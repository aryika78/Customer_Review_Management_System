import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const RecordList = (props) => {
    const deleteHandler = (rid) =>
    {
        if(window.confirm('Are you sure?'))
        {
            axios.delete('http://localhost/reactCrud/delete.php?id='+rid)
            .then(alert("Your Record is Successfully Deleted!"),
        window.location.reload(false)
        ).catch(err => console.log(err))
        }
    }
  return (
   <tr>
        <td>{props.cid}</td>
        <td>{props.pid}</td>
        <td>{props.reviewDetail}</td>
        <td style={{textAlign:'center'}}>
            {/* 1. <Link> component
It comes from React Router and is used for navigating between pages without reloading the whole website.

It works like an HTML <a> tag, but better for React apps.

✅ 2. to={"/Edit/" + props.rid}
This means when the user clicks on the link, they will go to a URL like /Edit/5 or /Edit/23, depending on the props.rid value.

It’s dynamically making the URL based on the rid (maybe a row ID or record ID you passed as a prop). */}


            <Link to= {"/Edit/" + props.rid} style={{width: '70px'}}
            className='btn btn-primary'>
                <i>Edit</i>
            </Link>
            &nbsp;&nbsp;
            <button onClick={() => deleteHandler(props.rid)} className='btn btn-warning'>
                <i>Delete</i>
                </button>
        </td>
   </tr>
  )
}

export default RecordList
