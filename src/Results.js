import React from 'react'
import Result from './Result'

export default function Results (props) {
    let results;
    if (props.results.length>0 || props.searched===false){
        results= props.results.map((result, index) => <Result key={index} result={result}/>)
    } else {
        results= <li>No Results =(</li>
    }

    return (
        <div>
            <div hidden={!props.loading}>
                Searching...
            </div>
            <ul>
                {results}
            </ul>
        </div>
    )
}