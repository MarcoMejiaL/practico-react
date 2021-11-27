import React, { Component } from 'react'

/**
 * @name StateFull
 * @description trabaja con un estado, creando una constante sobre el return 
 * se genera una constante para trabajar con los hoks se le asigna [name, setName]
 * se le da un = useState('esto es el estado') <= eso usa el estado y lo pasa Nota: se importa arriba
 * 
 * @returns nose
 */

const Button =()=>{
    const [name,SetNmae] =useState('hola Mundo ');//aqui va el estado
    return(
        <div>
            <h1>{name}</h1>
        </div>
    );

}

/**
 * @name stateless
 * 
 * @description Los componentes stateless servirán para pasar un estilo visual o props, pero no tendrá otra función más que esa.

Este sería un componente sin estado, stateless.
 * @returns 
 */

const button =()=> <Button/>



class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hola Mundo</h1>
            </div>
        )
    }
}

/**
 * @name Hook 
 * 
 * @description SE IMPORTA EN LA PARTE SUPERIOR {Component}
 */

function ComponentesWrapper(WrrapperComponente){

    class Wrapper extends Component{
        render(){
            return <WrrapperComponente {...this.props}/>
        }
    }
    return Wrapper
}