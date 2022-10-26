import React from "react";
import './MoviesCard.css'

function MoviesCard ({card}) {


    function convertMinutes(time){
        const hours = Math.trunc(time/60);
        const minutes = time % 60;
        return { hours, minutes}
    }


    const durationData = convertMinutes(card.duration)

    return (
        <div className="card">
            <a  className="card__pic-link" href={card.trailerLink} target="_blank" rel="noreferrer">
            <img className="card__pic" src={`https://api.nomoreparties.co${card.image.url}`} alt={`Film poster for "${card.nameEN}"`}></img>
            </a>
            <div className="card__text-container">
                <p className="card__text">{card.nameEN}</p>
            </div>
            <p className="card__time">{`${durationData.hours}h${durationData.minutes}m`} </p>
        </div>
        )
}

export default MoviesCard;