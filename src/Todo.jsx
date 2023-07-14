import React,{useState} from 'react'
import { FetchUserList, addApi } from './Actions'
import { connect, useDispatch } from 'react-redux'
import List from './List'

const Todo=(props)=> {
  const [name,setName] =useState('')
  const dispatch = useDispatch()

 function handle_submit(e){
  e.preventDefault()
  const obj = { name };
  dispatch(addApi(obj))
  setTimeout(() => {
    props.loaduser()
    setName('')
  }, 2000)
 }

 
  return (
    <div>
        <div className='container'>
        <h2>ToDo List Using Redux</h2>
            <div className='main'>
                <div className='main2'>
                <div className='main3'>
                <form action="" onSubmit={handle_submit}>
                    <input type="text" placeholder='Enter Data Items....' value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                    <button>ADD</button>
                </form> 
                </div>
               
                </div>
            </div>
            <div>
            <List />
            </div>
        </div>
    </div>
  )
}
const mapStateToProp=(state)=>{
return{
  user:state.user 
}
}
const mapDispatchToProps = (dispatch)=>{
  return{

    loaduser:()=> dispatch(FetchUserList())
  }
}




export default  connect(mapStateToProp,mapDispatchToProps)(Todo)