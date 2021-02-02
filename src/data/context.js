import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';


const globalContext = createContext()

function GlobalProvider (props){
    const [state,setState] = useState([])
    useEffect(()=>{
        (async () =>{
            const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8b658eaa6b7ec25d913423d4afefe317&language=en-US&page=1')
            const data = await response.data
            
            setState(data)
        })()
    },[])
    return(
        <globalContext.Provider value={state}>
            {props.children}
        </globalContext.Provider>
    )
}

export {GlobalProvider,globalContext}