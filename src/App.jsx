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

        <form className="w-full flex flex-col items-center justify-center ">
          <div className="flex flex-col text-left w-3/5">  
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"  className="rounded-md border-gray-100
             border px-4 py-1" placeholder="name@example.com"/>
          </div>
          <div className="flex flex-col text-left w-3/5 mt-4">  
            <label htmlFor="password">Senha</label>
            <input type="password" name="Senha" id="password" className="rounded-md border-gray-100
             border px-4 py-1" placeholder="*******"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
