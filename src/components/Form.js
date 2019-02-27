import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  catRef = React.createRef();

  cambiarCategoria = e => {
    e.preventDefault();

    this.props.consultarNews(this.catRef.current.value);
  }

  render() {
    return (
      <div className='buscador row'>
        <div className='col s12 m8 offset-m2'>
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias por categoria</h2>
            <div className='input-field col s12 m8'>
              <select ref={this.catRef}>
                <option value='science'>Ciencia</option>
                <option value='entertainment'>Entretenimiento</option>
                <option value='general' defaultValue>General</option>
                <option value='business'>Negocios</option>
                <option value='technology'>Tecnologia</option>
              </select>
            </div>

            <div className='input-field col s12 m4 enviar'>
              <button type='submit' className='btn amber darken-2'>Consultar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  consultarNews: PropTypes.func.isRequired
};

export default Form;