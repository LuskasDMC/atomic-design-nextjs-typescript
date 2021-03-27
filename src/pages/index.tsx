import Head from "next/head";

import LoginCard from "../components/organisms/LoginCard";
export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram clone - Atomic Design</title>
      </Head>
      <body className="w-screen h-screen bg-gray-50">
        <main className="flex items-center justify-center h-full">
          <LoginCard />
        </main>
      </body>
    </>
  );
}
