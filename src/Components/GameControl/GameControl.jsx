import React, {useState} from "react";
import {connect} from "react-redux";
import {getStartPositionThunkCreator, movePositionThunkCreator} from "../../Redux/logReducer";
import s from "./GameControl.module.css"
import {addNoteThunkCreator} from "../../Redux/noteReducer";

const GameControl = (props) => {

    const [err, setErr] = useState('');
    const [move, setMove] = useState('');


    const onMakeMove = (text) => {
        let figure = '';
        let f = text.match(/[KQRNB][a-e][1-5][-][a-e][1-5]|[a-e][1-5][-][a-e][1-5]/g);
        if (f !== null) {
            figure = f[0];
            setErr('')
        } else {
            setErr('wrong move')
        }
        let figureIndex = null;
        let from = '';
        let to = '';
        if (figure.length === 6) {
            figureIndex = figure[0];
            from = figure.slice(1, 3);
            to = figure.slice(4)
        } else if (figure.length === 5) {
            figureIndex = 'P';
            from = figure.slice(0, 2);
            to = figure.slice(3, 5)
        }
        console.log('from', from, 'to', to, 'figure', figureIndex, 'Text', text);
        props.movePositionThunkCreator(from, to, figureIndex);
        props.addNoteThunkCreator(text);
        setMove('');

    };

    return (
        <div className={s.controlBlockOverlay}>
            {err ?
                <div>{err}</div> :
                <div>Make your move in english chess notation</div>
            }
            <div className={s.controlBlock}>
                <input type="text" placeholder={'move'}
                       onChange={(e) => setMove(e.target.value)}
                       value={move}
                />
                <button onClick={() => onMakeMove(move)}>Make a move</button>
            </div>
        </div>
    )
};

export default connect(null,
    {getStartPositionThunkCreator, movePositionThunkCreator, addNoteThunkCreator})
(GameControl);