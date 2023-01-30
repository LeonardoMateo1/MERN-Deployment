import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Dashboard = () => {

  const [pets, setPets] = useState([])
  const navigate = useNavigate()
  
  const handleClick = (id)=>{
    navigate(`/pets/${id}`)
  }
  const handleAdd = () =>{
    navigate(`/pets/new`)
  }
  const handleEdit = (id)=>{
    navigate(`/pets/${id}/edit`)
  }

  useEffect(()=>{
    axios.get("http://localhost:8000/api/pets")
      .then((res)=>{
        console.log(res.data);
        setPets(res.data);
      })
      .catch((err)=>console.log(err))
    }, [])

  return (
    <div className='container'>
      <div className="container_header">
        <h1>Pet Shelter</h1>
        <div>
          <h5><Link to="/pets/new">add a pet to the shelter</Link></h5>
        </div>
      </div>
      <div className="container_sub_header">
        <h2>These pets are looking for a good home</h2>
      </div>
      <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
            {
            pets.map((item, index)=>(
            <tbody key={index}>
              <tr>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td><a onClick={(e)=>handleClick(item._id)} href="#">details</a> │ <a onClick={(e)=>handleEdit(item._id)} href="#">edit</a></td>
              </tr>
            </tbody>
          
        ))
      }</table>
    </div>
  )
}

export default Dashboard