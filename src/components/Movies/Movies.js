import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies ({isLoading, cards, showError, renderInitialCards, onCardToggle, renderSavedCards, savedMoviesIds, savedCards, isSaved}) {

    const [searchQuery, setSearchQuery] = useState('');
    const [optionCards, setOptionCards] =  useState([]);
    const [activeSearch, setActiveSearch] = useState(false);
    const [isChecked, setIsChecked] = useState(() => {
        return JSON.parse(sessionStorage.getItem('checked'))
    });


    useEffect(() => {
        sessionStorage.setItem('checked', JSON.stringify(isChecked));
        if (isChecked) {
            setOptionCards(cards.filter(card => card.duration <= 40))
        }
        else setOptionCards(cards)
        
    }, [isChecked, cards]); 


    function handleChangeQuery(item) {
        setActiveSearch(true);
        setSearchQuery(item);
        renderInitialCards()
    }


    function handleCheck(e) {
        setIsChecked((e.target.checked))
    }


    return (
        <div className="movies">
            <Header />
            <SearchForm onChageQuery={handleChangeQuery} />
            <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
            <MoviesCardList 
            query={searchQuery} 
            cards={optionCards} 
            isLoading={isLoading} 
            showError={showError} 
            activeSearch={activeSearch}
            renderInitialCards={renderInitialCards}
            onCardToggle={onCardToggle}
            />
            <Footer />
            
        </div>
        )
}


export default Movies;
