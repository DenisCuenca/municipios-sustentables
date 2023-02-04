import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import Toast, { Toaster } from "react-hot-toast";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redRoute, setRedRoute] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        () =>
          updateProfile(auth.currentUser, {
            displayName: name,
          })
        // .finally(user.sendEmailVerification())
      )
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  async function signInUser(email, password) {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setRedRoute("/panel");
      })
      .catch((err) => {
        Toast.error(err.code);
        setRedRoute("/signin");
      })
      .finally(() => setLoading(false));
  }

  const logoutUser = () => {
    
    setRedRoute("/signin");
    signOut(auth);
    
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  async function addDocUser(name, country, city, email, phone) {
    await setDoc(doc(db, "users", email), {
      id: email,
      displayname: name,
      email: email,
      country: country,
      city: city,
      phone: phone,
      CreatedAt: new Date(),
      isAdmin: false,
    });
  }

  const contextValue = {
    user,
    loading,
    redRoute,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    addDocUser,
  };
  return (
    <>
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    
    </>
  );
};
