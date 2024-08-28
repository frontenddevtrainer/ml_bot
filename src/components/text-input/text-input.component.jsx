import { useState, useEffect } from "react";
import styles from "./text-input.module.css";

// props = { key : value }
const TextInput = (props) => {
  const { label = null, type = "text", name, change } = props;
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   return function () {
  //     console.log("unmount");
  //   };
  // }, []);

  const onChange = (e) => {
    setValue(e.target.value);
    change(e.target.value);
  };

  return (
    <div>
      {/* 
      { label ? <label>{label}</label> : "no label"}
       */}
      {label && <label>{label}</label>}
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
