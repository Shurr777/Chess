import React from 'react';
import style from "./Cell.module.css"


const Cell = ({number, image}) => {
    if(number % 2 === 0) {
        return <div className={style.blackCell}>
            {image && <div style={{backgroundImage: `url(${image})`}} className={style.chessCell} />}
        </div>
    }else{
        return <div className={style.whiteCell}>
            {image && <div style={{backgroundImage: `url(${image})`}} className={style.chessCell} />}
        </div>
    }
};

export default Cell;