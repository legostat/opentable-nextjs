import { PRICE } from "@prisma/client";

export default function Price({ price }: { price: PRICE }) {
  const renderPrice = () => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <p>
            <span>$$</span>
            <span className="text-gray-400">$$</span>
          </p>
        );
      case PRICE.REGULAR:
        return (
          <p>
            <span>$$$</span>
            <span className="text-gray-400">$</span>
          </p>
        );
      case PRICE.EXPENSIVE:
        return <p>$$$$</p>;
    }
  };

  return renderPrice();
}
