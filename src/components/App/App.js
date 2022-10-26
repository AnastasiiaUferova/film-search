import React from "react";
import "./App.css";
import "../../index.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import moviesApi from "../../utils/MoviesApi";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import cross from "../../images/Cross.svg";


function App() {

    const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
    const [imageTooltip, setImageTooltip] = useState('');
    const [textTooltip, setTextTooltip] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);


function renderInitialCards() {
    setIsLoading(true);
    return moviesApi.getMovies()
        .then((cards) => {
            setCards(cards);
            sessionStorage.setItem('movies', JSON.stringify(cards))
        })
        .catch((err) => {
            setImageTooltip(cross);
            setTextTooltip("An error occurred while downloading movies.");
            setIsTooltipPopupOpen(true);
            console.log(err)
        })
        .finally( () => {
            setIsLoading(false)
        }
        )
    }

    function handlePopupClose () {
        setIsTooltipPopupOpen(false)
    }

    return (
        <div className="root">
            <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<ErrorScreen />}></Route>
                <Route path="/movies"  element={
                    <Movies 
                    cards={cards}
                    renderInitialCards={renderInitialCards}
                    isLoading={isLoading}
                    />
                    }></Route>
            </Routes>
            <InfoTooltip text={textTooltip} image={imageTooltip} isOpen={isTooltipPopupOpen} onClose={handlePopupClose} />
        </div>
    );
}

export default App;
