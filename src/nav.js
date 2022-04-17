import React from 'react'

import { Link } from 'react-router-dom'
function a(e) {
    
        const ele = document.getElementsByClassName("nav-link")
    for (var i = 0; i < ele.length;i++)
        ele[i].classList.remove("nav-link-active")
       
            
    
    console.log(ele)
        
    
    
  
    // )
    e.target.classList.add("nav-link-active")
   
    
}
export default function nav() {
    // window.("click",a );
  return (
    <div className="nav-container">
      <div className="todo-heading">#todo</div>
      <div className="nav-links">
        <Link to="/" className="nav-link nav-link-active" onClick={(e) => a(e)}>
          All
        </Link>
        <Link to="/active" className="nav-link" onClick={(e) => a(e)}>
          Active
        </Link>
        <Link to="/done" className="nav-link" onClick={(e) => a(e)}>
          Completed
        </Link>
      </div>
    </div>
  );
}
