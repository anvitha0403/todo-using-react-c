import React, { useEffect,useState } from 'react'
import SearchBox from './SearchBox'
import Todo from "./todo"
export default function All() {

  const [list, setList] = useState([]);
  const rerender = () => {

    var list1 = JSON.parse(localStorage.getItem('list') )|| [];
    setList( list1)
    
}
  useEffect(() => {
    var list1 = JSON.parse(localStorage.getItem('list') )|| [];
    setList( list1)
    
    
   
  },[])



  return (
    <>
      <div className="flex-center ">
        < SearchBox rerender={rerender} />
      
      </div>
      {
        
        list.map((m, index) => {
         if(m.status)
            return <Todo key={m.key} key1={m.key} title={m.title} status={m.status} done />;
         else {
            return (
              <Todo
                key={m.key}
                key1={m.key}
                title={m.title}
                status={m.status}
                done
              />
            );
           
          }
})
        
      }
     
      
      </>
  )
}
