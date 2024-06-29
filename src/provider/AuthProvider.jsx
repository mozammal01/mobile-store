import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
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

  // Reset Password

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state changed', currentUser)
      setUser(currentUser);
      setLoading(false)
      
    })
    return () => {
      unSubscribe();
    }
  }, [user])


  // Loading
  if (loading) {
    return <div className='h-screen flex items-center justify-center'><span className="loading loading-spinner loading-lg"></span></div>
  }


  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    resetPassword
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