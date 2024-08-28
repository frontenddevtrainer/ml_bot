import TextInput from "../text-input/text-input.component";

const LoginForm = () => {
  return (
    <form>
      <TextInput label="Email" name="email" />
      <TextInput label="Password" type="password" name="password" />
    </form>
  );
};

export default LoginForm;
