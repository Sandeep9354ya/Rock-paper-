let userscore=0;
let compscore=0;

const choice= document.querySelectorAll("img");
const msg= document.querySelector("#msg")




const usersocrepara=document.querySelector("#socre_user")
const compsocrepara=document.querySelector("#socre_comp")

const gencompchoice=()=>{
const option=["rock","paper","scissors"]
//rock paper scissors
const rnadinx=Math.floor(Math.random()*3)
return option[rnadinx]
}

const drawgame=()=>{
console.log("the game was draw")
msg.innerText="Game Draw.Try Again."
msg.style.backgroundColor="black"}
const showWinner=(userwin)=>{
if(userwin){
userscore++
usersocrepara.innerText=userscore
console.log("you win the game")
msg.innerText="you win."

msg.style.backgroundColor="green"}
else{
compscore++
compsocrepara.innerText=compscore
console.log("you lose the game")
msg.innerText="you lose"

msg.style.backgroundColor="red"}
}


const playgame=(userchoice) =>{
//computer choice
const compchoice=gencompchoice()

console.log("user choice=",userchoice,)
console.log("computer choice=",compchoice)

if(userchoice===compchoice){
drawgame()}
else{
let userwin=true
if(userchoice==="rock"){

userwin=compchoice==="paper"?false:true
}else if(userchoice==="paper"){

userwin=compchoice=="scissors"?false:true}
else{
userwin=compchoice==="rock"?false:true}
showWinner(userwin)
}
}

choice.forEach((img)=>{
img.addEventListener("click",()=>{

const userchoice=img.getAttribute("class")
playgame(userchoice)
})
})