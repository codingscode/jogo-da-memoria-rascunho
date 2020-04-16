import React from 'react'


import classes from './Outro.css'
import imagem1 from '../imagens/1.eletricista.jpg'
import imagem2 from '../imagens/2.medico.jpg'
import imagem3 from '../imagens/3.professor.jpg'
import imagem4 from '../imagens/4.programador.jpg'
import imagem5 from '../imagens/5.agricultor.jpg'
import imagem6 from '../imagens/6.pecuarista.jpg'
import imagem7 from '../imagens/7.advogado.png'
import imagem8 from '../imagens/8.cientista.jpg'
import imagem9 from '../imagens/mostrar.png'
import imagem10 from '../imagens/matched.png'


const entradas = (props) => {

      var eletricista = <button onClick={props.clicado} value={props.elemento}><img src={imagem1}/></button>
      var medico = <button onClick={props.clicado}  value={props.elemento}><img src={imagem2}/></button>
      var professor = <button onClick={props.clicado}  value={props.elemento}><img src={imagem3}/></button>
      var programador = <button onClick={props.clicado}  value={props.elemento}><img src={imagem4}/></button>
      var agricultor = <button onClick={props.clicado}  value={props.elemento}><img src={imagem5}/></button>
      var pecuarista = <button onClick={props.clicado}  value={props.elemento}><img src={imagem6}/></button>
      var advogado = <button onClick={props.clicado}  value={props.elemento}><img src={imagem7}/></button>
      var cientista = <button onClick={props.clicado}  value={props.elemento}><img src={imagem8}/></button>
      var mostrar = <button onClick={props.clicado}  value={props.elemento}><img src={imagem9}/></button>
      var ok = <button onClick={props.clicado}  value={props.elemento}><img src={imagem10}/></button>
          

      var p1 = [eletricista, medico, professor, programador, agricultor, pecuarista, advogado, cientista]          
      var p2 = [eletricista, medico, professor, programador, agricultor, pecuarista, advogado, cientista]
      

      var estado = [mostrar, ok]

      var desordenado = []
      var desordenado2 = []
     
      while (desordenado.length < p1.length) {
          var indicealeatorio = Math.floor(Math.random() * p1.length) 
          if (desordenado.includes(p1[indicealeatorio])) {
              
          }
          else {
              desordenado.push(p1[indicealeatorio])
          }
          
          console.log(indicealeatorio)
          console.log(`p1 ${p1.length}`)
          console.log(`p2 ${p2.length}`)
          console.log(`desordenado ${desordenado.length}`)
      }

      function mais(matriz) {
          var ctr = matriz.length, temp, indice
          while (ctr > 0) {
              indice = Math.floor(Math.random() * ctr)
              ctr--
              temp = matriz[ctr]
              matriz[ctr] = matriz[indice]
              matriz[indice] = temp
          } 
          return matriz

      }
      
      desordenado2 = mais(p2)
      var junto = desordenado.concat(desordenado2)

      return (
          <div className={classes.quadro}>
              
              {junto}
              
          </div>
      )
}

export default entradas

