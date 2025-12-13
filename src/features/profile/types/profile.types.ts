export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role?: string;
  points?: number;
  rating?: number;
  joinDate?: string;
}

export interface UpdateProfileRequest {
  name: string;
  email: string;
  phone: string;
  password?: string;
  avatar?: File;
}
