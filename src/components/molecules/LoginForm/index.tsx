import React from "react";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col">
      <Input className="mb-2" />
      <Input className="mb-4" />
      <Button disabled>Entrar</Button>
    </form>
  );
};

export default LoginForm;
