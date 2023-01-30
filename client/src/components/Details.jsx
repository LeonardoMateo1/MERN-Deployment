import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'


const Details = () => {

  const {id} = useParams()
  const [pet, setPet] = useState({})
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${id}`)
      .then((res)=>{
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err)=>console.log(err))
    }, [])

  const deleteFilter = () =>{
    axios.delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/")
      })
      .catch((err) => console.log(err))
  }



  return (
    <div className='container'>
      <div className="container_header">
        <h1>Pet Shelter</h1>
        <div>
          <h5><Link to="/">back to home</Link></h5>
        </div>
      </div>
      <div className="container_sub_header">
        <h2>Details about: {pet.name}</h2>
        <div>
          <button className='adopt' onClick={deleteFilter}>Adopt {pet.name}</button>
        </div>
      </div>
      <div className="card">
        <div className="left_card">
          <p><span className='bolded'>Pet type:</span></p>
          <p><span className='bolded'>Description:</span></p>
          <p><span className='bolded'>Skills:</span></p>
        </div>
        <div className="right_card">
          <p>{pet.type}</p>
          <p>{pet.description}</p>
          <p>{pet.skill_1}</p>
          <p>{pet.skill_2}</p>
          <p>{pet.skill_3}</p>
        </div>
      </div>
    </div>
  )
}

export default Details