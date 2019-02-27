import React, { Component } from 'react';
import Header from './Header';
import Noticias from './Noticias';
import Form from './Form';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNews();
  }

  consultarNews = (categoria='general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=cf9e80143b3f481fa46c7d0a7b290eec`;
    
    fetch(url)
      .then(res => res.json())
      .then(news => {
        this.setState({
          noticias: news.articles
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="contenedor-app">
        <Header />

        <div className='container white contenedor-noticias'>
          <Form consultarNews={this.consultarNews}/>
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
