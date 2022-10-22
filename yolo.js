class Banan {
    print(){
        console.log('ya method banana');
        console.log(this);
    }
};

// 8. Sozdat component interface (slider, dropdown e.t.c) 

// Mark pro HS dva-tri primera

class Car extends Banan {
    constructor(name) {
        super();
        this.name = name;
    };
    print(){
        console.log('ya method tesli');
        console.log(this.name);
    }

    callBananaMethod(){
        return super.print();
    };
};

let tesla = new Car("tesla");

// tesla.vnimatelno();
tesla.callBananaMethod();
