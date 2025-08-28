import type { CSSProperties } from "react";
import "./styles/inputs.css";
interface InputTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows: number;
}

function TextArea({ onChange, rows, ...props }: InputTextAreaProps) {
  const textareaStyle: CSSProperties = {
    padding: "0.5rem 1rem",
    borderRadius: "0.2rem",
    backgroundColor: "transparent",
    border: "solid 1px rgb(0, 187, 167)",
    width: "100%",
    margin: "0.5rem 0",
    color: "#4a5565",
    resize: "none",
  };

  return (
    <textarea
      style={textareaStyle}
      onChange={onChange}
      rows={rows}
      {...props}
    ></textarea>
  );
}

export default TextArea;
