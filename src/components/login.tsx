import { useNavigate } from "react-router-dom";

const Login = () => {
    const PORT = import.meta.env.VITE_PORT;
    const navigate = useNavigate();

    console.log("This is port: ", PORT)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
    
        console.log("Email: ", email);
        console.log("Password: ", password);

        try {
            const response = await fetch(import.meta.env.VITE_DATABASE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Error: ${response.status}`);
            }

            const data = await response.json();

            if(data.message == "Login Successful"){
                console.log("Message: ", data.message);
                console.log("Token: ", data.token);
                console.log("User: ", data.user)
                navigate("/logged");
                localStorage.setItem("token", data.token)
            }

            // return data;
        } catch (error) {
            console.error((error as Error).message)
            alert(`${(error as Error).message}`)
        }
    }

    return (  
        <form onSubmit={handleSubmit} className="flex flex-col bg-white p-5 rounded gap-2 justify-center">
            <div className="flex justify-center items-center gap-2">
                <label htmlFor="email">
                    Email:
                </label>
                <input type="text" name="email" id="email" placeholder="Email Address" className="px-3 border py-2 rounded w-full"/>
            </div>

            <div className="flex justify-center items-center gap-2">
                <label htmlFor="password">
                    Password:
                </label>
                <input type="text" name="password" id="password" placeholder="Password" className="px-3 border py-2 rounded"/>
            </div>

            <button className="bg-green-500 rounded p-2 text-white font-bold -translate-y-0.25 hover:translate-none duration-200 cursor-pointer shadow hover:shadow-none hover:bg-green-600">Submit</button>
        </form>
    );
}
 
export default Login;