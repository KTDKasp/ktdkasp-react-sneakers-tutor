import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://654696fbfe036a2fa955df69.mockapi.io/items")
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper">     

      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input className="search__input" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          { items.map((item) => (
            <Card 
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log(item)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          )) }
        </div>

      </div>
    </div>
  );
}

export default App;
