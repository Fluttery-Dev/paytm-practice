export default function AppBar() {
    return (
        <div className="flex flex-row justify-between bg-transparent my-3">
            <p className="text-2xl text-black font-bold">Payments App</p>
            <div className="flex items-center">
                
            <p className=" text-md text-black font-bold">Hello, User</p>
            <div style={{backgroundImage: 'url(src/assets/pic.jpg)' }} className="rounded-full ml-4 size-8 bg-cover bg-center"></div>
            </div>
        </div>
    )
}