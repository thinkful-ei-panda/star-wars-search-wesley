import React from 'react'
import Result from './Result'
import PropTypes from 'prop-types'

export default function Results (props) {
    let results;
    if (props.results.length>0 || props.searched===false){
        results= props.results.map((result, index) => <Result key={index} result={result}/>)
    } else {
        results= <li>No Results =(</li>
    }

    return (
        <div className='results-container'>
            <div hidden={!props.loading}>
                Searching...
            </div>
            <ul hidden={props.loading} className='search-results'>
                {results}
            </ul>
        </div>
    )
}

Results.propTypes ={
    results: PropTypes.array.isRequired,
    searched: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
}