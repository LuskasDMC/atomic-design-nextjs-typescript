import React from "react";
import Image from "next/image";

import LoginForm from "../../molecules/LoginForm";
import LogInFacebook from "../../molecules/LogInFacebook";
import Divider from "../../atoms/Divider";
import Card from "../../atoms/Card";
import Hiperlink from "../../atoms/Hiperlink";

const LoginCard: React.FC = () => {
  return (
    <Card className="flex flex-col items-center p-7 w-80">
      <picture className="mb-6">
        <Image
          src="/instagram-logo.png"
          layout="fixed"
          width="180"
          height="70"
          quality={100}
          priority
          alt="instagram-logo"
        />
      </picture>
      <LoginForm />
      <Divider text="OU" className="mt-4" />
      <LogInFacebook className="my-5" />
      <Hiperlink url="#" className="text-xs	text-blue-500">
        Esqueceu a senha?
      </Hiperlink>
    </Card>
  );
};

export default LoginCard;
