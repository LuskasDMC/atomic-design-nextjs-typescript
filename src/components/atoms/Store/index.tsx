import React from "react";

interface IStoreProps {
  type: "google-play" | "app-store";
  className?: string;
}

const Store: React.FC<IStoreProps> = ({ type, className }) => {
  switch (type) {
    case "app-store":
      return (
        <img
          src="/app-store.png"
          alt="app-store"
          className={"cursor-pointer w-36 " + className}
        />
      );
    case "google-play":
      return (
        <img
          src="/google-play.png"
          alt="google-play"
          className={"cursor-pointer w-36 " + className}
        />
      );
  }
};

export default Store;
