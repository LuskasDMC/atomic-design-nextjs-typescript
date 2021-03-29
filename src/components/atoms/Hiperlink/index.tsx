import React from "react";

interface IHiperlinkProps {
  url: string;
  className?: string;
}

const Hiperlink: React.FC<IHiperlinkProps> = ({ children, url, className }) => (
  <a href={url} className={className}>
    {children}
  </a>
);

export default Hiperlink;
