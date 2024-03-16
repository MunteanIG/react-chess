import './Pieces.css';
import Piece from './Piece';
import {useRef } from 'react';
import {copyPosition } from '../../../helper';
import { useAppContext } from '../../../contexts/Context';
import { clearCandidates, makeNewMove } from '../../../reducer/action/move';


const Pieces = () => {

    const ref = useRef();

    const {appState, dispatch} = useAppContext();

    const currentPosition = appState.position[appState.position.length-1];

    //Getting the coordonates of where the piece was dropped
    const calcCoords = e => {
        const {width, left, top} = ref.current.getBoundingClientRect();
        const size = width/8;
        const y = Math.floor((e.clientX-left) / size);
        const x = 7 - Math.floor((e.clientY-top) / size); // because we are counting from the top to bottom
        return {x,y};
    }

    const onDrop = e => {
        const newPosition  = copyPosition (currentPosition);
        const {x,y} = calcCoords(e);

        //Getting the piece and the position
        const [p, rank, file] = e.dataTransfer.getData('text').split(', ');

        //Check if the move is valid
        if(appState.candidateMoves?.find(m => m[0] === x && m[1] === y)){
            newPosition[Number(rank)][Number(file)] = '';
            newPosition[x][y] = p;
            dispatch(makeNewMove({newPosition}));
        }

        dispatch(clearCandidates())

    }

    //Preventing a drag over event 
    const onDragOver = e => e.preventDefault();

    return <div
        ref = {ref} 
        onDrop =  {onDrop} 
        onDragOver = {onDragOver}
        className='pieces'>

    {
        currentPosition.map((r,rank)=>
            r.map((f,file)=>
                currentPosition[rank][file]
                ? <Piece 
                    key = {rank+'-'+file}
                    rank = {rank}
                    file = {file}
                    piece = {currentPosition[rank][file]}
                    />
                : null 
            )
        )
    }
    </div>
}

export default Pieces;