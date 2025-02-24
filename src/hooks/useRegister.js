import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, db, storage } from "../firebase.config";
import { toast } from "react-hot-toast";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const useRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [showPassword, setShowPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              isAdmin: false,
              photoURL: downloadURL,
              timeStamp: serverTimestamp(),
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
    setEmail("");
    setPassword("");
    setUsername("");
    setFile("");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    showPassword,
    setShowPassword,
    setFile,
    loading,
    signUp,
    currentUser,
  };
};

export default useRegister;
