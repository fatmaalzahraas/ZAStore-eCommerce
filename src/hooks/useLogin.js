import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-hot-toast";
const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setLoading(false);
      toast.success(`Successfully logged in ${user.displayName}`);
      navigate("/", { replace: true });
    } catch (error) {
      setLoading(false);
      toast.error(`User Not Found! Please create an account first`);
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    loading,
    signIn,
    currentUser,
  };
};

export default useLogin;
