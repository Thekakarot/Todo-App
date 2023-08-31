import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// //here we did destructing 
// const CreateTask = ({modal, toggle, save}) => {

//   //to store the task value and we need to associate where they belong(input box)
//   const[taskName,setTaskName] = useState('');
//   //to store the description value and we need to associate where they belong(textarea box)
//   const[description,setDescription] = useState('');

//   const handleChange = (e) =>{
//     const {name, value} = e.target
    
//     if(name === 'taskName'){
//       setTaskName(value);
//     }
//     else{
//       setDescription(value);
//     }
//   }

//   const handleSave = () =>{
//     let taskObj = {};
//     taskObj["Name"] = taskName;
//     taskObj["Description"] = description;
//     save(taskObj);
//   }
  
//   return (
//     <div>
//        <Modal isOpen={modal} toggle={toggle} >
//         <ModalHeader toggle={toggle}>Create Task</ModalHeader>
//         <ModalBody>
//           <form>
//             <div className='form-group'>
//                 <label>Task Name</label>
//                 <input type="text" className='form-control mt-2' value={taskName} onChange={handleChange} name='taskName' />
//             </div>
//             <div className='form-group'>
//                 <label>Description</label>
//                  <textarea rows="5" className='form-control mt-2' value={description} onChange={handleChange} name = 'description'></textarea>
//             </div>
//           </form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handleSave}>
//             Create
//           </Button>{' '}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   )
// }

// export default CreateTask

const CreateTaskPopup = ({modal, toggle, save}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
      
      const {name, value} = e.target

      if(name === "taskName"){
          setTaskName(value)
      }else{
          setDescription(value)
      }


  }

  const handleSave = (e) => {
      e.preventDefault()
      let taskObj = {}
      taskObj["Name"] = taskName
      taskObj["Description"] = description
      save(taskObj)

  }

  return (
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
          
                  <div className = "form-group">
                      <label>Task Name</label>
                      <input type="text" className = "form-control mt-2" value = {taskName} onChange = {handleChange} name = "taskName"/>
                  </div>
                  <div className = "form-group">
                      <label>Description</label>
                      <textarea rows = "5" className = "form-control mt-2" value = {description} onChange = {handleChange} name = "description"></textarea>
                  </div>
              
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={handleSave}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;