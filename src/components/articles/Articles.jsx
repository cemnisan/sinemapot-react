import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import img from '../../headerPhoto.jpg';

function Articles(props) {
    const { results } = useContext(globalContext)
    let movies;
    if (results) {
        movies = results.map(item => {
            return (
                <>
                    <div className="col-md-4 py-2 px-2">
                        <img id="articlesImg" src={img} alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{item.original_title}</h5>
                            <p class="card-text">{item.overview}</p>
                            <p class="card-text"><small class="text-muted">{item.release_date}</small></p>
                            <Link to={`/articles/${item.id}/${slugify(item.original_title,{lower:true})}`}>
                                <button className="btn btn-dark">
                                    Detail
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )
        })
    }
    console.log(movies)
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                {movies}
            </div>
        </div>
    )
}


export default Articles