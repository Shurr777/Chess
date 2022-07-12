import React from 'react';
import s from "./Notes.module.css"


const Notes = (props) => {
    console.log('note',props.notes)
    return (
        <div className={s.notesBlock}>
            {props.notes.map((note)=><span>{note}</span>)}
        </div>
    );
};

export default (Notes)