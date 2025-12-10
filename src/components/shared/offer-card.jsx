import Image from 'next/image';
import Link from 'next/link';

const OfferCard = ({ id, image, title, description, date }) => {
  return (
    <div className="bg-white border border-main-green rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-60 w-full">
        <Image
          src={image || '/images/placeholder-offer.jpg'}
          alt={title}
          fill
          className="object-cover "

        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-main-navy mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        {date && (
          <div className="text-sm bg-main-green text-white px-2 py-1 rounded mt-2 w-fit">
            {new Date(date).toLocaleDateString('ar-EG')}
          </div>
        )}

      </div>
    </div>
  );
};

export default OfferCard;
