// import React, { useState } from 'react'
// import { deleteToDo } from './Actions'
// import { connect } from 'react-redux'
// import process from "./process.gif"
// const Listout =(props)=> {
//     const [time,setTime] =useState(false)
//     setTimeout(()=>{
//         setTime(true)
//     },3000)
//   return (
//     <div>
//    {time?<p key={props.todo.index}>  { props.todo.message} <button onClick={()=>props.dispatch(deleteToDo(props.todo.id))}>X</button> 
// </p>:<img src={process} alt=''  style={{height:"150px",width:"250px"}} />}
        
//     </div>
//   )
// }
// export default  connect()(Listout)