import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import img from '../../headerPhoto.jpg';


function Home(props) {
    const { results } = useContext(globalContext)
    let latestMovie;
    if (results) {
        latestMovie = results.filter(item =>
            item.vote_average <= 9 && item.vote_average >= 8.8)
            .map((item, index) => {
                console.log(item)
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
        <>
            <div className="container">
                <div className="latestArticles text-center">
                    <h1>HIGH RATED ARTICLES</h1>
                    <hr />
                </div>
                <div className="row">
                    {latestMovie}
                </div>
            </div>
        </>

    )
}


export default Home