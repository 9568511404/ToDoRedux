import { MAKE_REQUEST,FAIL_REQUEST,GET_USERLIST, DELETE_USERDATA,ADD_USER } from "./ActionType"
import axios from "axios"

export const makeRequest = ()=>{
    return{
        type :MAKE_REQUEST
    }
}
export const failRequest = (err)=>{
    return{
        type :FAIL_REQUEST,
        payload : err
    }
}
export const getUserList = (data)=>{
return{
    type : GET_USERLIST,
    payload : data
}
}
export const deleteDataApi = (payload) => {
    return {
        type : DELETE_USERDATA,
        payload 
    }
}
export const addDataApi = (value) => {
    return {
        type : ADD_USER,
        payload : value
    }
}
export const FetchUserList = ()=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get("http://localhost:5000/user").then(res=>{
            const userlist = res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const deleteApi = (code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.delete("http://localhost:5000/user/"+code).then(res=>{
            dispatch(deleteDataApi)
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const addApi = (data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.post("http://localhost:5000/user",data).then(res=>{
            dispatch(addDataApi)
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}