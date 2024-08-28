import { useState } from "react";
import Button from "../button/button.component";
import TextInput from "../text-input/text-input.component";

const LoginForm = () => {
  const [formdata, setFormData] = useState({});

  const submit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  const onChange = (value) => {
    console.log(value, "on change");
  };

  return (
    <form onSubmit={submit}>
      <TextInput
        name="email"
        change={(value) => {
          setFormData({ ...formdata, email: value });
        }}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        change={(value) => {
          setFormData({ ...formdata, password: value });
        }}
      />
      <Button label="login" type="submit"></Button>
    </form>
  );
};

export default LoginForm;
