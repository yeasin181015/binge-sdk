import React from "react";
interface LinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
declare const NetflixNavigationLink: React.FC<LinkProps>;
export default NetflixNavigationLink;
