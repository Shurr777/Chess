import React from 'react';
import s from './App.module.css'
import {Provider} from "react-redux";
import ChessboardContainer from "./Components/Chessboard/ChessboardContainer";
import store from "./Redux/store";

const App = () => {
    return (
        <div className={s.tableOverlay}>
            <Provider store={store}>
                <ChessboardContainer/>
            </Provider>
        </div>
    );
};

export default App;


