"use client"
import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs"
import { Card, CardContent } from "@/components/ui/card";
import {
  FaMoneyBillWave,
  FaTag,
  FaRulerCombined,
  FaBuilding,
  FaChartLine,
  FaExchangeAlt,
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SingleDealPage = () => {
  const stats = [
    { icon: <FaExchangeAlt />, label: "عدد العمليات", value: "24" },
    { icon: <FaRulerCombined />, label: "المساحة المتداولة", value: "224 م²" },
    { icon: <FaBuilding />, label: "عدد العقارات المتداولة", value: "240" },
    { icon: <FaTag />, label: "أقل سعر", value: "720 ر.س" },
    { icon: <FaTag />, label: "أعلى سعر", value: "720,000 ر.س" },
    { icon: <FaChartLine />, label: "متوسط السعر", value: "720,000 ر.س" },
    { icon: <FaMoneyBillWave />, label: "إجمالي قيمة الصفقات", value: "720,000 ر.س" },
    { icon: <FaMoneyBillWave />, label: "إجمالي قيمة الأصول", value: "720,000 ر.س" },
  ];
  const data = [
    { name: "Jan", high: 10000, avg: 8000, low: 6000 },
    { name: "Feb", high: 12000, avg: 9000, low: 7000 },
    { name: "Mar", high: 20000, avg: 15000, low: 9000 },
    { name: "Apr", high: 25000, avg: 18000, low: 10000 },
    { name: "May", high: 30000, avg: 20000, low: 12000 },
  ];
  return (
    <main className='space-y-6'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'الصفقات', href: "/deals" }, { label: 'صفقة فيلا العاشر' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>الصفقات المباشرة</h1>
      </div>  
      <div className='container border border-gray-300 p-10 space-y-8'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((item, i) => (
            <Card key={i} className="shadow-sm border border-gray-100 rounded-none rounded-s-lg">
              <CardContent className="flex items-center p-2 gap-2 ">
                <div className="bg-main-green text-white p-2 text-lg rounded ">{item.icon}</div>
                <div>
                <div className="text-gray-500 text-sm">{item.label}</div>
                <div className="text-xs font-semibold ">{item.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-4 lg:w-1/2 mx-auto">
          <h3 className="text-center font-semibold mb-4">تغير الأسعار</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="high" stroke="#16a34a" strokeWidth={2} name="الأعلى" />
              <Line type="monotone" dataKey="avg" stroke="#86efac" strokeDasharray="5 5" name="المتوسط" />
              <Line type="monotone" dataKey="low" stroke="#a3a3a3" name="الأقل" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </main>
  )
}

export default SingleDealPage
