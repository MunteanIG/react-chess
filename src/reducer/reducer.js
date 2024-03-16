import actionTypes from "./action/actionTypes";

export const reducer = (state, action ) => {
    switch(action.type) {
        case actionTypes.NEW_MOVE : {

            //Determining who will move next
            let {turn,position} = state;
            turn = turn === 'w' ? 'b' : 'w'


             //Have the state as it was and add the new position
            position = [
                ...position,
                action.payload.newPosition
            ]
            return {
                ...state,
                turn,
                position 
            };
        }

        case actionTypes.GENERATE_CANDIDATE_MOVES : {
            return  {
                ...state,
                candidateMoves : action.payload.candidateMoves
            }
        }

        case actionTypes.CLEAR_CANDIDATE_MOVES : {
            return  {
                ...state,
                candidateMoves : []
            }
        }

        default :
            return state;
    }
}