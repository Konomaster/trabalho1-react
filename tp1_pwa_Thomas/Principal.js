import React from 'react'
import { Frutas } from './Frutas'
import { Automoveis } from './Automoveis'
import { Galeria } from './Galeria'
import { Filmes } from './Filmes'

export class Principal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            pagina:"Principal"
        }

        this.clickPag1=this.clickPag1.bind(this)
        this.clickPag2=this.clickPag2.bind(this)
        this.clickPag3=this.clickPag3.bind(this)
        this.clickPag4=this.clickPag4.bind(this)
        this.clickPag5=this.clickPag5.bind(this)

    }

    clickPag1(){
        this.setState({pagina:"Principal"})
    }
    

    clickPag2(){
        this.setState({pagina:"Galeria"})
    }

    clickPag3(){
        this.setState({pagina:"Frutas"})
    }

    clickPag4(){
        this.setState({pagina:"Automoveis"})
    }

    clickPag5(){
        this.setState({pagina:"API"})
    }

    render(){
        let pagina=<div></div>;

        let botao1=<button key={"bUm"} onClick={this.clickPag1}>Pagina 1</button>
        let botao2=<button key={"bDois"} onClick={this.clickPag2}>Pagina 2</button>
        let botao3=<button key={"bTres"} onClick={this.clickPag3}>Pagina 3</button>
        let botao4=<button key={"bQuatro"} onClick={this.clickPag4}>Pagina 4</button>
        let botao5=<button key={"bCinco"} onClick={this.clickPag5}>Pagina 5</button>
        
        let listaBotoes=[]

        listaBotoes.push(botao1)
        listaBotoes.push(botao2)
        listaBotoes.push(botao3)
        listaBotoes.push(botao4)
        listaBotoes.push(botao5)
        

        if(this.state.pagina=="Principal"){
            listaBotoes.splice(0,1)
            pagina=<Main numero={1}/>
        }
        if(this.state.pagina=="Galeria"){
            listaBotoes.splice(1,1)
            pagina=<Galeria/>
        }
        if(this.state.pagina=="Frutas"){
            listaBotoes.splice(2,1)
            pagina=<Frutas/>
        }
        if(this.state.pagina=="Automoveis"){
            listaBotoes.splice(3,1)
            pagina=<Automoveis/>
        }
        if(this.state.pagina=="API"){
            listaBotoes.splice(4,1)
            pagina=<Filmes/>
        }

        return(
            <div>
                <h1>Voce esta na pagina {this.state.pagina}</h1>
                {pagina}
                {listaBotoes}
            </div>
        );

    }
}

function Main(props){
    return(
        <div>
            <h1>Voce esta na pagina {props.numero}</h1>
        </div>
    );
}