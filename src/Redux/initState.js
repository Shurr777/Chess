import pawn_b from "../assets/figures/pawn_b.png";
import pawn_w from "../assets/figures/pawn_w.png";
import rook_b from "../assets/figures/rook_b.png";
import bishop_b from "../assets/figures/bishop_b.png";
import king_b from "../assets/figures/king_b.png";
import queen_b from "../assets/figures/queen_b.png";
import bishop_w from "../assets/figures/bishop_w.png";
import queen_w from "../assets/figures/queen_w.png";
import king_w from "../assets/figures/king_w.png";
import rook_w from "../assets/figures/rook_w.png";

export const initState = [
    ['a1',{x:0, y:4, image: bishop_w, figureIndex: 'B', color: 'true'}],
    ['b1',{x:1, y:4, image: queen_w, figureIndex: 'Q', color: 'true'}],
    ['c1',{x:2, y:4, image: king_w, figureIndex: 'K', color: 'true'}],
    ['d1',{x:3, y:4, image: bishop_w, figureIndex: 'B', color: 'true'}],
    ['e1',{x:4, y:4, image: rook_w, figureIndex: 'R', color: 'true'}],
    ['a2',{x:0, y:3, image: pawn_w, figureIndex: 'P', color: 'true'}],
    ['b2',{x:1, y:3, image: pawn_w, figureIndex: 'P', color: 'true'}],
    ['c2',{x:2, y:3, image: pawn_w, figureIndex: 'P', color: 'true'}],
    ['d2',{x:3, y:3, image: pawn_w, figureIndex: 'P', color: 'true'}],
    ['e2',{x:4, y:3, image: pawn_w, figureIndex: 'P', color: 'true'}],
    ['a3',{x:0, y:2, image: null, figureIndex: null, color: null}],
    ['b3',{x:1, y:2, image: null, figureIndex: null, color: null}],
    ['c3',{x:2, y:2, image: null, figureIndex: null, color: null}],
    ['d3',{x:3, y:2, image: null, figureIndex: null, color: null}],
    ['e3',{x:4, y:2, image: null, figureIndex: null, color: null}],
    ['a4',{x:0, y:1, image: pawn_b, figureIndex: 'P', color: 'false'}],
    ['b4',{x:1, y:1, image: pawn_b, figureIndex: 'P', color: 'false'}],
    ['c4',{x:2, y:1, image: pawn_b, figureIndex: 'P', color: 'false'}],
    ['d4',{x:3, y:1, image: pawn_b, figureIndex: 'P', color: 'false'}],
    ['e4',{x:4, y:1, image: pawn_b, figureIndex: 'P', color: 'false'}],
    ['a5',{x:0, y:0, image: rook_b, figureIndex: 'R', color: 'false'}],
    ['b5',{x:1, y:0, image: bishop_b, figureIndex: 'B', color: 'false'}],
    ['c5',{x:2, y:0, image: king_b, figureIndex: 'K', color: 'false'}],
    ['d5',{x:3, y:0, image: queen_b, figureIndex: 'Q', color: 'false'}],
    ['e5',{x:4, y:0, image: bishop_b, figureIndex: 'B', color: 'false'}]
];