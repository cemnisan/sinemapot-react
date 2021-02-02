import React from 'react';
import data from '../../data/router';
import { Link, } from 'react-router-dom';

function NavBar(props) {
    const linkItem = data.routerPath.map((item, index) => (
        <li className="nav-item" key={index}>
            <Link className="nav-link" id="nav-item" to={item.slug}>{item.title}</Link>
        </li>
    ))
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container px-1 my-3">
                    <Link className="navbar-brand" id="nav-item" to="/">SINEMAPOT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            {linkItem}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;