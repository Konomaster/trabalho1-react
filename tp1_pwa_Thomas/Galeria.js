import React from 'react'

//minha intencao eh renderizar somente a imagem 
//nova ao inves de recarregar as que ja existem na tela
export class Galeria extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            imagens:[]
        }

        this.insereImagem=this.insereImagem.bind(this)
        this.excluiImagem=this.excluiImagem.bind(this)
    }

    insereImagem(){
        let inputValue=parseInt(document.getElementById("input").value)
      
        if(!isNaN(inputValue) && typeof inputValue=="number"){
            let imgs=this.state.imagens
            imgs.push(inputValue)
            this.setState({
                imagens: imgs
            })
        }
    }

    excluiImagem(){
        let inputValue=parseInt(document.getElementById("input").value)
        
        if(!isNaN(inputValue) && typeof inputValue=="number"){
            let imgs=this.state.imagens
            for(let i=0; i<imgs.length; i++){
                if (imgs[i]==inputValue){
                    //manipular a lista dentro do for eh perigoso
                    //so to fazendo isso pq apos modificar eu dou
                    //um break  
                    imgs.splice(i,1)
                    this.setState({
                        imagens: imgs
                    })
                    break
                }
            }

        }
    }

    render(){
        
        let botaoInsere=<button  onClick={this.insereImagem}>Inserir imagem</button>
        let botaoExclui=<button  onClick={this.excluiImagem}>Excluir imagem</button>
    
        let input=<input id="input" type="text"></input>

        let listaFotos=this.state.imagens.map((img,index)=>(
            <img alt={"Imagem"+img} key={index} src={require("./galeria/imagem"+img+".jpg")} width="600"/>
        ))

        return(
            <div>
                {input}
                {listaFotos}
                {botaoInsere}
                {botaoExclui}
            </div>
        );
    }
}
