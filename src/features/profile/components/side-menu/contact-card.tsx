import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSave } from "react-icons/fa";
import { User } from "@/types";
import { Loader2 } from "lucide-react";

interface ContactCardProps {
  user: User;
  isSubmitting?: boolean;
}

const ContactCard = ({ user, isSubmitting = false }: ContactCardProps) => {
  const t = useTranslations("Profile");

  // Helper to render contact row
  const ContactRow = ({ icon: Icon, value }: { icon: any; value?: string }) => {
    if (!value) return null;
    return (
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <div className="text-main-green">
          <Icon />
        </div>
        <span className="text-sm text-gray-600 truncate dir-ltr">{value}</span>
      </div>
    );
  };

  return (
    <Card className="shadow-sm border-gray-100">
      <CardContent className="p-6 space-y-6">
        <h3 className="font-bold text-main-navy text-lg">
          {t("personal_data")}
        </h3>

        <div className="space-y-3">
          <ContactRow icon={FaEnvelope} value={user.email} />
          <ContactRow icon={FaPhone} value={user.phone || user.mobile} />
          <ContactRow
            icon={FaMapMarkerAlt}
            value={user.address || "Saudi Arabia"}
          />
        </div>

        <Button
          type="submit"
          form="profile-form"
          className="w-full bg-main-green hover:bg-main-green/90 text-white font-bold h-12 gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <FaSave />}
          {t("save_data")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
