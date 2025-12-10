"use client"
import { postData } from "@/lib/fetch-methods";
import { removeToken } from "@/services";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";


export const UserContext = createContext();


export default function UserContextProvider({ children }) {
  // Initialize state with null to avoid SSR issues
  const [user, setUser] = useState(null);

  // Load user from localStorage on client-side mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing stored user:", error);
          localStorage.removeItem("user");
        }
      }
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }
  }, [user]);



  async function logout() {
    const response = await postData({
      url: "/logout"
    })
    if (response.code == 200) {
      setUser(null);
      if (typeof window !== 'undefined') {
        localStorage.removeItem("user");
      }
      removeToken();
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

