import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://lh3.googleusercontent.com/etJIZOte0GpII39r4QKo3jopk6iVtRm0ZK62JUuXsjuYfex4muBfxpzHxnZ3u6fndcCPAZ8X9BtrJ8zPs8O_tlmHCvgQVtRKGUOjM1s"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-gray-900 rounded-lg p-5 font-bold animate-pulse text-rose-600 font-mono"
        >
          Get me into the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        {/* Background image*/}
        <Image
          src="https://web-app-wpp-uks-prod-wppcom-cd-1.azurewebsites.net/-/media/project/wpp/images/wpp-iq/2021/gaming-and-the-metaverse.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
