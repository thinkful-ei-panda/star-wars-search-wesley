import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import ApiError from './ApiError';
import ErrorJS from './ErrorJS';

class App extends React.Component {
  state = {
    searchSelectValue:'people',
    results:[],
    loading:false,
    searched:false,
    error:null
  }

  //Handles select form selection that chooses what category is being searched
  handleSearchSelectChange = (e) =>{
    this.setState({
      searchSelectValue:e.target.value
    })
  }

  //Handles submit search to API
  handleSubmitFormToAPI = (e) => {
    e.preventDefault();
    const BASEURL='https://swapi-thinkful.herokuapp.com/api/';
    this.setState({loading:true})
    fetch(`${BASEURL}${this.state.searchSelectValue}/?search=${e.target.query.value}`)
    .then(response => {
      if(!response.ok){
        throw response.error
      }      
      return response.json()      
    })
    .then(data => {
      this.setState({results:data.results, loading:false, searched:true})
    })
    .catch(error => {
      this.setState({error:error})
    })
  }

  render(){
    return (
      <div className='App'>
        <ErrorJS>
          <Header />
          <main>
            <Search loading={this.state.loading} handleSubmitFormToAPI={this.handleSubmitFormToAPI} searchSelectValue={this.state.searchSelectValue} handleSearchSelectChange={this.handleSearchSelectChange}/>
            <Results searched={this.state.searched} loading={this.state.loading} results={this.state.results}/>
            <ApiError error={this.state.error}/>
          </main>
        </ErrorJS>
  
      </div>    
    )
  }
}

export default App;
