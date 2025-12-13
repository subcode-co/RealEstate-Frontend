import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import MyDataForm from "./my-data-form";
import { Card } from "@/components/ui/card";

const ProfileTabs = () => {
  const t = useTranslations("Profile");

  return (
    <Card className="shadow-sm border-gray-100 min-h-[500px]">
      <Tabs defaultValue="my-data" className="w-full">
        <div className="p-6 pb-0 border-b border-gray-100">
          <TabsList className="bg-transparent gap-8 p-0 h-auto justify-start w-full">
            <TabsTrigger
              value="my-data"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-main-green data-[state=active]:text-main-green data-[state=active]:shadow-none pb-4 text-base px-0"
            >
              {t("my_data")}
            </TabsTrigger>
            <TabsTrigger
              value="my-properties"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-main-green data-[state=active]:text-main-green data-[state=active]:shadow-none pb-4 text-base px-0"
            >
              {t("my_properties")}
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="my-data" className="mt-0">
            <MyDataForm />
          </TabsContent>
          <TabsContent value="my-properties" className="mt-0">
            <div className="py-12 text-center text-gray-500">
              {t("no_properties")}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;
