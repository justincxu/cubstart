import { Link } from 'react-router-dom'; 
import DigitalCloset from "../DigitalCloset.png";

function Author() {

return ( 
<>

     <div class="text-center text-5xl mt-36 font-bold">
     DigitalCloset
     </div>
          <div class="text-center text-l">
               organize and store your clothes
          </div>
          <div class="flex flex-col justify-center items-center mt-8">    
          <img class= "object-scale-down h-48 w-96" src={DigitalCloset}></img>
     <div class="space-x-24 space-y-30 border-solid m-10" >
          <Link class="space-x-30 mt-2 w-48 lg:w-3/4 p-2 border border-6 border-blue-800 rounded-3xl text-center hover:bg-sky-700 bg-sky-200" to={"/SignIn"}>Sign In</Link>
          <Link class="space-x-30 mt-2 w-48 lg:w-3/4 p-2 border border-6 border-blue-800 rounded-3xl text-center hover:bg-sky-700 bg-sky-200" to={"/SignUp"}>Sign Up</Link>
     </div>
</div>
</>
)
}

export default Author;