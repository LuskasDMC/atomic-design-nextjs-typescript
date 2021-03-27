import React from "react";

import Card from "../../atoms/Card";
import LoginForm from "../../molecules/LoginForm";

const LoginCard: React.FC = () => {
  return (
    <Card className="p-10 w-96">
      <LoginForm />
    </Card>
  );
};

export default LoginCard;
