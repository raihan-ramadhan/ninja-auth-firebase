import { Input } from "../../ui/Input";

const Signup = () => {
  return (
    <form className="flex flex-col gap-7 mt-7">
      <Input
        id="signup-email"
        placeholder="Email Address"
        type="email"
        required
      />
      <Input
        id="signup-password"
        placeholder="Your Password"
        type="password"
        required
      />
      <button className="buttonForm">SIGN UP</button>
    </form>
  );
};

export default Signup;
