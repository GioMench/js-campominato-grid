//console.log('test');

//



/*var element = document.createElement('div');
var box = document.getElementById('container');
let theBox = box.appendChild(element).classList.add('box');*/

function createGrid(numberCell) {


    for (let i = 0; i < numberCell; i++) {

        const container = document.getElementById('container');
        var cell = document.createElement('div');
        cell.classList.add('box');
        container.appendChild(cell);
        cell.append(i + 1);
        console.log(cell);


    }



    list = [];
    list.push(cell)
    console.log(list);

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log(element);
        
        element.addEventListener('click', function () {
            element.classList.toggle('box2');
            console.log(element);
        })

    }




}







/*list = []
list.push(cell)
console.log(list);

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);
    cell.addEventListener('click', function (){
        element.classList.toggle('box2');
        console.log(element);
    })
    
}*/



/*for (let i = 0; i < cell.length; i++) {
       var theCell = cell[i];
       console.log(theCell);

   }*/

document.getElementById("play").addEventListener('click', function () {


    createGrid(100)


});

document.getElementById("btn_medium").addEventListener('click', function () {

    createGrid(81);

    container.style.width = "900px";


});

document.getElementById("btn_hard").addEventListener('click', function () {

    createGrid(49);

    container.style.width = "700px";



});





//document.getElementsByClassName('box').addEventListener("click", function () {
//box.classList.add('box2')
//})