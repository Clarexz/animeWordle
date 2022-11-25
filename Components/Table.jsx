import { useState, useEffect } from 'react';
import dataInfo from "../src/names.json";

//Styles
import '../src/App.css';

function Table() {
    
   const [ data, setData ] = useState(dataInfo);

    return (
        <>
            <h2 className='subT'>Elige un anime</h2>
            <div className='animeSelect'>
                {data.map((anime) => {
                    return (
                            <button
                                style={{"background-image": `url("${anime.imgUrl}")`}}
                            >
                                {anime.animeName}
                            </button>
                            )
                        })}
                </div>
            <h1>Tablero</h1>
        </>
    )
}

export default Table;