import { useState } from "react";
import styles from "./text-input.module.css";

// props = { key : value }
const TextInput = (props) => {
  const { label, type = "text", name, change } = props;
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    change(e.target.value)
  };

  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={styles.control}
        name={name}
      />
    </div>
  );
};

export default TextInput;
