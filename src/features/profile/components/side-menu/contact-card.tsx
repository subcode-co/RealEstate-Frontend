import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSave } from "react-icons/fa";
import { User } from "@/types";
import { Loader2 } from "lucide-react";

interface ContactCardProps {
  user: User;
  isSubmitting?: boolean;
  isEditing?: boolean;
  onEditToggle?: () => void;
}

const ContactCard = ({
  user,
  isSubmitting = false,
  isEditing = false,
  onEditToggle,
}: ContactCardProps) => {
  const t = useTranslations("Profile");

  // Helper to render contact row
  const ContactRow = ({ icon: Icon, value }: { icon: any; value?: string }) => {
    // Show placeholders if empty to match design "boxes"
    const displayValue = value || "---";

    return (
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:border-main-green transition-all group shadow-sm">
        <span className="text-sm font-medium text-main-navy truncate dir-ltr">
          {displayValue}
        </span>
        <div className="text-gray-400 group-hover:text-main-green transition-colors">
          <Icon size={18} />
        </div>
      </div>
    );
  };

  return (
    <Card className="shadow-lg border-none rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-6 bg-white">
        <h3 className="font-bold text-xl text-main-navy text-right">
          {t("personal_data")}
        </h3>

        <div className="space-y-4">
          <ContactRow icon={FaEnvelope} value={user.email} />
          <ContactRow icon={FaPhone} value={user.phone || user.mobile} />
          <ContactRow
            icon={FaMapMarkerAlt}
            value={user.address || "Saudi Arabia"}
          />
        </div>

        <div className="pt-4">
          {isEditing ? (
            <div className="flex gap-3">
              <Button
                type="submit"
                form="profile-form"
                className="flex-1 bg-main-green hover:bg-main-green/90 text-white font-bold h-12 gap-2 shadow-md hover:shadow-lg transition-all rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <FaSave />
                )}
                {t("save_data")}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="px-6 h-12 border-red-200 text-red-500 hover:text-red-700 hover:bg-red-50 font-bold rounded-lg"
                onClick={onEditToggle}
                disabled={isSubmitting}
              >
                {t("cancel")}
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              className="w-full bg-main-green hover:bg-main-green/90 text-white font-bold h-12 gap-2 shadow-md hover:shadow-lg transition-all rounded-lg text-lg"
              onClick={onEditToggle}
            >
              <FaSave className="w-5 h-5" />
              {t("edit_data") === "تعديل البيانات"
                ? "حفظ البيانات"
                : t("save_data")}
              {/* Wait, design has 'Save Data' text on the view mode button? That implies it might be a direct save or just labeled 'Save Data' even if it toggles edit. 
                  The user says "add a button on clicking on it all the data be inputs and editable".
                  If I name it "Edit Data", it makes sense. If I name it "Save Data" before editing, it's confusing. 
                  However, "What I Want" image shows "حفظ البيانات" (Save Data).
                  Maybe the image screenshot was taken IN edit mode?
                  Or maybe the button is always "Save Data" and it just submits?
                  But the user wants to Toggle edit.
                  I will stick to "Edit Data" (or a suitable label) for View Mode, but style it GREEN as per design. 
                  Actually, let's use the translation key but style it green. 
              */}{" "}
              {t("edit_data")}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
