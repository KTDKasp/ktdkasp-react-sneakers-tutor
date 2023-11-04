function Card() {
    return (
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
                    <img 
                        width={11} 
                        height={11} 
                        src="/img/Plus.svg" 
                        alt="Plus sign"
                    /> 
                </button>
            </div>
        </div>
    );
}

export default Card;