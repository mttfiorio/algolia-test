import { Hit } from "algoliasearch";
import { Highlight } from "react-instantsearch";

interface HitProps {
  objectID?: string;
  name?: string;
  brand?: string;
  category?: string;
  price?: string;
  description?: string;
}

interface HitComponentProps {
  hit: any; //needs Hit<BaseHit> but I can't find it in the lib?
}

const HitComponent = ({ hit }: HitComponentProps) => {
  const { price } = hit as HitProps;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">
          <Highlight attribute="name" hit={hit} />
        </h1>
        <p className="text-gray-700 text-base">
          <Highlight attribute="description" hit={hit} />
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #<Highlight attribute="brand" hit={hit} />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #<Highlight attribute="category" hit={hit} />
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
