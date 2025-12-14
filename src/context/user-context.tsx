"use client";
import { postData, getData } from "@/lib/fetch-methods";
import { removeToken, getToken } from "@/services";
import { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "sonner";
import { User, ApiResponse } from "@/types";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
  loading: boolean;
  fetchUserProfile: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserContextProviderProps {
  children: ReactNode;
}

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  // Initialize state with null to avoid SSR issues
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile from API
  async function fetchUserProfile() {
    try {
      const token = await getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      const response: ApiResponse<{ data: User; status: boolean }> =
        await getData({
          url: "/profile",
        });

      // Handle 401 - token is invalid/expired
      if (response?.code === 401 || response?.unauthorized) {
        setUser(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
        setLoading(false);
        return;
      }

      if (response?.success && response?.data) {
        // The API returns { status: true, message: "...", data: User }
        // Our getData wrapper might unwrap some layers?
        // Let's inspect the types. getData returns ApiResponse<T>.
        // The T here is { data: User, status: boolean }.
        // So response.data is the wrapper, and response.data.data is the User.
        const apiUser = response.data.data as any;
        const mappedUser: User = {
          ...apiUser,
          phone: apiUser.mobile || apiUser.phone, // Map mobile to phone
          points: apiUser.pointsBalance,
        };
        setUser(mappedUser);
      } else {
        setUser(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("user");
        }
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  // Load user from localStorage on client-side mount and fetch fresh profile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing stored user:", error);
          localStorage.removeItem("user");
        }
      }

      // Fetch fresh profile data from API
      fetchUserProfile();
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }
  }, [user]);

  async function logout() {
    const response = await postData({
      url: "/logout",
    });
    if (response.code == 200) {
      setUser(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      removeToken();
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, logout, loading, fetchUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}
