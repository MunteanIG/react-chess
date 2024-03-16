import { useAppContext } from "../../../contexts/Context";
import arbiter from "../../../arbiter/arbiter";
import { generateCandidateMoves } from "../../../reducer/action/move";

const Piece = ({rank, file, piece}) => {
    
    //Getting the state of the game, who will have the next move, and the last position.
    const {appState, dispatch} = useAppContext();
    const {turn,position} = appState;
    const currentPosition = position[position.length-1];

   

    const onDragStart = e =>  {

        //Removing the "+" cursor
        e.dataTransfer.effectAllowed = 'move';

        //Getting the piece and the position after making a move
        e.dataTransfer.setData('text/plain',`${piece}, ${rank}, ${file}`);

        //Hiding the piece once you are dragging it.
        setTimeout( () =>{
            e.target.style.display = 'none';
        },0)

        if (turn === piece[0]) {
            const candidateMoves = arbiter.getRegularMoves({position:currentPosition,piece,rank,file});
            dispatch(generateCandidateMoves({candidateMoves}));
        }

    }

    const onDragEnd = e => {
         e.target.style.display = 'block';
    }

    return (
    <div 
    className={`piece ${piece} p-${file}${rank}`}
    draggable={true}
    onDragEnd = {onDragEnd}
    onDragStart={onDragStart}
    />)
}

export default Piece;