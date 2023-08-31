import React, { useEffect, useState } from 'react'
import CreateTask from '../Modals/CreateTask';
import Card from './Card';


// const Todo = () => {
//     const [modal, setModal] = useState(false);
//     const[taskList,setTaskList] = useState([]);

//     const toggle = () => setModal(!modal);

//     useEffect(() =>{
//       let arr = localStorage.getItem("taskList");

//       if(arr){
//         let obj = JSON.parse(arr);
//         setTaskList(obj);
//       }

//     },[]);

//     const deleteTask = (index) => {
//       let tempList = taskList;
//       tempList.splice(index, 1);
//       localStorage.setItem("taskList", JSON.stringify(tempList));
//       setTaskList(tempList);
//       window.location.reload();
//   }

//     const savetask = (taskObj) =>{
//         const tempList = taskList;
//         tempList.push(taskObj);
//         //we can not store the data directly in tha array so that put get json file 
//         localStorage.getItem("taskList", JSON.stringify(tempList));
//         setModal(false);
//         setTaskList(tempList);
//     }

//     const updateListArray = (obj, index) =>{
//       let tempList = taskList;
//       tempList[index] = obj;
//       localStorage.getItem("taskList",JSON.stringify(tempList));
//       setTaskList(tempList);
//       window.location.reload();

//     }

//   return (
//     <>
//     <div className='heading'>
//         <h3>Todo List</h3>
//         <button className='btn btn-primary mt-2' onClick={() => {setModal(true)}}>Create task</button>
//     </div>
//     <div className="task-container">
//         {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray={updateListArray} /> )}
//     </div>
//     <CreateTask toggle={toggle} modal={modal} save = {savetask} />
//     </>
//   )
// }

// export default Todo


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])
  
  useEffect(() => {
      let arr = localStorage.getItem("taskList")
     
      if(arr){
          let obj = JSON.parse(arr)
          setTaskList(obj)
      }
  }, [])


  const deleteTask = (index) => {
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const toggle = () => {
      setModal(!modal);
  }

  const saveTask = (taskObj) => {
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(taskList)
      setModal(false)
  }


  return (
      <>
          <div className = "header text-center">
              <h3>Todo List</h3>
              <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
          </div>
          <div className = "task-container">
          {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
          </div>
          <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
      </>
  );
};

export default TodoList;