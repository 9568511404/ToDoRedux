import React, { useEffect,useState } from 'react'
import axios from 'axios'

export default function Pagination() {
  const [api,setApi] = useState([])
  let url = "http://localhost:5000/user"
  const fetchApi = () =>{
    try {  
    axios.get(url).then((res) =>setApi(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
         fetchApi()
  },[])

  const [currentPage,setCurrentPage] = useState(1)
  const recordPerPage =5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex-recordPerPage;
  const record = api.slice(firstIndex,lastIndex)
  const npage= Math.ceil(api.length/recordPerPage)
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
  <>
    <div>  <h1> PAGINATION  </h1></div>
     <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
     
    {record.map((item,id)=>{
          return(
            <>
            <tbody>
            <tr key={id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
           </tr>
           </tbody>
            </>
          )
    })}
    </table>
     </div>
<nav >
  <ul style={{display:"flex",listStyle:"none",justifyContent:"space-around",textDecoration:"none"}}>
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
    </> 
     )
}