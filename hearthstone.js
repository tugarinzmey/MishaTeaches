class Card{
    constructor(name, manacost, effect="", playersClass=null){
        this.name = name;
        this.manacost = manacost;
        this.isNeutral = (this.playersClass == null);
    }

    play(){
        console.log(this.name, " has been played!")
    }
}

class Spell extends Card{
    constructor(name, manacost, effect="", playersClass=null, isTargetable=false){
        super(name, manacost, effect="", playersClass=null, isTargetable=false);
        this.isTargetable = isTargetable;
    }

    play(){
        console.log("Spell", this.name, " has been played!")
    }
}

class TargetSpell extends Spell{
    constructor(name, manacost, effect="", playersClass=null){
        super(name, manacost, effect="", playersClass=null);
        this.isTargetable = true;
    }

    play(target){
        console.log("Spell", this.name, " has been played on ", target);
    }
}

class Minion extends Card{
    constructor(name, hp, attack, type=null){
        super();
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.type = type;
    }
    play(table){
        table.push(this);
        console.log("Minion ", this.name, "has been played!");
    }
}

class Hero{
    constructor(){
        this.table = [];
        this.hp = 30;
        this.armor = 0;
        this.heroPowerPressed = false;
    }

    playCard(card, target=null){
        if(card instanceof Minion){
            this.table.push(card);
            card.play(this.table);
        }
        if(card instanceof Spell){
            card.play();
        }
        if (card instanceof TargetSpell){
            card.play(target);
        }
    }
}

class Warrior extends Hero{
    pressHeroPower(){
        if (this.heroPowerPressed==false){
            console.log(this.nickname, " getting armor up!");
            console.log(this.armor+=2);
        }
        else{
            console.log("hero power is already pressed!")
        }
    }
}

class Mage extends Hero{
    pressHeroPower(target){
        if (this.heroPowerPressed==false){
            console.log(this.nickname, " pings", target, " for 1 damage");
            target.hp -= 1;
        }
        else{
            console.log("hero power is already pressed!")
        }
    }
}
fireball = new TargetSpell("Fireball", 4, "Deal 6 damage", Mage);
tinyfin = new Minion("Murlock Tinyfin", 1, 1, "murlock");

player1 = new Warrior();
player2 = new Mage();

player1.playCard(tinyfin);
player2.playCard(fireball, player1);