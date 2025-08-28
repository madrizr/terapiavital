import React from "react";
import "./styles/inputs.css";
interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function InputText({ onChange, ...props }: InputTextProps) {
  const inputStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "0.2rem",
    backgroundColor: "transparent",
    border: "solid 1px rgb(0, 187, 167)",
    width: "100%",
    margin: "0.5rem 0",
    color: "#4a5565",
  };

  return <input style={inputStyle} onChange={onChange} {...props} />;
}

export default InputText;
