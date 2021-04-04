import "./productCard.css";

const ProductCard = ({ item }) => {
  return (
    <>
      <div className="productWrapper d-flex flex-column">
        <div className="imgWrapper d-flex align-items-center justify-content-center">
          <img src={item.imgUrl} alt={item.name} />
        </div>

        <div className="itemName">{item.name}</div>
        <div className="priceWrapper d-flex justify-content-around mt-auto p-2">
          {item.oldPrice && (
            <div className="oldPrice">
              {item.oldPrice} {item.currency}.
            </div>
          )}
          <div className="currentPrice">
            {item.price} {item.currency}.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
