import { useState } from "react"

export default function DisplayUsers() {
    const [users,setUsers] = useState(["User 1", "User 2"])
    const [searchedUser,setSearchedUser] = useState([""]);

    return (
        <div className="flex flex-col py-2">
            <p className="text-black text-xl font-bold">Users</p>
            <input type="text" onChange={(e)=> setSearchedUser(e.target.value)} placeholder="Search Users" className="bg-transparent border-2 rounded-md py-2 px-3 my-3 border-slate-300"/>
            {users.map(user=><PayUser user={user}></PayUser>)}
        </div>
    )


    function PayUser({user}) {
        return (
            <div className="flex flex-row justify-between my-3 items-center">
                <div className="flex flex-row">
                <div style={{backgroundImage: 'url(src/assets/pic.jpg)' }} className="rounded-full ml-4 size-6 bg-cover bg-center "></div>
                <p className=" text-md text-black font-bold ml-4">{user}</p>
                </div>
                <button className="text-white bg-gray-800 rounded-md px-3 py-2 text-xs">Send Money</button>
            </div>
        )
    }
}