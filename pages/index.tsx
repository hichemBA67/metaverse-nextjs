import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-rose-600 overflowhidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>
    </div>
  );
}
