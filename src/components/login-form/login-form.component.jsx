import { useState } from "react";
import Button from "../button/button.component";
import TextInput from "../text-input/text-input.component";

const LoginForm = () => {
  const [formdata, setFormData] = useState({});

  const submit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  const controls = [
    { name: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
    { name: "confirm-password", type: "password", label: "Confirm Password" },
  ];

  return (
    <form className="p-10" onSubmit={submit}>
      {controls.length > 0
        ? controls.map((item, index) => {
            return (
              <TextInput
                key={item.name}
                label={item.label}
                type={item.type}
                name={item.name}
                change={(value) => {
                  setFormData({ ...formdata, [item.name]: value });
                }}
              />
            );
          })
        : "No controls found"}

      <Button label="login" type="submit"></Button>
    </form>
  );
};

export default LoginForm;
