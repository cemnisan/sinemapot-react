import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify'
import { globalContext } from '../../data/context';
import img from '../../headerPhoto.jpg';
import Home from './Home';

function HomeCard(props) {
    const { results } = useContext(globalContext)
    let latestMovie;
    if (results) {
        latestMovie = results.filter(item =>
                 item.vote_average <= 8.8 && item.vote_average >= 8.7)
            .map((item,index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="title">
                            <h5>{item.original_title}</h5>
                        </div>
                        <div className="image d-flex">
                            <img id="latestImg" src={img} alt="..."></img>
                        </div>
                        <div className="paragph">
                            <p>{item.overview}</p>
                        </div>
                        <Link to={`/articles/${item.id}/${slugify(item.original_title, { lower: true })}`}>
                            <button className="btn btn-dark mb-5">
                                Detail
                        </button>
                        </Link>
                    </div>
                )
            })
    }
    return (
        <Home movie = {latestMovie} />
    )
}

export default HomeCard;