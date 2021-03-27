import React, { useMemo, useState } from "react";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface IForm {
  userName: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({} as IForm);

  const buttonIsDisabled = useMemo(
    () => !form.userName?.length || form.password?.length < 6,
    [form]
  );

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="flex flex-col">
      <Input className="mb-2" name="userName" onChange={handleChange} />
      <Input className="mb-4" name="password" onChange={handleChange} />
      <Button disabled={buttonIsDisabled}>Entrar</Button>
    </form>
  );
};

export default LoginForm;
