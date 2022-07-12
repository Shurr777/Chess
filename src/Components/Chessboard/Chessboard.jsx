import React from 'react';
import style from './Chessboard.module.css'


const Chessboard = (props) => {
    return (
        <div>
            <div className={style.boardOverlay}>
                {props.board}
            </div>
        </div>
    )
};


export default Chessboard;