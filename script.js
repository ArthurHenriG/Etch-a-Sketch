const container=document.querySelector('.container');
const button=document.querySelector('button');
let userInput;
let div;

//GET USER INPUT, CLEAN THE CONTAINER DIV AND GENERATE A NEW GRID
button.addEventListener('click',()=>{
    userInput=window.prompt('Type the number of squares');
    container.innerHTML='';
    createGrid(userInput);
   
})


//CREATE A NEW GRID 
function createGrid(number){
   for(let i=0;i<number;i++){
     for(let j=0;j<number;j++){
        div=document.createElement('div');
        container.appendChild(div);
        div.classList.add('child');
        div.style.border='solid 2px red';

     }
   }

   container.childNodes.forEach(element => {
      element.addEventListener('mouseover',()=>{
        element.style.backgroundColor='red';
      })
   });

}





