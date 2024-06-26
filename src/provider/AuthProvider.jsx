import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);


  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Sign In
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // SignOut 
  const logOut = () => {
    return signOut(auth)
  }


  // Google Login 
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state changed', currentUser)
      setUser(currentUser);
    })
    return () => {
      unSubscribe();
    }
  }, [])


  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleLogin
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;