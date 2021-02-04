import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import { globalContext } from '../data/context';

function Search(props) {
    const { results } = useContext(globalContext)
    const location = useLocation()
    const history = useHistory()
    const params = new URLSearchParams(location.search)
    const q = params.get('q')
    const inputValue = useRef()
    const [state, setState] = useState([])
    const [isTrue, setFalse] = useState(false)
    useEffect(() => {
        if (q && results) {
            inputValue.current.value = q;
            const movieSearch = results.filter
                (item =>
                    item.title.toLowerCase()
                        .includes(q.toLowerCase())
                ).map((item, index) => (
                    <div key={index}>
                        <div className="col-md-3">
                            <div className="searchTitle">
                                <h6>{item.title}</h6>
                            </div>
                            <div className="searchImg">
                                <img src="https://picsum.photos/200/100" alt="..."></img>
                            </div>
                            <div className="paragph">
                                <p>{item.overview}</p>
                            </div>
                            <Link to={`/articles/${item.id}/${slugify(item.title, { lower: true })}`}>
                                <button className="btn btn-dark mb-4">
                                    Detail
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
                setFalse(i => !i)
            setState(movieSearch)
        }
    }, [q, results])

    function handleForm(e) {
        e.preventDefault();
        history.push(`/search?q=${inputValue.current.value.toLowerCase()}`)
    }

    return (
        <div className="container">
            <form className="form-inline d-flex justify-content-end mb-2" onSubmit={handleForm}>
                <div className="form-group mx-sm-3 mb-2">
                    <label
                        htmlFor="search"
                        className="sr-only ">Arama</label>

                    <input
                        ref={inputValue}
                        type="search"
                        className="form-control"
                        id="search"
                        placeholder="Search" />

                </div>
                <button onClick={handleForm} type="submit" className="btn btn-primary mb-2">Ara</button>
            </form>
            {isTrue ? 
            <div className="articleLength text-center">
                <p> {`${state.length} tane makale bulundu.`} </p>
            </div> : ""
            }

            <div className="articleSearch">
                <div className="container">
                    <div className="row">
                        {state}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search