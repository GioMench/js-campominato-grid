//console.log('test');

//



/*var element = document.createElement('div');
var box = document.getElementById('container');
let theBox = box.appendChild(element).classList.add('box');*/


document.getElementById("play").addEventListener("click", function () {


    const container = document.getElementById('container');


    for (let i = 0; i < 100; i++) {

        //const number = Math.floor((Math.random() * 100) + 1);
       var cell = document.createElement('div');
        cell.classList.add('box');
        container.appendChild(cell);

    }

    

    
      
        
    
}); 




//document.getElementsByClassName('box').addEventListener("click", function () {
//box.classList.add('box2')
//})