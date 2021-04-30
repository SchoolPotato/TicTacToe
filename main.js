$(function(){
    $("#0").on("click", function(){ticTacToe(0)});
    $("#1").on("click", function(){ticTacToe(1)});
    $("#2").on("click", function(){ticTacToe(2)});
    $("#3").on("click", function(){ticTacToe(3)});
    $("#4").on("click", function(){ticTacToe(4)});
    $("#5").on("click", function(){ticTacToe(5)});
    $("#6").on("click", function(){ticTacToe(6)});
    $("#7").on("click", function(){ticTacToe(7)});
    $("#8").on("click", function(){ticTacToe(8)});
})

let turns = 1;
let board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

function ticTacToe(x){
    if(turns == 1){
        switch(x){
        case 0:
            if(board[0][0] != "x" && board[0][0] != "o"){
                $("#0").attr('src', 'images/XTL.png');
                turns = 2;
                board[0][0] = "x";
                console.log("done0")
            }
            break;
        case 1:
            if(board[0][1] != "x" && board[0][1] != "o"){
                $("#1").attr('src', 'images/XTM.png');
                turns = 2;
                board[0][1] = "x";
                console.log("done1")
            }
            break;
        case 2:
            if(board[0][2] != "x" && board[0][2] != "o"){
                $("#2").attr('src', 'images/XTR.png');
                turns = 2;
                board[0][2] = "x";
                console.log("done2")
            }
            break;
        case 3:
            if(board[1][0] != "x" && board[1][0] != "o"){
                $("#3").attr('src', 'images/XML.png');
                turns = 2;
                board[1][0] = "x";
                console.log("done3")
            }
            break;
        case 4:
            if(board[1][1] != "x" && board[1][1] != "o"){
                $("#4").attr('src', 'images/XMM.png');
                turns = 2;
                board[1][1] = "x";
                console.log("done4")
            }
            break;
        case 5:
            if(board[1][2] != "x" && board[1][2] != "o"){
                $("#5").attr('src', 'images/XMR.png');
                turns = 2;
                board[1][2] = "x";
                console.log("done5")
            }
            break;
        case 6:
            if(board[2][0] != "x" && board[2][0] != "o"){
                $("#6").attr('src', 'images/XBL.png');
                turns = 2;
                board[2][0] = "x";
                console.log("done6")
            }
            break;
        case 7:
            if(board[2][1] != "x" && board[2][1] != "o"){
                $("#7").attr('src', 'images/XBM.png');
                turns = 2;
                board[2][1] = "x";
                console.log("done7")
            }
            break;
        case 8:
            if(board[2][2] != "x" && board[2][2] != "o"){
                $("#8").attr('src', 'images/XBR.png');
                turns = 2;
                board[2][2] = "x";
                console.log("done8")
            }
            break;
        }
    } else if(turns == 2) {
        switch(x){
            case 0:
                if(board[0][0] != "x" && board[0][0] != "o"){
                    $("#0").attr('src', 'images/OTL.png');
                    turns = 1;
                    board[0][0] = "o";
                    console.log("done9")
                }
                break;
            case 1:
                if(board[0][1] != "x" && board[0][1] != "o"){
                    $("#1").attr('src', 'images/OTM.png');
                    turns = 1;
                    board[0][1] = "o";
                    console.log("done10")
                }
                break;
            case 2:
                if(board[0][2] != "x" && board[0][2] != "o"){
                    $("#2").attr('src', 'images/OTR.png');
                    turns = 1;
                    board[0][2] = "o";
                    console.log("done11")
                }
                break;
            case 3:
                if(board[1][0] != "x" && board[1][0] != "o"){
                    $("#3").attr('src', 'images/OML.png');
                    turns = 1;
                    board[1][0] = "o";
                    console.log("done12")
                }
                break;
            case 4:
                if(board[1][1] != "x" && board[1][1] != "o"){
                    $("#4").attr('src', 'images/OMM.png');
                    turns = 1;
                    board[1][1] = "o";
                    console.log("done13")
                }
                break;
            case 5:
                if(board[1][2] != "x" && board[1][2] != "o"){
                    $("#5").attr('src', 'images/OMR.png');
                    turns = 1;
                    board[1][2] = "o";
                    console.log("done14")
                }
                break;
            case 6:
                if(board[2][0] != "x" && board[2][0] != "o"){
                    $("#6").attr('src', 'images/OBL.png');
                    turns = 1;
                    board[2][0] = "o";
                    console.log("done15")
                }
                break;
            case 7:
                if(board[2][1] != "x" && board[2][1] != "o"){
                    $("#7").attr('src', 'images/OBM.png');
                    turns = 1;
                    board[2][1] = "o";
                    console.log("done16")
                }
                break;
            case 8:
                if(board[2][2] != "x" && board[2][2] != "o"){
                    $("#8").attr('src', 'images/OBR.png');
                    turns = 1;
                    board[2][2] = "o";
                    console.log("done17")
                }
                break;
        }
    }

    if(turns != 3){
        if(board[0][0] == "x" && board[0][1] == "x" && board[0][2] == "x"){
            winFlash(0, 1, 2, "X");
            turns = 3;
        } else if(board[1][0] == "x" && board[1][1] == "x" && board[1][2] == "x"){
            winFlash(3, 4, 5, "X");
            turns = 3;
        } else if(board[2][0] == "x" && board[2][1] == "x" && board[2][2] == "x"){
            winFlash(6, 7, 8, "X");
            turns = 3;
        } else if(board[0][0] == "x" && board[1][0] == "x" && board[2][0] == "x"){
            winFlash(0, 3, 6, "X");
            turns = 3;
        } else if(board[0][1] == "x" && board[1][1] == "x" && board[2][1] == "x"){
            winFlash(1, 4, 7, "X");
            turns = 3;
        } else if(board[0][2] == "x" && board[1][2] == "x" && board[2][2] == "x"){
            winFlash(2, 5, 8, "X");
            turns = 3;
        } else if(board[0][0] == "x" && board[1][1] == "x" && board[2][2] == "x"){
            winFlash(0, 4, 8, "X");
            turns = 3;
        } else if(board[0][2] == "x" && board[1][1] == "x" && board[2][0] == "x"){
            winFlash(2, 4, 6, "X");
            turns = 3;
        }

        else if(board[0][0] == "o" && board[0][1] == "o" && board[0][2] == "o"){
            winFlash(0, 1, 2, "O");
            turns = 3;
        } else if(board[1][0] == "o" && board[1][1] == "o" && board[1][2] == "o"){
            winFlash(3, 4, 5, "O");
            turns = 3;
        } else if(board[2][0] == "o" && board[2][1] == "o" && board[2][2] == "o"){
            winFlash(6, 7, 8, "O");
            turns = 3;
        } else if(board[0][0] == "o" && board[1][0] == "o" && board[2][0] == "o"){
            winFlash(0, 3, 6, "O");
            turns = 3;
        } else if(board[0][1] == "o" && board[1][1] == "o" && board[2][1] == "o"){
            winFlash(1, 4, 7, "O");
            turns = 3;
        } else if(board[0][2] == "o" && board[1][2] == "o" && board[2][2] == "o"){
            winFlash(2, 5, 8, "O");
            turns = 3;
        } else if(board[0][0] == "o" && board[1][1] == "o" && board[2][2] == "o"){
            winFlash(0, 4, 8, "O");
            turns = 3;
        } else if(board[0][2] == "o" && board[1][1] == "o" && board[2][0] == "o"){
            winFlash(2, 4, 6, "O");
            turns = 3;
        }
    }
}

