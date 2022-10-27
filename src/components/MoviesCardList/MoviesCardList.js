import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import { useDebouncedCallback, } from 'use-debounce';
import { useState, useEffect, useCallback} from "react";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";


function MoviesCardList ({cards, query, isLoading, showError, activeSearch, renderInitialCards}) {


    let location = useLocation();
    const [moviesCount, setMoviesCount] = useState(0);
    const sessionStorageQuery = JSON.parse(sessionStorage.getItem('query'));

    const initialMoviesQuery = (query !=='') ? query : sessionStorageQuery;

    const filterInitialRegex = new RegExp(initialMoviesQuery, 'gi');



    useEffect(() => {
        if (sessionStorageQuery) {
            renderInitialCards();
        }
    }, []);


    const totalFilteredInitial = () => {
        let initialList = []
        if (cards){
            return cards.filter(card => filterInitialRegex.test(card.nameEN)).slice(0, moviesCount);
        }
        return initialList
    }


    const Resize = useCallback(
        (width) => {
            if (width > 768) {
                setMoviesCount(12)
            }
            if (768 >= width) {
                setMoviesCount(8)
            }
            if ( 480 >= width) {
                setMoviesCount(5)
            }
        }, []
    )  //general function

useEffect(() => {
        Resize(window.innerWidth)
    }, [Resize]) // initial rendering

    const dynamicResize = useDebouncedCallback(
        () => {
            Resize(window.innerWidth)
        }, 200
    ) 

    
useEffect(() => {
    window.addEventListener('resize', dynamicResize)
    return () => {
            window.removeEventListener('resize', dynamicResize);
    } 
}, [dynamicResize]) // when changing window width



useEffect(() => {
    window.addEventListener('resize', dynamicResize)
    return () => {
            window.removeEventListener('resize', dynamicResize);
    } 
}, [dynamicResize]) 


function handleRender () {
    setMoviesCount(window.innerWidth > 768 ? moviesCount+3 : moviesCount+2)
}

const additionalInitialComponent = () => {
    if (isLoading) {
        return <Preloader />
    }
    if (totalFilteredInitial().length === 0 && activeSearch) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Nothing found</p>
            </div>
        )
    }
    if (totalFilteredInitial().length === 0 && showError) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">An error occurred during the request. Perhaps, there is a problem
                with connection, or the server is unavailable. Wait a bit and try again.</p>
            </div>
        )
    }
}
const queryCondition = query !== null && query.trim().length > 0
const render = queryCondition ? totalFilteredInitial() : []

    return (
        <div>
        <div className="card-list"> 
            {additionalInitialComponent()}
        <div className="card-list__container">
        {render.map((card) => {
    return <MoviesCard key={card.id} card={card}/>
        })}
        </div>
        </div>
        { (location.pathname === "/movies" && (query !== "" || sessionStorageQuery!== "") 
        && totalFilteredInitial().length === moviesCount && totalFilteredInitial().length > 3) &&
        <MoreButton handleRender={handleRender} />}
        </div>
        )
}


export default MoviesCardList;