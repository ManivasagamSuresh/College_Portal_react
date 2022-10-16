import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function StaffCard({item}) {
  return (
    <div className='col-lg-4 mt-3'>
    <div class="card" style={{width: "18rem"}}>
        <img src={item.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h2 class="card-title">{item.name}</h2>
          <p class="card-text">{item.dept}</p>
          <Link to={`/StaffProfile/${item.ID}`} class="btn btn-primary">View Profile</Link>
        </div>
      </div>
      </div>
  )
}

export default StaffCard