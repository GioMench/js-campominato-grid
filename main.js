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


    for (let i = 1; i <= numberCell; i++) {


        let cell = document.createElement('div');
        cell.classList.add('box');
        container.appendChild(cell);
        cell.innerText = i
        
        //if (listMagic.includes(i)){
            //cell.append(`${listMagic[i]}`)
        //}

        cell.addEventListener('click', function () {

            cell.classList.toggle('box2');
            console.log(i + 1, 'colpita');

            if (listMagic.includes(i)) {

                cell.classList.toggle('boxMagic');

            }

        });


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