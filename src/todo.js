import React from 'react'

const Todo = ({ key1, title, status, done, icon,rerender }) => {
  const delete1 = () => {
    var list = JSON.parse(localStorage.getItem("list"));
    var list2=list.filter((m) =>m.key!==key1 )
    localStorage.setItem("list", JSON.stringify(list2));
     rerender();
   };

  const handle = (e) => {
    var list = JSON.parse(localStorage.getItem('list'));
    list.map((m) => {
      if (m.key === key1) {
        var a = m;
        a.status = !m.status;
        return a
      }
      return m;
    })
    localStorage.setItem('list', JSON.stringify(list));
   
  

    
  
  }

  return (
    <div className="todo-container">
      <div className="todo-box">
        <input
          type="checkbox"
          defaultChecked={status}
          onClick={(e) => {
            handle(e);
            console.log(e);
          }}
        ></input>
        <label className="todo-title" htmlFor={key1}>
          {title}
        </label>
      </div>

      {icon ? (
        <i
          className="fa-solid fa-trash-can"
          onClick={() => {
            delete1();
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default  Todo