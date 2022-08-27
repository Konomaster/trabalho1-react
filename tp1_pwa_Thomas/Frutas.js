import React from "react";

export class Frutas extends React.Component {
    

    constructor(props) {
        super(props);

        //state vai ter a lista de frutas
        this.state={
            frutas:['Morango','Laranja','Limao']
        }
        
        this.insereFruta=this.insereFruta.bind(this)
        this.mostraFruta=this.mostraFruta.bind(this);
    }

    mostraFruta(){
        let select=document.getElementById('selectFrutas')
        let texto="A fruta selecionada eh "+ select.options[select.selectedIndex].text
        alert(texto)

    }

    insereFruta(){


        let novaFruta=document.getElementById("input").value
        //input vazio nao adiciona na lista
        if(novaFruta==""){
            return
        }
        let teste=this.state.frutas
        
        //se fruta ja existir no menu nao adiciona
        for (let index = 0; index < teste.length; index++) {
            if(teste[index]==novaFruta){
                alert('Nao insira frutas que ja estão no menu')
                return
            }
        }
        
        teste.push(novaFruta)
        //atualiza estado com array com nova fruta
        this.setState({
            frutas:teste
        })
    }

    render(){
        

        return (
            <div>
                <div>
                    <input id="input"></input>
                    <button onClick={this.insereFruta}>Insere Fruta</button>
                </div>
                <div>
                <select id="selectFrutas">
                    {this.state.frutas.map((f)=>(
                        <option key={f} value={f}>{f}</option>
                    ))}
                </select>
                <button onClick={this.mostraFruta}>Mostra Fruta</button>
                </div>
            </div>
        )
    }
}