
function createGrid(numberCell) {

    const container = document.getElementById('container');
    for (let i = 0; i < numberCell; i++) {


        const cell = document.createElement('div');
        cell.classList.add('box');
        container.appendChild(cell);
        cell.append(i + 1);
        console.log(cell);

        cell.addEventListener('click', function () {
            cell.classList.toggle('box2');
            console.log(cell);
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