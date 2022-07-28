

function getComputerChoice(){
    let choice=['Rock','Paper','Scissor'];
    const randomNumber = Math.floor(Math.random()*3)
    let random=choice[randomNumber];
    return random;
}

const btn=document.querySelectorAll('button');
let playerSelection;

btn.forEach(button => button.addEventListener('click',()=>{
    playerSelection=button.textContent;
    getComputerChoice();
    playRound();
    win .appendChild(div);
}));




let playercount=0;
let computercount=0;



function playRound(){
    let computerSelection=getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
        
     if (playerSelection!==computerSelection){
            
         if (playerSelection=='Rock'){
             if(computerSelection=='Paper'){
                    computercount++;
            }else{
                    playercount++;
                }
         }else if(playerSelection=='Paper'){
             if (computerSelection=='Rock'){
                    playercount++;
                }
            else{
                    computercount++;
                }
         }else if(playerSelection=='Scissor'){
            if (computerSelection=='Rock'){
                    computercount++;
            }else{
                    playercount++;
                } 
        }else{
                
            }
            
        }
    if(playerSelection==computerSelection){

        }
        
        if(playercount <=5){
            co.textContent=  computercount;
            pl.textContent= playercount;
           if(playercount==5){
            let res=(playercount> computercount)?div.textContent="You win:)" : div.textContent="You lose:("; 
           }
            
        }
        
}

let co=document.querySelector('.co');
let pl=document.querySelector('.pl');
const win=document.querySelector('.win');
const div=document.createElement('div');
div.style.cssText='font-weight: 600;font-family: fantasy;text-align: center;font-size: 26px;padding:30px;letter-spacing:3px';
co.style.cssText='color:black;font-size:20px';
pl.style.cssText='color:black;font-size:20px';







