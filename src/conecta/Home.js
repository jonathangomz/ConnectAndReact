import React, {Component} from "react";
const refreshPage = ()=>{
  window.location.reload();
}
class Home extends React.Component{

  board = [...new Array(7)].map((_, i) => [...new Array(6)].map((_, i) => i));
  boardState = [...new Array(7)].map((_, i) => [...new Array(6)].map((_, i) => 'free'));

  clicksito(row, col) {
    const status = this.state.currentPlayer ? 'Pink' : 'Purple';
    const estilo = this.state.currentPlayer ? 'pink' : 'purple';

    const lastPosition = this.boardState[col].filter((circle) => circle === 'free').length - 1;
    this.boardState[col][lastPosition] = this.state.currentPlayer;

    this.setState({
      currentPlayer: !this.state.currentPlayer,
      puntito: estilo,
      board: [...this.boardState]
    });
  }

  constructor(props){
    super(props);
    this.state = {
      board: this.boardState,
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
            {this.board.map((rows, col) =>
              <div onClick={() => this.clicksito(rows, col)} className="column" id={`column-${col}`} data-x="0" key={col}>
                {rows.map((row) =>
                  <svg height="100" width="100" className={`row-${row}`} key={row}>
                    <circle cx="50" cy="50" r="25" className = {this.state.board[col][row]} key={row}/>
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