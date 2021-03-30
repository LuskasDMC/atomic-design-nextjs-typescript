import Head from "next/head";

import LoginCard from "../components/organisms/LoginCard";
import Footer from "../components/organisms/Footer";
import StoreChoice from "../components/molecules/StoreChoice";
import Card from "../components/atoms/Card";
import Hiperlink from "../components/atoms/Hiperlink";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <Head>
        <title>Instagram clone - Atomic Design</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow flex-grow	pt-20">
        <LoginCard />
        <Card className="flex items-center justify-center my-3  p-5 w-96">
          Não tem uma conta ? &nbsp;
          <Hiperlink url="#" className="text-blue-400 font-bold">
            Cadastre-se
          </Hiperlink>
        </Card>
        <StoreChoice />
      </main>

      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
}
