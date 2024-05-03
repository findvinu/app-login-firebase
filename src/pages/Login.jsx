import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../assets/images/vinuBytes.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(login({ uid: user.uid, email: user.email }));
      navigation("/");
      console.log(user);
    } catch (error) {
      console.error("Login failed:", error);
      if (error.code === "auth/invalid-credential") {
        console.log("credential not metch");
      } else {
        const errorCode = error.code;
        const errorMsg = error.message;
        setError(errorMsg);
        console.log("Login Failed!", errorCode, errorMsg);
      }
    }
  };

  return (
    <div className="py-8 login">
      <div className="flex items-center justify-center w-full">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <img src={Logo} alt="logo" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={loginHandler} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                hintText="Email: test@test.com"
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                hintText="Password: 123456"
              />
              <Button type="submit" className="w-full">
                Login in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
