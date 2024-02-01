import { selector } from "recoil"



export const isAuthorizedSelector = selector({
  key: "isAuthorizedSelector",
  get: ()=>{
    return localStorage.getItem('token')!=null;
  }  
})