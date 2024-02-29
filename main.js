//console.log('test');

//


/**
 * 
 * create div element of grid
 * append the element in container 
 * add to element a class
 * add evenlistenr for change color of cell and log message
 * 
 */
function createGrid(numberCell) {

    listMagic = [];

    for (let i = 0; i < 16; i++) {

        var numberMagic = Math.floor((Math.random() * 100) + 1);
        numberMagic = listMagic[i];

        if (!listMagic.includes(numberMagic)) {
            listMagic.push(numberMagic)
        } else {
            numberMagic = Math.floor((Math.random() * 100) + 1);
            listMagic.push(numberMagic);
            console.log(numberMagic);
        }

    }

    const container = document.getElementById('container');

    for (let i = 0; i < numberCell; i++) {

        const cell = document.createElement('div');
        cell.classList.add('box');
        container.appendChild(cell);
        cell.append(i + 1);
        //console.log(cell);

        var theCell = cell;
        console.log(i);


        cell.addEventListener('click', function () {

            if (numberMagic === i) {
                cell.classList.toggle('boxMagic');
            } else {
                cell.classList.toggle('box2');
                console.log(i + 1, 'colpita');
            }


        })



    }



}












document.getElementById("play").addEventListener('click', function () {



    createGrid(100);


});

document.getElementById("btn_medium").addEventListener('click', function () {

    createGrid(81);

    container.style.width = "900px";


});

document.getElementById("btn_hard").addEventListener('click', function () {

    createGrid(49);

    container.style.width = "700px";



});