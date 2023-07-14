import React,{useEffect,useState}from 'react'
import { connect } from 'react-redux'
import { FetchUserList, deleteApi } from './Actions'
import process from "./process.gif"
const List = (props) => {
  useEffect(()=>{
    props.loaduser()
  },[])

  const [time,setTime] =useState(false)
      setTimeout(()=>{
          setTime(true)
      },3000)

  const delete_handler = (code) => {
       props.userremove(code)
       props.loaduser()
  }
  const [currentPage,setCurrentPage] = useState(1)
  const recordPerPage =5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex-recordPerPage;
  const record = props.user.userlist.slice(firstIndex,lastIndex)
  const npage= Math.ceil(props.user.userlist.length/recordPerPage)
  const numbers =[...Array(npage+1).keys()].slice(1)
  function perPage (e){
    e.preventDefault()
    if (currentPage!==1){
      setCurrentPage(currentPage-1)
    }
  }
  function nextPage(e){
    e.preventDefault()
  if (currentPage!==npage){
    setCurrentPage(currentPage+1)
  }
  }
  function  changeCurrentP(id,e){
    e.preventDefault()
    setCurrentPage(id)
  }
 return (
  <div>
  {props.user.loading? <div className='image'>  <img src={process} alt='' /> </div>:
        <div>
         { record.map((item,id)=>{
    return(
      <>
      <div className='tab'>
        <div className='tab2'>
      <table>
         <tr key={id} >
         <th>{item.id}</th>
          <td>{item.name}</td>
          <td><button onClick={() => delete_handler(item.id)}>X</button></td>
        </tr>
      </table> 
      </div> 
      </div>
      </>
    )
  })
}
        {/* {props.todos.map((todo,index)=> <Listout todo={todo} />
        )} */}
<nav style={{display:"flex",justifyContent:"center",alignItems:"center" }} >
  <ul style={{display:"flex",listStyle:"none",justifyContent:"space-between",textDecoration:"none",width:"28%"}}>
    <li className='page-item'>
      <a href="" onClick={(e)=>perPage(e)} className='link'>Prev</a>
    </li>
    {
      numbers.map((n,i)=>{
        return(
          <>
            <li className={`page-item ${currentPage == n ? "active" : " "}`} key={i}>
              <a href=" " onClick={(e)=>changeCurrentP(n,e)} className='link'>{n}</a>
            </li>
          </>
        )
      })
    }
    <li className='page-item'>
      <a href="" onClick={(e)=>nextPage(e)} className='link'>Next</a>
    </li>
  </ul>
</nav>
</div>}
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
      loaduser:()=> dispatch(FetchUserList()),
      userremove :(code)=> dispatch(deleteApi(code))
    }
  }
  
  export default  connect(mapStateToProp,mapDispatchToProps)(List)


