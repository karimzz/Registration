import React from 'react' ;
import "./Utility.css";

const Container = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container
