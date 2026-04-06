import {useState} from "react";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
const Signup = () => {
const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

    async function handleSignup(e){
        e.preventDefault();
        if(!name || !email || !password){
            toast.error('All fields are required',{
                duration:4000,
            });

            return;
        }
        const res = await fetch('https://authforge-ffjm.onrender.com/api/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        });
        const data = await res.json();
        if(!res.ok){
            toast.error(data.error || 'Signup Failed');
            return;
        }
        toast.success('User registered successfully');
        console.log('User registered successfully:', data);
        setName('');
        setEmail('');
        setPassword('');


    }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white flex flex-col">

      <div className="p-6">
        <h1 className="text-6xl tracking-wider font-bold font-['Bebas_Neue']" style={{ fontFamily: "Bebas Neue" }}>
          AuthForge
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Create Account
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSignup}>
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>


            <button
              type="submit"
              className="mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] hover:shadow-lg transition-all duration-200 font-semibold"
            >
              Signup
            </button>

          </form>


          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/"><span className="text-indigo-400 hover:underline cursor-pointer">
              Login
            </span></Link>
          </p>



        </div>
      </div>
             <div>
            <Toaster/>
          </div>
    </div>
  );
};

export default Signup;
