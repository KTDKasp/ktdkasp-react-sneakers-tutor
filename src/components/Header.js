function Header() {
    return (
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
    );
}

export default Header;