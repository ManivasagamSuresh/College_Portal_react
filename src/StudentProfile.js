    import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiPhoneCall } from "react-icons/fi"
import { GiModernCity } from "react-icons/gi"
    
    function StudentProfile() {
        const useparams = useParams()
        useEffect(()=>{
            fetchprofiledata()
        },[])
        const [datas,setDatas]=useState([])
        let fetchprofiledata = async()=>{
            try{
                let data = await axios.get(`https://63450500dcae733e8fe7f213.mockapi.io/students/${useparams.id}`)
            console.log(data.data);
            setDatas(data.data);
            }
            catch(error){
                alert('error');
            }
        }
      return (
        <div className='container'>
        <div className="row">
        
            <div className='col-lg-12'>
    <div class="card mb-3" style={{width: "540px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={datas.image} class="img-fluid rounded-start mt-3 ms-3" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h1 class="card-title">Name : {datas.name}</h1>
          <p class="card-text">Father's Name : {datas.fathername}</p>
          <p class="card-text"><FiPhoneCall/>  {datas.phone}</p>
          <p class="card-text"><GiModernCity/>  {datas.city}</p>
          
          <div><Link to={`/editstudentprofile/${datas.id}`}>Edit Profile</Link></div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
 
      )
    }
    
    export default StudentProfile