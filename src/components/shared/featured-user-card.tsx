import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { MapPin } from "lucide-react";

interface FeaturedUserCardProps {
  item: {
    id: number | string;
    name: string;
    type: string;
    address: string;
    description: string;
    logoUrl: string;
  };
}

const FeaturedUserCard = ({ item }: FeaturedUserCardProps) => {
  return (
    <Link
      href={`/featuredusers/${item?.id}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-main-green/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-5 space-y-4">
        {/* Header with logo and info */}
        <div className="flex items-start gap-3">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <div className="bg-gray-100 p-2 rounded-lg border border-gray-200">
              <Image
                src={item?.logoUrl || "/placeholder-logo.png"}
                alt={item?.name || "company"}
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>

          {/* Company info */}
          <div className="flex-1 min-w-0 space-y-2">
            <h3 className="font-bold text-sm text-gray-900 group-hover:text-main-green transition-colors duration-300 line-clamp-1">
              {item?.name}
            </h3>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-main-green/10 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-main-green" />
              <p className="text-main-green text-xs font-medium">
                {item?.type}
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4 text-main-green flex-shrink-0" />
          <p className="text-sm line-clamp-1">{item?.address}</p>
        </div>

        {/* Description */}
        <div className="text-sm text-gray-500 leading-relaxed line-clamp-2 prose prose-sm max-w-none">
          <Markdown rehypePlugins={[rehypeRaw]}>{item?.description}</Markdown>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedUserCard;
