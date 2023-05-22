import { Input } from "../../ui/Input";

const Login = () => {
  return (
    <form className="flex flex-col gap-7 mt-7 ">
      <Input
        id="login-email"
        placeholder="Email Address"
        type="email"
        required
      />
      <Input
        id="login-password"
        placeholder="Email Address"
        type="password"
        required
      />
      <button className="buttonForm">Login</button>
    </form>
  );
};

export default Login;
