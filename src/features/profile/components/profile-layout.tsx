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

const ProfileLayout = () => {
  const t = useTranslations("Profile");
  const { user, setUser, fetchUserProfile } = useContext(UserContext);

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
      <div className="flex flex-col gap-4">
        <CustomBreadcrumbs items={[{ label: t("my_account") }]} />
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-main-navy">
            {t("my_account")}
          </h1>
          <button className="flex items-center gap-2 text-main-green text-sm hover:underline">
            <span>← {t("back")}</span>
          </button>
        </div>
      </div>

      <FormProvider {...methods}>
        <form
          id="profile-form"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Main Content (Tabs) - Left Side in LTR (Col Span 3) */}
          {/* But design has sidebar on Right in RTL.
                    So: 
                    RTL: Sidebar (Right) | Content (Left)
                    LTR: Content (Left) | Sidebar (Right) ?? 
                    Usually "start" is sidebar.
                    Let's check the design again. The design is RTL. Sidebar is Right. Content is Left.
                    In CSS Grid (RTL): 
                    Col 1 (Right): Sidebar
                    Col 2-4 (Left): Content
                */}

          {/* Since we use direction-aware classes or just logical flow:
                    If we put Sidebar first in DOM:
                    RTL: It appears on Right.
                    LTR: It appears on Left.
                    
                    If design shows Sidebar on Right in RTL...
                    That is standard flow.
                */}

          <div className="lg:col-span-4 order-1">
            <ProfileSidebar
              user={user}
              isSubmitting={methods.formState.isSubmitting}
              isEditing={isEditing}
              onEditToggle={() => setIsEditing(!isEditing)}
            />
          </div>

          <div className="lg:col-span-8 order-2">
            <ProfileTabs isEditing={isEditing} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileLayout;
