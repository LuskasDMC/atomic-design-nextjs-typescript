import React from "react";

import Hiperlink from "../../atoms/Hiperlink";

export interface IItem {
  text: string;
  url: string;
}

interface IHiperlinkListProps {
  items: IItem[];
}

const HiperlinkList: React.FC<IHiperlinkListProps> = ({ items }) => (
  <div className="flex flex-wrap	 justify-center">
    {items.map((item) => (
      <Hiperlink url={item.url} className="text-xs text-gray-400 p-3">
        {item.text}
      </Hiperlink>
    ))}
  </div>
);

export default HiperlinkList;
