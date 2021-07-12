import React, { useState, useEffect } from 'react';

import axios from 'axios';

const ApiResult = (props) => {
    const [results, setResults] = useState('')
    const [error, setError] = useState(null)

    let resultKeys = {
        'people':[
            ['Height', 'height'],
            ['Mass','mass'],
            ['Hair Color','hair_color'],
            ['Skin Color','skin_color']
        ],
        'planets':[
            ['Rotation Period: ','rotation_period'],
            ['Orbital Period','orbital_period'],
            ['Diameter','diameter'],
            ['Climate','climate']
        ],
        'starships':[
            ['Model','model'],
            ['Manufacturer','manufacturer'],
            ['Cost In Credits','cost_in_credits'],
            ['Length','length']
        ]
    };

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.displayType}/${props.displayId}`)
            .then(response => {
                setResults(response.data)
                setError(null);
            })
            .catch(e => {
                setError('these are not the droids you are looking for');
                console.log(e);
            })
    }, [props.displayId, props.displayType]);

    return (
        <div>
        {
            error?
            <p>{error}</p>:
            <div>
                <h1>{results.name}</h1>
                <ul>
                {
                    resultKeys[props.displayType].map((key) => {
                        return (
                            <li>{key[0]}: {results[key[1]]}</li>
                            )
                        })
                }
                </ul>
            </div>
        }
        </div>
    )
}

export default ApiResult;