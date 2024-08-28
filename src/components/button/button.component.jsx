import styles from "./button.module.css";

const Button = ({ label, type = "button" }) => {
  return (
    <button className={styles.control} type={type}>
      {label}
    </button>
  );
};

export default Button;
