# React.js 'FILM SEARCH' app

## [Check out the project on GitHub Pages](https://AnastasiiaUferova.github.io/film-search)

## Description

Frontend of a diploma project for Yandex Praktikum. This project is a multi-page website with a simple landing on the main page (with project description), login and registration, movies search, filter and save functionality availible for authorized users. This is a React.js-based project.

## Functionality

* Look through static landing main page;
* Search for films from the DB;
* Filter movies according to their length (filter short movies);

### API used

* external API provided by Yandex in collaboration with Beat Film Festival - database with documentaries (a user will search for movies from this DB)

### Layout features

* Layout is created according to individual Figma template
* Element positioning using grids and flexbox
* Adaptive design principles are used in the project: it's optimized for different screen resolutions (mobile, tablet, desktop)
* The number of displayed cards varies according to the screen size. If search result consists of multiple movies, initial amount of them will be displayed right away, more can be opened when clicking on "more" button.
* The page with movies is empty until a user carries out the first search. 

### Routes
* ```/ ```— main page
* ```/movies``` — movies library
* ```/*``` — 404 page

## Technologies used

* React.js Functional Components;
* React routing;
* Hooks (useState, useEffect, useCallBack, useDebouncedCallback);
* Adaptive layout using flexbox and grid positioning;
* Nested file structure according to BEM methodology;
* JavaScript (Asynchronous JS, Fetch API, OOP);
* Git;
* Webpack;
* Figma


## Installation instructions:

```
git clone https://github.com/AnastasiiaUferova/film-search.git

cd film-search

npm install 

npm run build

npm run start
```

## Link to the project
https://AnastasiiaUferova.github.io/film-search
