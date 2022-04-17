import React, { useEffect, useState } from "react";
import Todo from "./todo";

export default function Completed() {
  const deleteAll = () => {
    localStorage.setItem('list', JSON.stringify([]));
    rerender()
  }
  const [list, setList] = useState([]);
  useEffect(() => {
    var list1 = JSON.parse(localStorage.getItem("list")) || [];

    var list2 = list1.filter((m) => m.status === true);
    setList(list2);
  }, []);
    const rerender = () => {
     var list1 = JSON.parse(localStorage.getItem("list")) || [];

     var list2 = list1.filter((m) => m.status === true);
     setList(list2);
    };

  return (
    <div className="">
      {list.map((m, index) => {
        return (
          <Todo
            key={m.key}
            key1={m.key}
            title={m.title}
            status={m.status}
            icon={true}
            rerender={rerender}
          />
        );
      })}
      {list &&list.length?
        <div className="flex-end">

        <button className="button-block" onClick={() => {
          deleteAll()
          
        }}>
          delete All
        </button>
      </div>:<div className="red">no items checked off.....focus on your todo list</div>
      }
      
    </div>
  );
}
