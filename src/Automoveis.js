import React from "react"


export class Automoveis extends React.Component {
    constructor(props){
        super(props)

        this.state={
            automovel:"",
            //lista com botoes padrao
            //botoes:["ferrari","porsche","tesla"]
            botoes:[]
        }

        //bind da funcao que troca o automovel
        //de acordo com o botao clicado
        this.auto=this.auto.bind(this);
        this.excluiAuto=this.excluiAuto.bind(this);
        this.addAuto=this.addAuto.bind(this);
        this.displayModel=this.displayModel.bind(this);
    
    }

    auto(event){
        
        this.setState({automovel:event.target.value})
    }



    //exclui o ultimo automovel da galeria
    excluiAuto(){
        let listaAutos=copyStateBotoes(this.state.botoes)
        //listaAutos[0]="shzam"
        listaAutos.pop()
        this.setState({botoes:listaAutos})
    }

    //adiciona um novo automovel a galeria se o nome
    //dele eh diferente dos que ja existem
    addAuto(){
        let input=document.getElementById('input').value
        if(input!=""){
        let listaAutos=copyStateBotoes(this.state.botoes)
        let achou=0
        for(let i=0;i<listaAutos;i++){
            if(listaAutos[i]==input){
                achou=1
                break
            }
        }
        if (achou==0){
            listaAutos.push(input)
            this.setState({botoes:listaAutos})
        }
    }
    }

    displayModel(){
        let texto="O modelo deste automovel eh "

        texto+=this.state.automovel;

        alert(texto)
    }

    render(){
        
        //cria um botao pra cada item dentro do atributo 
        //'botoes' em state
        let listaBotoes=this.state.botoes.map((auto ,index)=>(
            <button key={auto} value={auto} onClick={this.auto}>auto{index+1}</button>
        ))

        //remove o botao do carro mostrado
        for (let i=0; i<listaBotoes.length; i++){
            if(listaBotoes[i].props.value==this.state.automovel){
                listaBotoes.splice(i,1)
            }
        }

        //so vai mostrar a foto caso seja de algum carro
        //que tem foto na pasta local
        let fotoCarro=<div></div>
        if(this.state.automovel!=""){
        fotoCarro=<img onClick={this.displayModel} alt={this.state.automovel} src={require("./auto/"+this.state.automovel+".jpg")} width="600"/>
        }

        return(
            <Pai tipo={this.state.automovel}>
            <div>
                <h2>Isto eh um {this.state.automovel}</h2>
                {fotoCarro}
                <input id="input" type="text"></input>
                <button onClick={this.addAuto}>Inserir automovel</button>
                <button onClick={this.excluiAuto}>Excluir automovel</button>
                <div>
                    {listaBotoes}
                </div>
            </div>
            </Pai>
        );

    }

}

//funcao que cria copia do atributo botoes do statement
//pra evitar de mudar direto no state
function copyStateBotoes(botoes){
    let listaAutos=botoes
    let copia=[]
    for(let i=0;i<listaAutos.length;i++){
        copia.push(listaAutos[i])
    }
    return copia
}

//componente pai, a galeria dos automoveis
//fica no children dele
function Pai(props){
    return(
        <div>
            <h2>Eh um {props.tipo}</h2>
            {props.children}
        </div>
    );
}