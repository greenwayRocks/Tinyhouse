import React from "react";

interface Props {
  title: string;
}

export const Listings = (props: Props) => {
  return <h2>{props.title}</h2>;
};

// To avoid warning
console.log(React.createElement("h2", "Home!"));
