import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface PointsCardProps {
  points?: number;
}

const PointsCard = ({ points = 0 }: PointsCardProps) => {
  const t = useTranslations("Profile");

  return (
    <Card className="shadow-sm border-gray-100">
      <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
        <div className="text-center space-y-1">
          <h3 className="font-bold text-main-navy">{t("points_count")}</h3>
          <p className="text-xs text-gray-500">{t("total_points")}</p>
        </div>

        <div className="relative size-20 flex items-center justify-center rounded-full border-4 border-main-green/30 text-main-green font-bold text-xl">
          <span className="absolute inset-0 rounded-full border-4 border-main-green border-t-transparent -rotate-45"></span>
          {points}
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsCard;
