import React from 'react'

export default function Result(props){
    const name= props.result.name
    return (
        <li className='result-listing'>
            {name}
        </li>
    )

}