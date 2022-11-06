import * as React from "react";
export const Button = (props: {
  onClick?: () => unknown,
  children: any
}) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};



