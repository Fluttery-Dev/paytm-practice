import { atom, selector } from "recoil"

export const authAtom = atom({
    key: "authAtom",
    default: "Bearer"
})

export const isAuthorizedSelector = selector({
  key: "isAuthorizedSelector",
  get: ({get})=>{
    const token = get(authAtom);
    return token !== "Bearer";
  }  
})