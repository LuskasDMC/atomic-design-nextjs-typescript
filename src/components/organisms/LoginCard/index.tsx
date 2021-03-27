import React from "react";
import Image from "next/image";

import Card from "../../atoms/Card";
import LoginForm from "../../molecules/LoginForm";

const LoginCard: React.FC = () => {
  return (
    <Card className="flex flex-col items-center p-10 w-96">
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
    </Card>
  );
};

export default LoginCard;
