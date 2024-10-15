let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#second");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg");
let turnO =true;  //playerX , playerO
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,7,8],
    [6,7,8],
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");


}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for (let box of boxes){
        box.enable = false;
        box.innerText="";
    }
}
const showwinner = (winner)=>{
    msg.innerText = `Congratulations ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBox();
}
const checkwinner = ()=>{
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val!= "" && pos2val!="" && pos3val!= ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);