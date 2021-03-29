import React from "react";

import HiperlinkList from "../../molecules/HiperlinkList";
import { LINKS } from "./constants";

const Footer: React.FC = () => {
  return (
    <div>
      <HiperlinkList items={LINKS} />
      <div className="flex justify-center">
        <span className="text-xs text-gray-400 p-3">Português (Brasil)</span>
        <span className="text-xs text-gray-400 p-3">
          © 2021 Instagram do Facebook
        </span>
      </div>
    </div>
  );
};

export default Footer;
