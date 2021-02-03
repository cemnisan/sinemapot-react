import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import Search from '../Search';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import img from '../../headerPhoto.jpg';

function Articles(props) {
    const { results } = useContext(globalContext)
    let movies;
    if (results) {
        movies = results.map((item, index) => {
            return (
                <>
                    <div className="col-md-4 mb-3">
                        <img id="articlesImg" src={img} alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="body">
                            <h5 class="articlesTitle">{item.original_title}</h5>
                            <p class="text">{item.overview}</p>
                            <p class="text"><small class="text-muted">{item.release_date}</small></p>
                            <Link to={`/articles/${item.id}/${slugify(item.original_title, { lower: true })}`}>
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
    return (
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


export default Articles