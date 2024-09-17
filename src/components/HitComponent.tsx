import { Hit } from "algoliasearch";

interface HitProps {
  objectID?: string;
  name?: string;
  brand?: string;
  category?: string;
  price?: string;
  description?: string;
}

interface HitComponentProps {
  hit: Hit;
}

const HitComponent = ({ hit }: HitComponentProps) => {
  const { brand, name, category, price, description } = hit as HitProps;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{brand}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{category}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default HitComponent;
