import React from 'react'
import PropTypes from 'prop-types'

export default function Search (props) {   
    let searchPrompt;
    switch (props.searchSelectValue){
        case 'people' :
            searchPrompt='Person\'s name?  '
            break;
        case 'films' :
            searchPrompt='Title of film?  '
        break;
        case 'starships' :
            searchPrompt='Starship name or model?  '

        break;
        case 'vehicles' :
            searchPrompt='Vehicle name or model?  '

        break;
        case 'species' :
            searchPrompt='Species name?  '

        break;
        case 'planets' :
            searchPrompt='Planet name?  '

        break;
        default:
    }
    
    return (
        <div className='search-container'>

            {/* Select Search Type */}

            <div className='search-select-container'>
                <label htmlFor='searchingFor'>What are you searching for?</label>
                <select onChange={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>
                    <option value='people'>Person</option>
                    <option value='films'>Film</option>
                    <option value='starships'>Starship</option>
                    <option value='vehicles'>Vehicle</option>
                    <option value='species'>Species</option>
                    <option value='planets'>Planet</option>
                </select>
            </div>

            {/* Searching People */}

            <form className='submit-form' onSubmit={e=>props.handleSubmitFormToAPI(e)}>
                <legend hidden>Star Wars Search Form</legend>
                <fieldset>
                    <div className='search-input'>
                        <label htmlFor='query'>{searchPrompt} </label>
                        <input name='query' id='query'></input>
                    </div>
                    <div className='button-container'>
                        <button disabled={props.loading} type='submit'>Search</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

Search.propTypes = {
    handleSearchSelectChange: PropTypes.func.isRequired,
    handleSubmitFormToAPI: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}