import './Board.css';
//import { getChar } from '../../helper';
import Files from './misc/Files';
import Ranks from './misc/Ranks';
import Pieces from './Pieces/Pieces';
import { useAppContext } from '../../contexts/Context';

const Board = () => {

    // Assigning for every element of the array(number) the corresponding rank (row). 
    const ranks = Array(8).fill().map((x,i)=>8-i)

    // Assigning for every element of the array(character) the corresponding file (column). 
    const files = Array(8).fill().map((y,i)=>i+1)

    const  {appState} = useAppContext();
    const position = appState.position[appState.position.length-1];

    //Getting the class name based on whether the tile should be a light or a dark one.
    const getClassName = (i,j) => {
        let c = 'tile';
        c += (i+j)%2 === 0 ? ' tile--dark' : ' tile--light';   

        if(appState.candidateMoves?.find(m => m[0] === i && m[1] === j)){

            //If there's something in this position, that piece is an enemy piece
            if(position[i][j])
                c+= ' attacking';
            else
                c+= ' highlight';


        }
        
        return c;
    }    

    
    return <div className='board'>

        {/* Displaying the rank of the block */}
        <Ranks ranks = {ranks}/>

        <div className='tiles'>
        {/* Mapping the rank and file of every block */}
        {ranks.map((rank,i)=>
            files.map((file,j) =>
               <div key={file+'-'+rank} className ={getClassName(7-i,j)}></div>
            )
        )}
        </div>

        <Pieces/> 
        
        {/* Displaying the file of the block */}
        <Files files = {files}/>
    </div>

};

// Exporting Board function to other js files (App.js)
export default Board;