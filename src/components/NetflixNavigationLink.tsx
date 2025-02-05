import React from "react";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NetflixNavigationLink: React.FC<LinkProps> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <a
      className="Row__title"
      href={to}
      // onClick={(event) => {
      //   event.preventDefault();
      //   onClick(event);
      // }}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: "12px",
      }}
    >
      {children}
    </a>
  );
};

export default NetflixNavigationLink;
