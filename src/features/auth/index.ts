// Auth feature exports
export { authService } from "./services/auth.service";
export {
  useLogin,
  useRegister,
  useForgotPassword,
  useVerifyOtp,
  useResetPassword,
  useLogout,
} from "./hooks/use-auth";
export {
  loginSchema,
  registerSchema,
  forgotPasswordSchema,
  verifyOtpSchema,
  resetPasswordSchema,
} from "./schemas/auth.schemas";
export type {
  User,
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  VerifyOtpRequest,
  ResetPasswordRequest,
  AuthResponse,
} from "./types/auth.types";
export type {
  LoginFormData,
  RegisterFormData,
  ForgotPasswordFormData,
  VerifyOtpFormData,
  ResetPasswordFormData,
} from "./schemas/auth.schemas";

// Note: Auth form components (login-form, sign-up-form, etc.) remain in src/components/auth/
// They can be moved here later if needed for better feature isolation
