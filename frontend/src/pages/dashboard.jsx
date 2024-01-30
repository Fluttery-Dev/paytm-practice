import Balance from "../components/Balance";
import DisplayUsers from "../assets/DisplayUser";
import AppBar from "../components/AppBar";

export default function Dashboard() {
    return (
        <div className="w-full h-screen bg-white p-5">
            <AppBar></AppBar>
            <Balance></Balance>
            <DisplayUsers></DisplayUsers>
        </div>
    )
}