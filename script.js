const container=document.querySelector('.container');

function createGrid(number){
 
   for(let i=0;i<number;i++){
     for(let j=0;j<number;j++){
        const div=document.createElement('div');
        container.appendChild(div);
        div.style.width='50px';
        div.style.height='50px';
        div.style.backgroundColor='red';
        div.style.border='solid 2px black';
     }
   }

}

createGrid(16);