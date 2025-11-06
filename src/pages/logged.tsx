import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logged = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            console.log("There's no token...")
            navigate("/")
        }else{
            console.log(token)
        }
    }, [token, navigate])

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }

    return (  
        <div className="DashB">
            <div className="flex justify-center flex-col gap-5">
                <h1 className="text-center text-white font-bold text-4xl [text-shadow:4px_4px_12px_rgba(0,0,0,0.40)]">You're successfully logged in...</h1>
            
                <button className="bg-red-500 p-5 text-white font-bold -translate-y-1 hover:translate-none cursor-pointer duration-200" onClick={()=>handleLogout()}>Logout</button>
            </div>
        </div>
    );
}
 
export default Logged;