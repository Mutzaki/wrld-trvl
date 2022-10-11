import React, {useState} from 'react'
import '../styles/ShopStyle.css'
import HeroImage from '../components/HeroImage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'

function Shop () {
const [toDo, setToDo] = useState ([
  {"id": 1, "title": "Task 1", "status": false},
  {"id": 2, "title": "Task 2", "status": false}
]);

const [newTask, setNewTask] = useState ('');
const [updateDate, setUpdateData] = useState ('');

const addTask = () => {
if(newTask) {
  let num = toDo.length +1;
  let newEntry = { id: num, title: newTask, status:false }
  setToDo([...toDo, newEntry])
  setNewTask('');
}
}
const deleteTask = (id) => {
let newTask = toDo.filter( task => task.id !== id)
setToDo(newTask);
}
const markDone = (id) => {
let newTask = toDo.map(task => {
  if(task.id === id) {
    return({ ... task, status: !task.status})
  }
  return task;
})
setToDo(newTask);
}
const cancelUpdate = () => {

}
const changeTask = (e) => {

}
const updateTask = (e) => {

}


  return (
    <div className='Container'>
      <HeroImage heading='Tasks List' text='Here you can Manage the Tasks you need to do before going out to Space' />

    
       
       
       {/*Add Task */}
      <div className='row'>
        <div className='col'>
          <input 
          value={newTask}
          onChange={ (e) => setNewTask (e.target.value)}
          className="input2"
          ></input>
        </div>
        <br />
        <div className='col-auto'>
          <button 
          onClick={addTask}
          className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />


      {/* Display ToDos */}
      {toDo && toDo.length ? '' : 'No Tasks'}
      
      
      {toDo && toDo

      .sort ((a, b) => a.id > b.id  ?  1 : -1)
      .map( (task, index) => {
        return (

          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={task.status ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
            <span className="taskText">{task.title}</span>
              </div>
              <div className='iconsWrap'>
                <span title= "Completed / Not Completed"
                onClick={(e) => markDone(task.id)}>
                  <FontAwesomeIcon icon={faCircleCheck}/>
                </span>
               
                {task.status ? null : (
                <span title= "Edit">
                  <FontAwesomeIcon icon={faPen} />
                </span>
                )}
               
                <span title= "Throw " 
                onClick={() => deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          </React.Fragment>

        )
      })
      }
    </div>
    
    
  )
}

export default Shop;

