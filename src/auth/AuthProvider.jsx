import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // user
  const [user, setUser] = useState(null);
  const [userLoader, setUserLoader] = useState(true);

  // create new user
  const signUp = (email, password) => {
    setUserLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const signIn = (email, password) => {
    setUserLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const signInWithGoogle = () => {
    setUserLoader(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // update user profile
  const updateUserProfile = (fullName) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
    });
  };

  //   logout user
  const userSignOut = () => {
    setUserLoader(true);
    return auth.signOut();
  };

  //   user on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setUserLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // auth all info
  const authInfo = {
    user,
    userLoader,
    signInWithGoogle,
    updateUserProfile,
    signUp,
    signIn,
    userSignOut,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
