import React, {Component} from 'react'

import classes from './App.css'
import Outro from './componentes/Outro'


class App extends Component {
    
    state = {
        profissoes: [
            {id: '1', nome: 'xxx'}
        ]
    }
    
    alterar() {
      var selecao = []
      selecao.push()
    }
       
    render() {

          
          return (
            <div >
                <h1>Jogo da Memória</h1>
                <Outro  clicado={this.alterar}/>
            </div>
          );
    }
}

export default App;
