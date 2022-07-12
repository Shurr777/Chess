import React from 'react';
import {connect} from "react-redux";
import Chessboard from "./Chessboard";
import Cell from "../Cell/Cell";
import GameControl from "../GameControl/GameControl";
import Notes from "../Notes/Notes";
import s from "./ChessboardContainer.module.css";

const horizontal = ['a', 'b', 'c', 'd', 'e'];
const vertical = [1, 2, 3, 4, 5];

const ChessboardContainer = ({startPoints, getStartPositionThunkCreator, notes}) => {

    //CreateChessboard
    let board = [];
    for (let i = 0; i < horizontal.length; i++) {
        for (let j = 0; j < vertical.length; j++) {
            let num = j + i + 2;
            let image = '';
            //spawn figures
            /* console.log('startpoints', startPoints)*/
            for (let value of startPoints.values()) {
                if (value[1].x === j && value[1].y === i) {
                    image = value[1].image;
                    board.push(<Cell key={`${i},${j}`} number={num} image={image}/>)
                }
            }
        }
    }

    return (
        <div className={s.overlay}>
            <div className={s.gameSpace}>
                <Chessboard board={board}/>
                <GameControl getStartPositionThunkCreator={getStartPositionThunkCreator}/>
            </div>
            <div className={s.notes}>
                <h2>Notes...</h2>
                <Notes notes={notes}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        startPoints: state.Logs,
        notes: state.Notes
    }
};

export default connect(mapStateToProps, null)
(ChessboardContainer)