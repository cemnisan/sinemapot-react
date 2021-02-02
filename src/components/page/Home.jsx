import React, { useContext } from 'react';
import img from '../../headerPhoto.jpg';
import { globalContext } from '../../data/context';

function Home(props) {
    const { results } = useContext(globalContext)
    let latestMovie;
    if (results) {
        latestMovie = results.filter(item=> 
            item.vote_average<=9 && item.vote_average >=8.8)
            .map((item, index) => {
            console.log(item)
            return (
                <div className="col-md-4" key={index}>
                    <div className="title">
                        <h4>{item.original_title}</h4>
                    </div>
                    <div className="image d-flex">
                        <img id="latestImg" src={img} alt="..."></img>
                    </div>
                    <div className="paragph">
                        <p>{item.overview}</p>
                        <button className="btn btn-dark">devamını oku</button>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            <div className="container">
                <div className="latestArticles text-center">
                    <h1>SON YAZILAR</h1>
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