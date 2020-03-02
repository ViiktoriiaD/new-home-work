// Прототипы
/* Реализовать интерфейс, описанный в гисте
https://gist.github.com/fiWhy/3c23f59d2751d41f2faacd3402d8802a
*/
// Первая часть Марлезонского балета :)

let maxHealth = 100;
let maxDistance = 1000;

let soldier = {};
let soldierArray = [];

function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distance = distance;
    this.maxDistance = maxDistance;
 }
 
 MilitaryResource.prototype.isReadyToMove = function(step) {
    let move = this.distance += (Number(step) || 0);
    if (move < this.maxDistance) {
       return move;
    } else {
     return this.distance = null;
    }
 };

 MilitaryResource.prototype.isReadyToFight = function(impact) {
   let fight = this.health -= (Number(impact) || 0);
   if (fight > 0 && fight < this.maxHealth) {
      return fight;
   } else {
    return this.health = null;
   }
 };

MilitaryResource.prototype.restore = function() {
   let newHealth;
   let newDistance;
   if (this.health <= 0 || this.health === null) {
      newHealth = 100;
   } else {
      newHealth = this.health;
   }
   if (this.distance > this.maxDistance || this.distance === null) {
      newDistance = 0;
   } else {
      newDistance = this.distance;
   }   
   return this.health = newHealth,
          this.distance = newDistance;
   
};

MilitaryResource.prototype.clone = function(obj) {
  // let copy = Object.create(obj);
   let copy = Object.assign({}, obj);
   return copy;
};

// Создать экземпляр объекта
soldier = new MilitaryResource("Archer", 70, 500);
console.log(soldier);

// Пример использования созданных прототипов
soldier.isReadyToMove(200);
console.log(soldier.distance);

soldier.isReadyToFight(50);
console.log(soldier.health);

soldier.isReadyToFight(30);
soldier.isReadyToMove(400);
console.log("До восстановления")
console.log(soldier.health);
console.log(soldier.distance);
soldier.restore();
console.log("После восстановления")
console.log(soldier.health);
console.log(soldier.distance);

console.log("Клон");
let clonSoldier = soldier.clone(soldier);
console.log(clonSoldier);

// Отряд лучников
for (let i = 0; i < 5; i++) {
   soldierArray.push(new MilitaryResource("Archer" + (i + 1), maxHealth - i * 5, i * 10));
}
console.log("Отряд");
console.log(soldierArray);


// Вторая часть Марлезонского балета :(
// Что здесь надо сделать я не поняла, ответ на вопрос тоже не получила
function Squad(defaultResources) {
   this.squad = [];
   if (defaultResources) this.combineResources(defaultResources);
}

 Squad.prototype.isReadyToMove;
 Squad.prototype.isReadyToFight;
 Squad.prototype.restore;
 Squad.prototype.getReadyToMoveResources;
 Squad.prototype.combineResources;
 Squad.prototype.cloneResource;

 