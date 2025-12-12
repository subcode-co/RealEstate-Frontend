"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  VerifyOtpRequest,
  ResetPasswordRequest,
} from "../types/auth.types";
import { setToken } from "@/services";

/**
 * Hook for user login
 */
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const response = await authService.login(credentials);

      if (!response.success) {
        throw new Error(response.message || "Login failed");
      }

      return response.data;
    },
    onSuccess: async (data) => {
      // Store token if provided
      if (data?.token) {
        await setToken(data.token);
      }

      // Store user in localStorage
      if (data?.user && typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Invalidate any user-related queries
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

/**
 * Hook for user registration
 */
export function useRegister() {
  return useMutation({
    mutationFn: async (userData: RegisterRequest) => {
      const response = await authService.register(userData);

      if (!response.success) {
        throw new Error(response.message || "Registration failed");
      }

      return response.data;
    },
  });
}

/**
 * Hook for forgot password request
 */
export function useForgotPassword() {
  return useMutation({
    mutationFn: async (data: ForgotPasswordRequest) => {
      const response = await authService.forgotPassword(data);

      if (!response.success) {
        throw new Error(response.message || "Failed to send reset email");
      }

      return response.data;
    },
  });
}

/**
 * Hook for OTP verification
 */
export function useVerifyOtp() {
  return useMutation({
    mutationFn: async (data: VerifyOtpRequest) => {
      const response = await authService.verifyOtp(data);

      if (!response.success) {
        throw new Error(response.message || "OTP verification failed");
      }

      return response.data;
    },
  });
}

/**
 * Hook for password reset
 */
export function useResetPassword() {
  return useMutation({
    mutationFn: async (data: ResetPasswordRequest) => {
      const response = await authService.resetPassword(data);

      if (!response.success) {
        throw new Error(response.message || "Password reset failed");
      }

      return response.data;
    },
  });
}

/**
 * Hook for user logout
 */
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await authService.logout();

      if (!response.success) {
        throw new Error(response.message || "Logout failed");
      }

      return response.data;
    },
    onSuccess: () => {
      // Clear all cached data
      queryClient.clear();

      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
  });
}
