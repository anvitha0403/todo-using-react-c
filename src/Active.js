import React, { useEffect,useState } from 'react'
import Todo from "./todo"
import SearchBox from "./SearchBox"

export default function Active() {

      const [list, setList] = useState([]);
   useEffect(() => {
       var list1 = JSON.parse(localStorage.getItem("list")) || [];
     
       
       var list2=list1.filter((m) => m.status === false);
       setList(list2);
    
    
   }, []);
      const rerender = () => {
         var list1 = JSON.parse(localStorage.getItem("list")) || [];

         var list2 = list1.filter((m) => m.status === false);
         setList(list2);
      };
   
    return (
      <div>
        <div className="flex-center">
          <SearchBox rerender={rerender}></SearchBox>
            </div>
            
            {
                list&&list.length?list.map((m, index) => {
          return (
            <Todo
              key={m.key}
              key1={m.key}
              title={m.title}
              status={m.status}
              rerender={rerender}
            />
          );
                }):<div className="green">All list Completed...Well Done...</div>
    
            }
      </div>
    );
}
