"use client";

import { User } from "@/models/user";
import { AuthContext } from "./AuthContext";
import { signInWithRedirect, fetchUserAttributes, fetchAuthSession, signOut } from "aws-amplify/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const userAttributes = await fetchUserAttributes();
      if (userAttributes) {
        setUser({
          id: userAttributes.sub,
          name: userAttributes.name,
          email: userAttributes.email,
          image: userAttributes.picture || "",
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      setError(`Error fetching user attributes: ${error}`);
      setUser(null);
    }
  };

  const isAuthenticated = async () => {
    try {
      const session = await fetchAuthSession();
      return session.tokens && session.tokens.accessToken ? true : false;
    } catch (error) {
      setError(`Error checking authentication status: ${error}`);
      return false;
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const isUserAuthenticated = await isAuthenticated();
      if (isUserAuthenticated) {
        await fetchUser();
      } else {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  const signInGoogle = async () => {
    try {
      await signInWithRedirect({ provider: "Google" });
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError(`Error signing in with Google: ${error}`);
    }
  };

  const signOutGoogle = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
      setError(`Error signing out: ${error}`);
    }
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, signInGoogle, signOutGoogle, user, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
