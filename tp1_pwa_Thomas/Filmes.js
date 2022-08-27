import React from 'react'
import axios from 'axios'

//inicializa axios e prepara pra buscar na api da tvmaze
const api =axios.create({
    baseURL: 'https://api.tvmaze.com/search'
})

export class Filmes extends React.Component {
    constructor(props){
        super(props)

        this.state={
            filmes:[]
        }

        this.buscaFilme=this.buscaFilme.bind(this)
    }

    async buscaFilme(){
        let input=document.getElementById("input").value

        const response=await api.get('shows?q='+input)

        console.log(response.data)
        this.setState({filmes: response.data})

    }

    render(){

        const {filmes} = this.state
        
        //pega a resposta da requisicao da api que
        //esta na variavel state
        let results=filmes.map((filme,index)=>
            <div key={index}>
                <h3>{filme.show.name}</h3>
                <img alt={filme.show.name} src={filme.show.image.medium} width="200"/>
                <h5>Nota {filme.show.rating.average}</h5>
                <h5><a href={filme.show.url} target="_blank">{filme.show.url}</a></h5>
                
            </div>
            )

        return(
            <div>
                <h2>Busca por Filmes</h2>
                <div>
                    {results}
                </div>
                <h3>Digite o nome do filme que deseja buscar</h3>
                <input type="text" id="input"></input>
                <button onClick={this.buscaFilme}>Buscar</button>
            </div>
        );
    }
}