import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {

  const {description, title, urlToImage, source, url} = props.noticia;

  const imagen = (urlToImage) ? 
    <div className='card-image'>
      <img src={urlToImage} alt={title} />
      <span className='card-title'>{source.name}</span>
    </div>
  : '';
  return (
    <div className='col s12 m6 l4'>
      <div className='card'>

          {imagen}        

        <div className='card-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className='card-action'>
          <a href={url} rel="noopener noreferrer" target='_blank' className='waves-effects waves-light btn'>Leer</a>
        </div>
      </div>      
    </div>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}

export default Noticia;