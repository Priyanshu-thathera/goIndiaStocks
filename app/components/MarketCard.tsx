import Image from "next/image";
import img from "../image/sunset.jpg";

interface MarketCardProps {
  title: string;
  desc: string;
}

const MarketCard: React.FC<MarketCardProps> = ({ title, desc }) => {
  return (
    <>
      <div className="sm:max-w-[300px] bg-white border border-gray-200 mb-2 shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="" src={img} alt="" />
        </a>
        <div className="p-2">
          <h6 className="tour_title">{title}</h6>
          <p className="text-xs mb-3 text-gray-700 dark:text-gray-400">
          {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default MarketCard;
