import "./orderButtons.css";

const OrderButtons = ({ id }) => {
  return (
    <>
      <div className="btnWrapper">
        <button data-item={id} className="toBasketBtn">
          В корзину
        </button>
        <button data-item={id} className="fastBuyBtn">
          Купить в один клик
        </button>
      </div>
    </>
  );
};

export default OrderButtons;
