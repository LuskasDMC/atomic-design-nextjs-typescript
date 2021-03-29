import React from "react";

import Store from "../../atoms/Store";

const StoreChoice: React.FC = () => (
  <div className="flex flex-col items-center p-2">
    Obtenha o aplicativo.
    <div className="flex justify-evenly mt-3">
      <Store type="app-store" className="m-1" />
      <Store type="google-play" className="m-1" />
    </div>
  </div>
);

export default StoreChoice;
