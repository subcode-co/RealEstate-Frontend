import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import MyDataForm from "./my-data-form";
import { Card } from "@/components/ui/card";

const ProfileTabs = ({ isEditing }: { isEditing?: boolean }) => {
  const t = useTranslations("Profile");

  return (
    <div className="min-h-[500px]">
      <Tabs defaultValue="my-data" className="w-full">
        <div className="flex justify-end mb-6">
          <TabsList className="bg-transparent gap-4 p-0 h-auto w-auto flex-nowrap">
            <TabsTrigger
              value="my-properties"
              className="bg-white border border-gray-200 text-gray-600 rounded-lg px-8 py-3 h-12 min-w-[120px] data-[state=active]:bg-white data-[state=active]:text-main-navy data-[state=active]:shadow-sm data-[state=active]:border-gray-200"
            >
              {t("my_properties")}
            </TabsTrigger>
            <TabsTrigger
              value="my-data"
              className="bg-white border border-gray-200 text-gray-600 rounded-lg px-8 py-3 h-12 min-w-[120px] data-[state=active]:bg-main-green/10 data-[state=active]:text-main-green data-[state=active]:border-main-green data-[state=active]:shadow-sm data-[state=active]:font-bold"
            >
              {t("my_data")}
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="my-data" className="mt-0">
            <MyDataForm isEditing={isEditing} />
          </TabsContent>
          <TabsContent value="my-properties" className="mt-0">
            <div className="py-12 text-center text-gray-500">
              {t("no_properties")}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
