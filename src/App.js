
function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>

        <div className="sneakers">
          
          <div className="card">
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
