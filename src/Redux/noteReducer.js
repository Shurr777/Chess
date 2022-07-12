import React from "react";

const ADD_NOTE = "ADD_NOTE";

const initNotesState = [];

export const noteReducer = (state = initNotesState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload]
        default: return state
    }
};

const addNoteActionCreator = (data) =>({type: ADD_NOTE, payload: data});

export const addNoteThunkCreator = (comingData) => (dispatch)=>{
    dispatch(addNoteActionCreator(comingData))
};

