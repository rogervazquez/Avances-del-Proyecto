import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {

    const termino = this.state.termino;

    const url = `https://pixabay.com/api/?key=22472382-e0a4ad91a2567afea28af95c8&q=${termino}&per_page=30`;

    // console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({ imagenes : resultado.hits }) )

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <Resultado 
          imagenes={this.state.imagenes}
        />
      </div>
    );
  }
}

export default App;