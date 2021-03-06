import Image from "next/image";
import Avatar from "../components/Avatar";
import ChangeUsername from "../components/ChangeUsername";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-rose-300 text-rose-400">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://lh3.googleusercontent.com/etJIZOte0GpII39r4QKo3jopk6iVtRm0ZK62JUuXsjuYfex4muBfxpzHxnZ3u6fndcCPAZ8X9BtrJ8zPs8O_tlmHCvgQVtRKGUOjM1s"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-rose-900 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welome to the Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
