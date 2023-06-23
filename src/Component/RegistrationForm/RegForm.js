import React, {   useRef, useState } from 'react'
import "./Form.css"
import { insertUser } from '../../RTK/Slice/userSlice'
import { useDispatch } from 'react-redux'



const RegForm = () => {

    const dispatch = useDispatch(); 

   

    // For store Current Committe
    const [committe , setCommitte] = useState("")
    // For Access Data
    const nameInput = useRef(null) ; 
    const committeInput  = useRef(null) ; 

    const submitHandler = (e)=>{
        e.preventDefault() ; 
        dispatch(insertUser({ name : nameInput.current.value , committe :committeInput.current.value} ))
        nameInput.current.value =null ; 
        committeInput.current.value = null ; 
    }
    
    const chooseCommitteHandler = ()=>{
        setCommitte(committeInput.current.value) ; 
    }
  return (
    <div className='container'>
    <div className='main'>
        <div className='info'>
            <h2>Glad to see You!</h2>
        </div>
        <form onSubmit={submitHandler}>
            <h2>Hello, friends!</h2>
            <div className='input-form'>
                <i className="fa-solid fa-user"></i>
                <input type='text' placeholder='Name' required ref={nameInput} />
            </div>
            <div className='input-form'>
            <i className="fa-solid fa-users-line"></i>
            <p>{committe!=="" ? committe :"Choose Committe" }</p>
                {/*<input type='password' placeholder='Name' required />*/}
                <select id="cars" className='choose' onChange={chooseCommitteHandler} ref={committeInput}>
                <option value="Guest">Guest</option>
                <option value="Web Development">Web Development</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="PR" >PR</option>
                <option value="FR" >FR</option>
                <option value="Game Development" >Game Development</option>
                <option value="Programming Concept (PC)" >Programming Concept (PC)</option>
                <option value="Problem Solving (PS)" >Problem Solving (PS)</option>
                <option value="Social Media" >Social Media</option>
                <option value="P&V" >P&V</option>
                <option value="Coordination" >Corrdination</option>
                <option value="High Board" >High Board</option>
                </select>
            </div>
                <button >Attend</button>
        </form>
    </div>
    </div>
  )
}

export default RegForm
