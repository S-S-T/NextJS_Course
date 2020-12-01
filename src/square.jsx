import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

export default Square;

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
