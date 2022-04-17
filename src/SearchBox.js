
import {useState} from 'react'



const SearchBox = ({rerender}) => {
  const [name, setname] = useState("");

  
  
  const Add = async (e) => {
    e.preventDefault();
    var list1 = JSON.parse(localStorage.getItem("list")) || [];
    if (name !== "") {
      list1.push({
        key: Math.random(),
        title: name,
        status: false,
      });
     
      localStorage.setItem("list", JSON.stringify(list1));
      rerender();
      
    }
  };
  return (
    <>
      <form className="search-box" onSubmit={(name) => Add(name)}>
        <input
          type="text"
          placeholder="add items"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <button className="button blue" typ="submit">
          Add
        </button>
      </form>
    </>
  );
};
export default SearchBox;
