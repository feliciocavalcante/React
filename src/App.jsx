import { EnvelopeSimple, Lock, Password } from "phosphor-react";
import ImageLogin from "./assets/college-entrance-exam-animate.svg";



function App() {


  return (
    <div className="bg-blue-500 w-full h-screen flex">
      <div className="w-1/2 h-full bg-linear-65 from-purple-500 to-pink-500 items-center flex justify-center 
     flex-col text-white"
        name="esquerda">
        <img src={ImageLogin} alt="Imagem de login" className="w-[250px]" />
        <h1 className="text-3xl font-bold text-center  mb-4">Secure Login Portal</h1>

        <p className="text-center">Access your dashboard securely with our protected login <br />
          system. Your data is encrypted and secure.</p>
      </div>
      <div className="bg-white w-1/2 h-full text-cente justify-center flex flex-col items-center
     " name="direita">
        <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
        <p className="text-gray-500"> Enter your details to sign in to your account</p>

        <form className="w-full flex flex-col items-center justify-center gap-4 mt-8">
          <div className="flex flex-col text-left w-3/5">
            <label htmlFor="email">Email</label>
            <div className="rounded-md border-gray-100
             border-2 px-4 py-1 items-center flex gap-2 focus-within:border-blue-500">
              <EnvelopeSimple size={20} className="text-gray-400" />
              <input type="email" name="email" id="email" className="outline-none w-full " placeholder="name@example.com" /></div>
          </div>
          <div className="flex flex-col text-left w-3/5">
            <label htmlFor="password">Password</label>
            <div className="rounded-md border-gray-100
             border-2 px-4 py-1 items-center flex gap-2 focus-within:border-blue-500">
              <Lock size={20}  className="text-gray-400" />
              <input type="password" name="password" id="password" className="outline-none w-full " placeholder="********" /></div>
          </div>

          <button type="submit" className="bg-blue-500 text-white w-3/5 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-all">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default App
