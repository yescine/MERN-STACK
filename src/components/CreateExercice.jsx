import React,{useState} from 'react'

function CreateExercice() {
   const [exercice,setExercice] = useState({
      "username":'',
      "description": '',
      "duration":1,
      "date": new Date()
   })
   const onsubmit = (e)=> {
      
      window.location('/')
   }

   return (
      <div className="container">
         <p>Create Exercice</p>
      </div>
   )
}

export default CreateExercice
