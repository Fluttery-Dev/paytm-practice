import { useState } from "react"

export default function Balance() {
    const [balance,setBalance] = useState(100);
    return (
        <div className="text-black font-bold mb-2 py-2">
            {"Your Balance  $" + balance}
        </div>
    )   
}