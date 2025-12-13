import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface PointsCardProps {
  points?: number;
}

const PointsCard = ({ points = 0 }: PointsCardProps) => {
  const t = useTranslations("Profile");

  return (
    <Card className="shadow-lg border-none rounded-xl bg-white overflow-hidden">
      <CardContent className="p-6 flex items-center justify-between">
        <div className="space-y-1 text-right">
          <h3 className="font-bold text-lg text-main-navy">
            {t("points_count")}
          </h3>
          <p className="text-sm text-gray-500">{t("total_points")}</p>
        </div>

        <div className="relative size-16 flex items-center justify-center">
          {/* Simple SVG Circle */}
          <svg className="size-full -rotate-90" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-gray-100"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            {/* Progress Circle (e.g. 75%) */}
            <path
              className="text-main-green"
              strokeDasharray="75, 100"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-sm font-bold text-main-green">
            {points}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsCard;
