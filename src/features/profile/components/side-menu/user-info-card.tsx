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
      <CardContent className="p-8 flex flex-col items-center gap-2">
        {/* Stats - Points */}
        <div className="w-full mb-4">
          {/* Note: In the design the points card is separate above. 
                Wait, looking at the design "user_uploaded_image_0", 
                The points circle is INSIDE the sidebar ABOVE the avatar?
                Actually, the first image shows "Number of Points" card ABOVE the avatar card.
                But my sidebar has PointsCard separate.
                Let's stick to having them separate but styling this one cleanly.
             */}
        </div>

        {/* Avatar */}
        <div className="relative mb-2">
          <div className="size-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={user.avatar || "/images/avatar-placeholder.png"}
              alt={user.name}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-main-green transition-colors border border-gray-100">
            <FaCamera size={14} />
          </button>
        </div>

        {/* Info */}
        <div className="text-center space-y-1">
          <h3 className="font-bold text-main-navy text-xl">{user.name}</h3>
          <p className="text-sm text-gray-400">
            {user.role || t("featured_client")}
          </p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center gap-1 mt-1">
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            <span className="text-gray-400 text-xs me-1">
              ({user.reviews_count || 22})
            </span>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={
                  star <= (user.rating || 5)
                    ? "text-yellow-400"
                    : "text-gray-200"
                }
                size={14}
              />
            ))}
          </div>

          {joinedDate && (
            <div className="text-center mt-2">
              <p className="text-[10px] text-gray-400 mb-0.5">
                {t("join_date")}
              </p>
              <p className="text-xs font-medium text-gray-500">{joinedDate}</p>
              <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-main-green bg-green-50 px-2 py-0.5 rounded-full">
                <span className="size-1.5 rounded-full bg-main-green block"></span>
                {t("active_status")}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
