import React from "react";

import Hiperlink from "../../atoms/Hiperlink";

interface LogInFacebookProps {
  className?: string;
}

const LogInFacebook: React.FC<LogInFacebookProps> = ({ className }) => (
  <Hiperlink
    url="#"
    className={
      "flex items-center justify-center font-bold text-blue-500 " + className
    }
  >
    <img
      src="/facebook-icon.png"
      alt="facebook-icon"
      className="text-blue-700 font-bold w-6 mr-2"
    />
    Entrar com o Facebook
  </Hiperlink>
);

export default LogInFacebook;
