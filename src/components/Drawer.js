function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
              <h2>
                Корзина 
                <img onClick={onClose} src="/img/btn-remove.svg" alt="Close"/>
              </h2>
              
              <div className="items">
                {items.map((obj) => (
                  <div className="cart__item">
                    <img className="cart__item-img" width={70} height={59} src={obj.imageUrl} alt="Sneakers"/>
                    <div className="cart__item-name">
                      <p>{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <div className="cart__item-remove">
                      <img src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                  </div>
                ))}
              </div>
        
              <div className="cart__total-block">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
        
                <button className="green_button">
                  Оформить заказ 
                  <img src="/img/arrow.svg" alt="arrow"/>
                </button>
              </div>
            </div>
        </div>
    );
}

export default Drawer;