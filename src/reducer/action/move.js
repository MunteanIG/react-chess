import actionTypes from "./actionTypes"

//Remember the new position of the move
export const makeNewMove = ({newPosition}) =>{
    return {
        type : actionTypes.NEW_MOVE,
        payload : {newPosition}
    }
}


//Highlight the possible moves
export const generateCandidateMoves = ({candidateMoves}) =>{
    return {
        type : actionTypes.GENERATE_CANDIDATE_MOVES,
        payload : {candidateMoves}
    }
}

//Highlight the possible moves
export const clearCandidates = () =>{
    return {
        type : actionTypes.CLEAR_CANDIDATE_MOVES,
    }
}