function winFlash(space1, space2, space3, type) {
    let speed = 250
    let blinking = setInterval(function(){
        $(`#${space1}`).attr('src', 'images/SMM.png');
        $(`#${space2}`).attr('src', 'images/SMM.png');
        $(`#${space3}`).attr('src', 'images/SMM.png');

        setTimeout(function(){
            switch(space1){
                case 0:
                    $(`#${space1}`).attr('src', `images/${type}TL.png`);
                    break;
                case 1:
                    $(`#${space1}`).attr('src', `images/${type}TM.png`);
                    break;
                case 2:
                    $(`#${space1}`).attr('src', `images/${type}TR.png`);
                    break;
                case 3:
                    $(`#${space1}`).attr('src', `images/${type}ML.png`);
                    break;
                case 4:
                    $(`#${space1}`).attr('src', `images/${type}MM.png`);
                    break;
                case 5:
                    $(`#${space1}`).attr('src', `images/${type}MR.png`);
                    break;
                case 6:
                    $(`#${space1}`).attr('src', `images/${type}BL.png`);
                    break;
                case 7:
                    $(`#${space1}`).attr('src', `images/${type}BM.png`);
                    break;
                case 8:
                    $(`#${space1}`).attr('src', `images/${type}BR.png`);
                    break;
            }
        
            switch(space2){
                case 0:
                    $(`#${space2}`).attr('src', `images/${type}TL.png`);
                    break;
                case 1:
                    $(`#${space2}`).attr('src', `images/${type}TM.png`);
                    break;
                case 2:
                    $(`#${space2}`).attr('src', `images/${type}TR.png`);
                    break;
                case 3:
                    $(`#${space2}`).attr('src', `images/${type}ML.png`);
                    break;
                case 4:
                    $(`#${space2}`).attr('src', `images/${type}MM.png`);
                    break;
                case 5:
                    $(`#${space2}`).attr('src', `images/${type}MR.png`);
                    break;
                case 6:
                    $(`#${space2}`).attr('src', `images/${type}BL.png`);
                    break;
                case 7:
                    $(`#${space2}`).attr('src', `images/${type}BM.png`);
                    break;
                case 8:
                    $(`#${space2}`).attr('src', `images/${type}BR.png`);
                    break;
            }
        
            switch(space3){
                case 0:
                    $(`#${space3}`).attr('src', `images/${type}TL.png`);
                    break;
                case 1:
                    $(`#${space3}`).attr('src', `images/${type}TM.png`);
                    break;
                case 2:
                    $(`#${space3}`).attr('src', `images/${type}TR.png`);
                    break;
                case 3:
                    $(`#${space3}`).attr('src', `images/${type}ML.png`);
                    break;
                case 4:
                    $(`#${space3}`).attr('src', `images/${type}MM.png`);
                    break;
                case 5:
                    $(`#${space3}`).attr('src', `images/${type}MR.png`);
                    break;
                case 6:
                    $(`#${space3}`).attr('src', `images/${type}BL.png`);
                    break;
                case 7:
                    $(`#${space3}`).attr('src', `images/${type}BM.png`);
                    break;
                case 8:
                    $(`#${space3}`).attr('src', `images/${type}BR.png`);
                    break;
            }
        }, speed/2);
    }, speed);
}

$("#reset").on('mouseover', function(){
    $("#reset").attr('src', 'images/resetlight.png');
})

$("#reset").on('mouseout', function(){
    $("#reset").attr('src', 'images/reset.png');
})
