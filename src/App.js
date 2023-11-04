
function App() {
  return (
    <div className="wrapper">

      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2>
            Корзина 
            <img src="/img/btn-remove.svg" alt="Remove"/>
          </h2>
          
          <div className="items">
            <div className="cart__item">
              <img className="cart__item-img" width={70} height={59} src="/img/sneakers/2.jpg" alt="Sneakers"/>
              <div className="cart__item-name">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <div className="cart__item-remove">
                <img src="/img/btn-remove.svg" alt="Remove"/>
              </div>
            </div>

            <div className="cart__item">
              <img className="cart__item-img" width={70} height={59} src="/img/sneakers/4.jpg" alt="Sneakers"/>
              <div className="cart__item-name">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <div className="cart__item-remove">
                <img src="/img/btn-remove.svg" alt="Remove"/>
              </div>
            </div>
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

      <header className="header">
        <div className="header__left">
          <img 
            width={40}
            height={40}
            src="/img/logo.png" 
            alt="logo"
          />
          <div className="header__info">
            <h3>REACT SNEAKERS</h3>
            <p className="header__description">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right">
          <li>
            <img 
              width={20}
              height={20}
              src="/img/cart.svg" 
              alt="cart logo"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img 
              width={18}
              height={18}
              src="/img/favorite.svg" 
              alt="favorites logo"
            />
            <span>Закладки</span>
          </li>
          <li>
            <img 
              width={18}
              height={18}
              src="/img/user.svg" 
              alt="user logo"
            />
            <span>Профиль</span>
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input className="search__input" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          
          <div className="card">
            <div className="card__favorite">
              <img src="/img/heart-unlike.svg" alt="heart logo"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom">
              <div className="card__left">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/Plus.svg" alt="Plus sign"/> 
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom">
              <div className="card__left">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/Plus.svg" alt="Plus sign"/> 
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom">
              <div className="card__left">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/Plus.svg" alt="Plus sign"/> 
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom">
              <div className="card__left">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/Plus.svg" alt="Plus sign"/> 
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
