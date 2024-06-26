import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)



  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Sign In
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // SignOut 
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  // Google Login 
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state changed', currentUser)
      setUser(currentUser);
      setLoading(false)
      if(!user) {
        setLoading(false)
      }
    })
    return () => {
      unSubscribe();
    }
  }, [])

  // Loading
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }


  const authInfo = {
    user,
    loading,
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