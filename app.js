let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;
const winPatterns =[
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


];

const resetGame=()=>{
    turn0=true; 
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;

        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`🥳congrats, Winner is ${winner}🥳`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner= ()=>{
 for(let pattern of winPatterns){
   
   let pos1Val= boxes[pattern[0]].innerText;
   let pos2Val= boxes[pattern[1]].innerText;
   let pos3Val= boxes[pattern[2]].innerText;

   if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
    if(pos1Val===pos2Val&&pos2Val===pos3Val){
        console.log("winner",pos1Val);
         showWinner(pos1Val);
   }
 }
 }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
