const row = 3;
const col = 3;
let board = [];
for(let i=0; i<row; i++){
    board.push([])
    for(let j=0; j<col; j++){
        board[i].push(j+1)
    }
}
for(let i=0; i<row; i++){
    let boardRow = "";
    for(let j=0; j<col; j++){
        
        boardRow += board[i][j] 
        if(j != row - 1){
            boardRow += " | "
        }
    }
    console.log(boardRow);
}
for(let i=0; i<row; i++){
	for(let j=0; j<col; j++){
		if(board[i][j] % 2 == 0){
			console.log(i,j)
		}
	}
}
