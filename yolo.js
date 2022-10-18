class Zoo {}

class Animal {
    constructor() {
        this.name = ''
        this.type = ''
        this.age = ''
        this.x = ''
        this.y = ''
        this.gender = ''  
        this.walking = ''
    }

    getAge() {
        return this.age
    }
}


class NoLegsCreatures extends Animal {
    constructor() {
        
        this.action: function() {
            return 'polzaut'
        }
    }
}

class Birds extends Animal {
    constructor() {
        this.fly: function() {
            return 'letaut'
        }
    }
}

let ptica = new Birds();
let zmeya = new NoLegsCreatures();

ptica.getAge()

zmeya.getAge()


class Banan {
    constructor() {
        this.print = function() {
            console.log('ya method banana')
            console.log(this)
        };
    }
}

// 1. call method print from banan class inside car class
// 2. explain constructor extends behavior (immutable, mutable)
// 3. can I lock access to the Car.
// 4. read about ECMASCRIPT 5 VS JAVSCRIPT
// 5. Babel?
// 6. 
// 7. ES 4 classes
// 8. Sozdat component interface (slider, dropdown e.t.c) 

// Dve nedeli pisat chto hochesh + voice.
// adminka
// chort

// Mark pro HS dva-tri primera
// Anton RAFT 5 -> primerov polimorfizma
// Dota 2 -> 8 primerov polimorfizma
// Nastya -> dont starve
// Vika -> parapa gorod tancev / brawl stars
// Murad -> Overwatch 2 / Valorant 


function Egor(name) { this.name = name } 


class Car extends Banan {
    constructor(name) {
        super();
        this.name = name;
        this.print = function() {
            console.log('ya method tesli')
            console.log(this.name)
        };
    }

     vnimatelno() {
        console.log('vnimatelno raz')
     }

    vnimatelno() {
        console.log('vnimatelno dva')
      }

    vnimatelno() {
        console.log('vnimatelno tri')
     }

}

let tesla = new Car("tesla");

tesla.vnimatelno();
tesla.print()



Car.prototype.hello = function() {
    console.log('hello' + this.name)
}

var chislo = 1;

Number.prototype.plusOdin = function() {
    return this + 1
}

class Test {

    info() {
        console.log('very important info')
    }
}

var mytest = new Test();
mytest.info()

chislo.plusOdin()

tesla.hello(); 



