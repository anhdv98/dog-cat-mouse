function Rat(){
    this.name = name;  
    this.dead = false;
}

Rat.prototype.die = function(){
    this.dead = true;
}
module.exports = Mouse;