import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaStar, FaCamera } from "react-icons/fa";
import { User } from "@/types";

interface UserInfoCardProps {
  user: User;
}

const UserInfoCard = ({ user }: UserInfoCardProps) => {
  const t = useTranslations("Profile");
  const joinedDate = user.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Card className="shadow-sm border-gray-100">
      <CardContent className="p-6 flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="size-24 rounded-full overflow-hidden border-4 border-green-50">
            <Image
              src={user.avatar || "/images/avatar-placeholder.png"}
              alt={user.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md text-main-navy hover:text-main-green transition-colors">
            <FaCamera size={14} />
          </button>
        </div>

        {/* Info */}
        <div className="text-center space-y-1">
          <h3 className="font-bold text-main-navy text-lg">{user.name}</h3>
          <p className="text-sm text-gray-500">
            {user.role || t("featured_client")}
          </p>
        </div>

        {/* Rating */}
        <div className="bg-gray-50 rounded-lg p-3 w-full flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={
                  star <= (user.rating || 5)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-400 text-xs ms-1">
              ({user.reviews_count || 22})
            </span>
          </div>
          {joinedDate && (
            <div className="text-center space-y-1">
              <p className="text-[10px] text-gray-400">{t("join_date")}</p>
              <p className="text-xs font-medium text-gray-600">{joinedDate}</p>
            </div>
          )}
          <div className="flex items-center gap-1 text-[10px] text-gray-400">
            <span className="size-2 rounded-full bg-main-green block"></span>
            {t("active_status")}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
