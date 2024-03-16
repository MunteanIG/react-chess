export const getRookMoves = ({position,piece, rank, file}) =>  {
    const moves =[] ;

    //Get what color we are
    const us = piece[0];
    //Get what color the enemy is
    const enemy = us === 'w' ? 'b' : 'w';

    //Getting which way you can move with the piece

    const direction = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]

    //What is the move possibility (getting out of the grid, capture the enemy piece etc.)

    direction.forEach(dir =>{
        for(let i=1;i<8;i++){

            //Calc. the position based on where the piece was moved on the board
            const x = rank + (i*dir[0]);
            const y = file + (i*dir[1]);

            //If the piece is out of the table
            if(position?.[x]?.[y] === undefined)
                break;

            //If the piece will capture an enemy piece    
            if(position[x][y].startsWith(enemy)){
                moves.push([x,y]);
                break;
            }

            //If we already have a piece on the tile
            if(position[x][y].startsWith(us))
                break;

            moves.push([x,y]);
        }
    })

    return moves;
}
