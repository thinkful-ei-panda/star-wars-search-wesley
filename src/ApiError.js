import React from 'react'
import PropTypes from 'prop-types'

export default function ApiError (props){
    return (
        <div>
            {props.error}
        </div>
    )
}

ApiError.propTypes = {
    error: PropTypes.object
}