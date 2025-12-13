import { User } from "@/types";
import PointsCard from "./points-card";
import UserInfoCard from "./user-info-card";
import ContactCard from "./contact-card";

interface ProfileSidebarProps {
  user: User;
  isSubmitting?: boolean;
}

const ProfileSidebar = ({ user, isSubmitting }: ProfileSidebarProps) => {
  return (
    <aside className="space-y-6 sticky top-24">
      <PointsCard points={user.points || 1200} />
      <UserInfoCard user={user} />
      <ContactCard user={user} isSubmitting={isSubmitting} />
    </aside>
  );
};

export default ProfileSidebar;
