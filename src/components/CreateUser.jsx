import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

function CreateUser() {
   const [user,setUser] = useState('')

   const onSubmit =(e)=>{
      e.preventDefault()
      console.log(user);
      Axios.post('http://localhost:5000/user/add', {"username":user})
         .then(res=>console.log(res.data))
      window.location='/'
   }
   return (
      <div className="container">
         <form onSubmit={onSubmit}>
            <input placeholder="user Name" onChange={e=> setUser(e.target.value)}/>
            <button className="btn btn-primary" type="submit">submit</button>
         </form>
      </div>
   )
}

export default CreateUser
