import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';

function Students() {
  const [student,setStudent]=useState([])
    useEffect(()=>{
        studentdata();
    },[])
    
       let studentdata = async()=>{
            try{
                let students = await axios.get('https://63450500dcae733e8fe7f213.mockapi.io/students');
                console.log(students);
                setStudent(students.data);
            }
            catch(error){
                alert('error')
            }
        }
  return (
    <div className='container'>
    <div className='row'>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Students Lists</h1>
                    <Link to={'/StudentCreate'} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Create Student</Link>
                </div> 
 {    
    student.map((items)=>{
    return <StudentCard item={items}/>
    
})
}
</div>
</div>

  )
}

export default Students