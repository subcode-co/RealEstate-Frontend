"use client";

import { useTranslations } from "next-intl";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user-context";
import ProfileSidebar from "./side-menu/profile-sidebar";
import ProfileTabs from "./tabs/profile-tabs";
import { profileService } from "../services/profile.service";
import { toast } from "sonner";
import { UpdateProfileRequest } from "../types/profile.types";
import SectionHeader from "@/components/shared/section-header";
import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import { useRouter } from "next/navigation";

const ProfileLayout = () => {
  const t = useTranslations("Profile");
  const { user, setUser, fetchUserProfile } = useContext(UserContext);
  const router = useRouter();

  const formSchema = z.object({
    name: z.string().min(2, t("validation_name")),
    email: z.string().email(t("validation_email")),
    phone: z.string().min(8, t("validation_phone")),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || user?.mobile || "",
    },
    values: {
      // Update form when user data loads
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || user?.mobile || "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = async (values: UpdateProfileRequest) => {
    // Optimistic UI or wait for response? Wait is safer.
    try {
      const success = await profileService.updateProfile(values);
      if (success) {
        toast.success(t("save_success"));
        await fetchUserProfile(); // Refresh data
        setIsEditing(false); // Exit edit mode on success
      } else {
        toast.error(t("save_error"));
      }
    } catch (error) {
      console.error(error);
      toast.error(t("save_error"));
    }
  };

  if (!user) {
    return <div className="p-12 text-center">Loading...</div>; // Or handled by page loader
  }

  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      {/* Header Container */}
      <div className="bg-gray-50 rounded-xl p-6 md:p-8 flex justify-between items-start md:items-center">
        <div className="space-y-2">
          {/* Breadcrumb - Align Start */}
          <div className="flex justify-start">
            <CustomBreadcrumbs
              items={[{ label: t("my_account") }]}
              className="!p-0 !bg-transparent shadow-none"
            />
          </div>
          <h1 className="text-3xl font-bold text-main-navy">
            {t("my_account")}
          </h1>
        </div>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-main-green font-medium hover:underline transition-all mt-2 md:mt-0"
        >
          <span className="text-sm">{t("back")}</span>
          <span className="text-lg">‹</span>
        </button>
      </div>

      <FormProvider {...methods}>
        <form
          id="profile-form"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Sidebar - spans 4 columns (1/3 width) */}
          <div className="lg:col-span-4 order-1">
            <ProfileSidebar
              user={user}
              isSubmitting={methods.formState.isSubmitting}
              isEditing={isEditing}
              onEditToggle={() => setIsEditing(!isEditing)}
            />
          </div>

          {/* Main Content - spans 8 columns (2/3 width) */}
          <div className="lg:col-span-8 order-2">
            <ProfileTabs isEditing={isEditing} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileLayout;
