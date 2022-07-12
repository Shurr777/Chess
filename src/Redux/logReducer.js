import {initState} from "./initState";
import React from "react";


const GET_POSITION = "GET_POSITION";
const MOVE_FIGURE = "MOVE_FIGURE";

export const stateReducer = (state = initState, action) => {

    const getCell = (cellName) => {
        let s = null;
        state.map((elem) => {
            if (elem[0] === cellName) {
                s = elem;
            }
        });
        return s
    };
    const isVertical = (startCell, targetCell) => {
        if (startCell.x === targetCell.x) {
            return true
        }
        return false
    };
    const isHorizontal = (startCell, targetCell) => {
        if (startCell.y !== targetCell.y) {
            return false
        }
        return true
    };
    const isDiagonal = (startCell, targetCell) => {
        const absX = Math.abs(targetCell.x - startCell.x);
        const absY = Math.abs(targetCell.y - startCell.y);
        if (absX !== absY) {
            return false
        }
        return true
    };
    let count = 0;
    const CheckFiguresMov = (startCell, targetCell) => {
        if (startCell[1].figureIndex === 'R') {
            if (isVertical(startCell[1], targetCell[1]) || isHorizontal(startCell[1], targetCell[1])) {
                return true;
            }
            return false
        }
        if (startCell[1].figureIndex === 'B') {
            if (isDiagonal(startCell[1], targetCell[1])) {
                return true;
            }
            return false
        }
        if (startCell[1].figureIndex === 'Q') {
            if (isVertical(startCell[1], targetCell[1]) ||
                isHorizontal(startCell[1], targetCell[1]) ||
                isDiagonal(startCell[1], targetCell[1])
            ) {
                return true;
            }
            return false
        }
        if (startCell[1].figureIndex === 'K') {
            const absX = Math.abs(targetCell[1].x - startCell[1].x);
            const absY = Math.abs(targetCell[1].y - startCell[1].y);
            console.log('x', absX, 'y', absY);
            if (absX > 1 || absY > 1) {
                return false
            }
            return true
        }
        if (startCell[1].figureIndex === 'P') {
            if (count !== 0) {
                if (isVertical(startCell[1], targetCell[1])) {
                    const absX = Math.abs(targetCell.x - startCell.x);
                    if (absX > 1) return false
                }
                return true
            }
            if (count === 0) {
                if (isVertical(startCell[1], targetCell[1])) {
                    const absX = Math.abs(targetCell.x - startCell.x);
                    if (absX > 2) return false
                }
                count++;
                return true;
            }

        }
    };


    switch (action.type) {
        case MOVE_FIGURE:
            let startCell = null;
            let targetCell = null;
            startCell = getCell(action.payload.from);
            targetCell = getCell(action.payload.to);
            console.log('start', startCell, 'to', targetCell)

            //Checking ....
            if (startCell[1].image &&                                                             // figure enable
                startCell[1].figureIndex === action.payload.figureIndex &&                       //figure corresponds to the entry
                startCell[1].color === action.payload.color &&                                   //color matches the move
                targetCell[1].image === null || targetCell[1].color !== startCell[1].color &&  //the cell is free or with an opponent's figure
                targetCell[1].figureIndex !== 'K'
            ) {
                //CheckingFigures
                //Moving
                if (CheckFiguresMov(startCell, targetCell)) {
                    let selectedElementImg = '';
                    let selectedElementColor = '';
                    let selectedElementFigureIndex = '';
                    let from = state.map((elem) => {
                        if (elem[0] === action.payload.from) {
                            if (elem[1].figureIndex === action.payload.figureIndex) {
                                selectedElementImg = elem[1].image;
                                selectedElementFigureIndex = elem[1].figureIndex;
                                selectedElementColor = elem[1].color;
                                elem[1].image = null;
                                elem[1].figureIndex = null;
                                elem[1].color = null;
                            }
                            return elem
                        } else {
                            return elem
                        }

                    });
                    let to = from.map((elem) => {
                        if (elem[0] === action.payload.to) {
                            elem[1].image = selectedElementImg;
                            elem[1].figureIndex = selectedElementFigureIndex;
                            elem[1].color = selectedElementColor;
                            return elem
                        } else {
                            return elem
                        }
                    });
                    return to;
                }
            }
        default:
            return state;
    }
};


//...ACTION CREATORS...
export const getStartPositionCreator = () => ({type: GET_POSITION});
export const movePositionCreator = (data) => ({type: MOVE_FIGURE, payload: data});


//...THUNK CREATORS...
//restart creator not use in this version )))__________________
export const getStartPositionThunkCreator = () => (dispatch) => {
    dispatch(getStartPositionCreator())
};

export const movePositionThunkCreator = (from, to, figure = null) => (dispatch) => {
    let data = {from: from, to: to, figureIndex: figure};
    dispatch(movePositionCreator(data))
};



