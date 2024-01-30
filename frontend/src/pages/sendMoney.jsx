import Input from "../components/input";

export default function sendMoney(){
    return (

        <div className="flex items-center justify-center w-full h-screen bg-stone-200">
        <div className="bg-white rounded-lg p-5 flex flex-col">
            <p className="text-black text-lg font-bold self-center mb-6">Send Money</p>
            <div>
            <div className="flex flex-row my-2">
                <div style={{backgroundImage: 'url(src/assets/pic.jpg)' }} className="rounded-full size-6 bg-cover bg-center "></div>
                <p className=" text-md text-black font-bold ml-4">{"Friends name"}</p>
            </div>
                
            </div>
            <Input dummy={"Enter Amount"} heading={"Amount (in Rs)"}></Input>
            <button className="text-white bg-green-500 rounded-md px-3 py-2 mt-3 text-xs">Send Money</button>
        </div>
        </div>
    )
}