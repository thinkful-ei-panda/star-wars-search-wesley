import React from 'react'
import PropTypes from 'prop-types'

export default function Result(props){
    const name= props.result.name
    return (
        <li className='result-listing'>
            {name}
        </li>
    )

}

Result.propTypes = {
    result: PropTypes.object.isRequired
}