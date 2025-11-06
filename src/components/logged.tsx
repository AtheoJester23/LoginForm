const Logged = () => {
    const token = localStorage.getItem("token");

    if(!token){
        console.log("There's no token...")
    }

    return (  
        <div className="DashB">
            <div className="flex justify-center flex-col gap-5">
                <h1 className="text-center text-white font-bold text-4xl [text-shadow:4px_4px_12px_rgba(0,0,0,0.40)]">You're successfully logged in...</h1>
            
                <button className="bg-red-500 p-5 text-white font-bold -translate-y-1 hover:translate-none cursor-pointer duration-200">Logout</button>
            </div>
        </div>
    );
}
 
export default Logged;