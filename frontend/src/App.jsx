import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import Dashboard from "./pages/dashboard"
import SendMoney from "./pages/sendMoney"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
        <Route path="/sendMoney/:id" element={<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
