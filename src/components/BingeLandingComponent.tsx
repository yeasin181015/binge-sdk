import React from "react";

interface BingeLandingComponentProps {
  text: string;
}

const BingeLandingComponent: React.FC<BingeLandingComponentProps> = ({
  text,
}) => {
  return <div>text me when you reach home {text}</div>;
};

export default BingeLandingComponent;
