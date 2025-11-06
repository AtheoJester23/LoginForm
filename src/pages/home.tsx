import { useNavigate } from "react-router-dom";
import Login from "../components/login";
import { useEffect } from "react";

const Home = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if(token) navigate("/logged")
    }, [token, navigate])

    return (  
        <div className="bg-[rgb(22,22,22)] flex justify-center items-center home">
            <Login/>
        </div>
    );
}
 
export default Home;