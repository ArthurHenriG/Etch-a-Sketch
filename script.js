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
        div.style.width=960/number + 'px';
        div.style.height=960/number + 'px';

     }
   }

   container.childNodes.forEach(element => {
      element.dataset.opacity=0;
      
      element.addEventListener('mouseover',()=>{
           
           let currentOpacity=parseFloat(element.dataset.opacity);
           if(currentOpacity<1){
            currentOpacity+=0.1;
           }
            element.dataset.opacity=currentOpacity;
            element.style.backgroundColor=`rgba(${randomRgb()},${currentOpacity})`;

      })
      
   });
 
}


function randomRgb(){
 return  Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255);
}




