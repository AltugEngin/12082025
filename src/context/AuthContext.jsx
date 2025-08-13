import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const authContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState("");
  console.log(session);

  //SIGN IN
  const signInWithEmail = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase(),
      password: password,
    });
    if (error) throw new Error(error.message);
    return { success: true, data };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <authContext.Provider value={{ signInWithEmail, signOut, session }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
