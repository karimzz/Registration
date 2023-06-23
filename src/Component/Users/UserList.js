import React, { useEffect } from 'react'
import "./UserList.css" ; 
import vector from "./../../Photo/vector.png"
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser } from '../../RTK/Slice/userSlice';
import { Fade } from 'react-reveal';
import { useRef } from 'react';
import { useState } from 'react';



const UserList = () => {
  const dispatch = useDispatch() ;

  // For Get All User 
  useEffect(()=>{
    dispatch(getAllUser())
  } ,[])

  // For Access Global state
  const {users , loading } = useSelector(state=>state.userSlice) ; 
  console.log(users.length) ; 
  console.log(loading) ; 

  // For Access input Search
  const searchInput = useRef(null) ; 

  // For Store Search Data
  
  
  

  // For Search 
  let copyUser =users ;
  const searchHandler = ()=>{
      copyUser = users
      copyUser = users.filter((item)=>{
        return item.name.includes(searchInput.current.value) ; 
      })
  }

  return (
    <div className='container'>
        <h2 className='title'>DashBoard</h2>
        <div className='control'>
          <h5>This Is Totla : {users.length}</h5>
          <input type='text' onChange={searchHandler} ref={searchInput} placeholder='Enter Name'  />
        </div>
      <div className='llist'>
        <div className='row-title'>
            <h4 style={{width : "300px"}}>Name</h4>
            <h4 style={{width : "360px" }}>Committe</h4>
            <h4></h4>
        </div>
        
        {
          loading &&(
              <div >loadding</div>
          )
        }
        {
          copyUser.map((item )=>{
            return (
              <Fade key={item.id}>
              <div className='row' key={item.id}>
            <div className='vector'>
                <img alt='vector' src={vector} />
                <p>{item.name}</p>
            </div>
            <div className='committe'>
                {item.committe}
            </div>
            <div className='btn-group'>
                <button >Edite</button>
                <button className='btn-delete' onClick={()=>dispatch(deleteUser(item.id))}>Delete</button>
            </div>
        </div>
        </Fade>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default UserList
