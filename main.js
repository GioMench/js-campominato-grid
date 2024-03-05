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

        var numberMagic = Math.floor((Math.random() * numberCell) + 1);
        listMagic.push(numberMagic);
        numberMagic = listMagic[i];


        if (listMagic.includes(numberMagic)) {
            listMagic.push(numberMagic);


        } else {
            numberMagic = Math.floor((Math.random() * numberCell) + 1);
            listMagic.push
            console.log(listMagic);

        }

    }

    const container = document.getElementById('container');


    for (let i = 1; i <= numberCell; i++) {

        let cell = document.createElement('div');
        cell.classList.add('box');
        container.appendChild(cell);
        cell.append(i);

        cell.addEventListener('click', function () {

            cell.classList.add('box2');
            console.log(i, 'colpita');

            if (listMagic.includes(i)) {
                
                cell.classList.add('boxMagic');

                const gameover = document.createElement('div');

                gameover.innerHTML =
                    `
                <input type="button"  value="GAME OVER" id="endgame" name="endgame"></input>

                <div class="cover"></div>
                `
                ;
                container.appendChild(gameover);

                document.getElementById("endgame").addEventListener('click', function () {
                    location.reload();
                })
                
                
            
            }

        });


    }

    /*let count = 0;
    let btn = document.getElementsByClassName("box");
    //let result = document.getElementById("display");
     
    btn.onclick = function () {
                count++;

                console.log(count);
    }
    //result.innerHTML = count;*/





}












document.getElementById("play").addEventListener('click', function () {



    createGrid(100);


});

document.getElementById("btn_medium").addEventListener('click', function () {

    createGrid(81);

    container.style.width = "900px";
    endgame.style.width = "900px";


});

document.getElementById("btn_hard").addEventListener('click', function () {

    createGrid(49);

    container.style.width = "700px";
    endgame.style.width = "700px";



});