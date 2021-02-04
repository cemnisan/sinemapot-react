import React from 'react';
import Search from '../Search';

function Article(props) {
    const movies = props.movie
    return(
        <header id="articlesHeader">
            <div className="container">
                <Search />
                <div className="row no-gutters">
                    {movies}
                </div>
            </div>
        </header>
    )
}

export default Article