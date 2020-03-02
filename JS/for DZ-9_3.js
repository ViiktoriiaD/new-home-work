/*Нарисовать елочку из звездочек
   *
  ***
 *****
*/

let christmasTreeLevels = +prompt("Введи число уровней елочки", 5);

function buildTree(treeLevels) {
    let star;
    let spaceLeft;

    let space = "";
    for (let index = 1; index < treeLevels; index++) {
        space += " ";   
    }

    for (let i = 0; i < treeLevels; i++) {
        star = "*"
        for (let index = 1; index < 2 * i + 1; index++) {
            star += "*";            
        }
        
        spaceLeft = space.substr(i);
        console.log(spaceLeft + star);
    }
    
}

buildTree(christmasTreeLevels);