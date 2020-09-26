import React, { Component } from 'react';

import { ReactComponent as PacmanSvg } from './pacman.svg';  //to jest komponent
import './style.css';

class Pacman extends Component {

    state = {
        direction: 'right', 
        position: {
            top: 0,
            left: 30
        }
    }

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.pacmanRef.current.focus();
    }

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    }

    render() {
        return (
            <div 
            ref={this.pacmanRef}
            className="pacman"
            tabIndex="0"
            onKeyDown={this.handleKeyDown}
            style={this.state.position}
            >
                <PacmanSvg />
            </div>
        );
    }
}

Pacman.defaultProps = {
    step: 50, //50px
    size: 50, //pacman size 50X50px
    border: 10 * 2,
    topScoreBoardHeight: 50
}

export default Pacman;