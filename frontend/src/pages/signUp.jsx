import { Button } from "../components/Button";
import BottomInfo from "../components/bottomInfo";
import Heading from "../components/heading";
import Input from "../components/input";
import { SubHeading } from "../components/subheading";

export default function SignUp() {
    return(
        <div className="flex flex-row justify-center items-center w-full h-[100vh]">
            <div className="flex flex-col items-center content-center py-3 px-3 bg-white w-[320px] h-[570px] rounded-lg">
                <Heading  text={"SignUp"}/>
                <SubHeading text={"Enter Your Information to create an account"}/>
                <Input dummy={"John"} heading={"First Name"}/>
                <Input dummy={"Doe"} heading={"Last Name"}/>
                <Input dummy={"johndoe@example.com"} heading={"Email"}/>
                <Input dummy={"********"} heading={"Password"}/>
                <Button text={"Sign Up"}></Button>
                <BottomInfo info={"Already have an Account?"} buttonText={"SignIn"} path="/signIn"></BottomInfo>
            </div>
          
        </div>
    )
}
