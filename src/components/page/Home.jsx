import React from 'react'


function Home(props){
    const latestMovie = props.movie;
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