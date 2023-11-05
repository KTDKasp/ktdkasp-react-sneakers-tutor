import React from 'react';
import "./Card.css";

function Card({ title, price, imageUrl, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, price, imageUrl });
        setIsAdded(!isAdded);
    };

    return (
        <div className="card">
            <div className="card__favorite" onClick={onFavorite}>
                <img src="/img/heart-unlike.svg" alt="heart logo"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <p>{title}</p>
            <div className="card__bottom">
                <div className="card__left">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img 
                    className="plus"
                    onClick={onClickPlus}
                    src={isAdded ? "/img/Accepted.svg" : "/img/btn-plus.svg"} 
                    alt="Plus sign"
                /> 
            </div>
        </div>
    );
}

export default Card;