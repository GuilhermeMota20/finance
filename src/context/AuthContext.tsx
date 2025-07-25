import { auth } from "@service/firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<boolean | undefined>(undefined);

  const provider = new GoogleAuthProvider();

  // MODE: POPUP
  const SignInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      setUser(result?.user);
      setIsAuth(true);
    } catch (error) {
      setUser(null);
      setLoginError(true);
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

  const Logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAuth(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuth(!!currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        setIsAuth,
        Logout,
        SignInWithGoogle,
        loading,
        setLoading,
        loginError,
        setLoginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
