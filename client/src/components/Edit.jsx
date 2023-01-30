  import React, {useState, useEffect} from 'react'
  import axios from 'axios';
  import { useParams, useNavigate, Link} from 'react-router-dom'
  


const Edit = () =>{

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");
    const [errors, setErrors] = useState({});

    const {id} = useParams()
    const [pet, setPet] = useState({})
    const navigate = useNavigate()


    useEffect(()=>{
      axios.get(`http://localhost:8000/api/pets/${id}`)
      .then((res)=>{
        console.log(res.data);
        setPet(res.data);
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkill_1(res.data.skill_1);
        setSkill_2(res.data.skill_2);
        setSkill_3(res.data.skill_3);
      })
      .catch((err)=>console.log(err))
    }, [])


    const submitHandler = (e) =>{
      e.preventDefault();
      
      axios.put(`http://localhost:8000/api/pets/${id}`, {
        name,
        type,
        description,
        skill_1,
        skill_2,
        skill_3,
      })
      .then((res)=>{
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error.errors);
      });
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
          <h2>Edit {name}</h2>
        </div>
          <form onSubmit={submitHandler}>
          <div className="left">
            <div className="form-field">
              <label>Pet Name:</label><br />
              <input
              onChange={(e) => setName(e.target.value)}
              type="text" 
              name="name" 
              value={name} 
              />
              {
                errors.name ? errors.name.message : null
              }
            </div>
            <div className="form-field">
              <label>Pet Type:</label><br />
              <input
              onChange={(e) => setType(e.target.value)}
              type="text" 
              name="type" 
              value={type} 
              />
              {
                errors.type ? errors.type.message : null
              }
            </div>
            <div className="form-field">
              <label>Pet Description:</label><br />
              <input
              onChange={(e) => setDescription(e.target.value)}
              type="text" 
              name="description" 
              value={description} 
              />
              {
                errors.description ? errors.description.message : null
              }
            </div>
            <input type="submit" className='submit-form' value="Edit Pet"/>
          </div>
          <div className="right">
            <div className='form-field'>
              <label>Skills (optional):</label>
            </div>
            <div className="form-field">
              <label>Skill 1:</label><br />
              <input
              onChange={(e) => setSkill_1(e.target.value)}
              type="text" 
              name="skill_1" 
              value={skill_1} 
              />
            </div>
            <div className="form-field">
              <label>Skill 2:</label><br />
              <input
              onChange={(e) => setSkill_2(e.target.value)}
              type="text" 
              name="skill_2" 
              value={skill_2} 
              />
            </div>
            <div className="form-field">
              <label>Skill 3:</label><br />
              <input
              onChange={(e) => setSkill_3(e.target.value)}
              type="text" 
              name="skill_3" 
              value={skill_3} 
              />
            </div>
          </div>
          
        </form>

      </div>
    )}
export default Edit