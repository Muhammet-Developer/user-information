import { useParams } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import  "./table.css"

const Table = ({search}) => {
  const [todos, setTodos] = useState([]);

  const [form, setForm] = useState({
    id: "",
    title: "",
    completed: false,
  });
  const params = useParams();
  const { id: userID } = params;
  const handleDelete = (id) => {
    const newArray2 = todos?.filter((item) => item.id !== id);
    // console.log(id)
    setTodos(newArray2);
  };
  const api2 = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}/todos`;
    axios(url).then((data) => setTodos(data.data));
  };

  useEffect(() => {
    api2();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([form, ...todos]);
  };

  const filtered = (search)=>{

  const filtre =todos.filter(item=>{
      return Object.keys(item).some((key)=>{
        return(
          item[key].toString().toLowerCase().includes(search.toLocaleLowerCase())
          )
        })
      })
      setTodos(filtre)
    }

useEffect(() => {
  filtered(search)
}, [search])


  const handleCompleted = (id, completed) => {
    const newData = []
    todos.map(item =>{
      if(item.id===id){
        newData.push({...item, completed:!completed}) }
        else{
          newData.push(item)
      }
    })
    
    setTodos(newData)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="custom-search">

        <input 
        class="custom-search-input"
        type="text"
        name="title"
        id="title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
              id: Math.floor(Math.random() * 1000),
            })
          }
          placeholder="Enter your title"
          />
          <button class="custom-search-botton" type="submit">Add</button>  
        
          </div>
      </form>
      <div>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Completed</th>
                <th>Delete</th>
              </tr>
            </thead>
            {todos?.map((item, index) => {
              const { completed, id, title } = item;
              //console.log(completed);
              return (
                <tbody key={index}>
                  <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td  onClick={()=>handleCompleted(id,completed)}>
                      {completed ? <DoneAllIcon/> :<RemoveDoneIcon />  }
                       </td>

                   
                    <td>
                      <DeleteForeverIcon
                        color="error"
                        onClick={() => handleDelete(id)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
{/* <td onClick={()=> handleCompleted(id,completed)} >
{completed ? <RemoveDoneIcon color="error"/> : <DoneAllIcon/>} 
  {/* {completed ? <RemoveDoneIcon/> : <DoneAllIcon/>} */}
  {/* <RemoveDoneIcon className={completed ? <RemoveDoneIcon color="error"/> : <DoneAllIcon/>} onClick={()=> handleCompleted(id,completed)} /> 
</td> */}