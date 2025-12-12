import { postData } from "@/shared/lib/fetch-methods";
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  VerifyOtpRequest,
  ResetPasswordRequest,
  AuthResponse,
} from "../types/auth.types";

class AuthService {
  private basePath = "/auth";

  /**
   * Login user
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await postData({
      url: `${this.basePath}/login`,
      data: credentials,
    });

    return {
      success: response.success,
      message: response.message,
      data: response.data,
    };
  }

  /**
   * Register new user
   */
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await postData({
      url: `${this.basePath}/register`,
      data: userData,
    });

    return {
      success: response.success,
      message: response.message,
      data: response.data,
    };
  }

  /**
   * Request password reset
   */
  async forgotPassword(data: ForgotPasswordRequest): Promise<AuthResponse> {
    const response = await postData({
      url: `${this.basePath}/forgot-password`,
      data,
    });

    return {
      success: response.success,
      message: response.message,
      data: response.data,
    };
  }

  /**
   * Verify OTP code
   */
  async verifyOtp(data: VerifyOtpRequest): Promise<AuthResponse> {
    const response = await postData({
      url: `${this.basePath}/verify-otp`,
      data,
    });

    return {
      success: response.success,
      message: response.message,
      data: response.data,
    };
  }

  /**
   * Reset password with code
   */
  async resetPassword(data: ResetPasswordRequest): Promise<AuthResponse> {
    const response = await postData({
      url: `${this.basePath}/reset-password`,
      data,
    });

    return {
      success: response.success,
      message: response.message,
      data: response.data,
    };
  }

  /**
   * Logout user
   */
  async logout(): Promise<AuthResponse> {
    const response = await postData({
      url: `${this.basePath}/logout`,
      data: {},
    });

    return {
      success: response.success,
      message: response.message,
    };
  }
}

export const authService = new AuthService();
