import "./orderButtons.css";

const OrderButtons = ({ id, orderFn }) => {
  return (
    <>
      <div className="btnWrapper">
        <button
          data-item={id}
          className="toBasketBtn"
          onClick={(e) => {
            orderFn(id);
          }}
        >
          В корзину
        </button>
        <button
          data-item={id}
          className="fastBuyBtn"
          onClick={(e) => {
            orderFn(id);
          }}
        >
          Купить в один клик
        </button>
      </div>
    </>
  );
};

export default OrderButtons;
