import React, {Component} from "react";
const refreshPage = ()=>{
  window.location.reload();
}
class Home extends React.Component{

  board = [...new Array(7)].map((_, i) => [...new Array(6)].map((_, i) => i));
  boardState = [...new Array(7)].map((_, i) => [...new Array(6)].map((_, i) => 'free'));

  

  clicksito(row, col) {
    console.log(row, col)
    const status = this.state.currentPlayer ? 'Pink' : 'Purple';
    const estilo = this.state.currentPlayer ? 'pink' : 'purple';



    this.setState({
      currentPlayer: !this.state.currentPlayer,
      puntito: estilo,
    });

  }

  constructor(props){
    super(props);
    this.state = {
      puntito: 'free',
      currentPlayer: true,
    };
  }

 


  render(){
        return(
            <div>
                <h1 className="title">Connect Pink 4</h1>
    <div id="block_container">
      <div id="bloc1">
        <button onClick={refreshPage}>Restart</button>
        <h4 className="result">{'Next player: ' + (this.state.currentPlayer ? 'Pink' : 'Purple')}</h4>
      </div>
    <div id="game-board">
      {this.board.map((rows, i) =>
        <div onClick={() => this.clicksito(rows, i)} className="column" id={`column-${i}`} data-x="0" key={i}>
          {rows.map((b) =>
            <svg height="100" width="100" className={`row-${b}`} key={b}>
              <circle cx="50" cy="50" r="25" className = {this.state.puntito} key={this.state.currentPlayer}/>
            </svg>
          )}
        </div>
      )}
    </div>
  </div>
            </div>
        )
    }
}
export default Home