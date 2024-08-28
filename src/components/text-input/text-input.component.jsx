import styles from "./text-input.module.css";

// props = { key : value }
const TextInput = (props) => {
  const { label, type = "text", name } = props;
  return (
    <div>
      <label>{label}</label>
      <input type={type} className={styles.control} name={name} />
    </div>
  );
};

export default TextInput;
