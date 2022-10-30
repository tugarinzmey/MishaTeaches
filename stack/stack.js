class SmartStack {
    constructor(size){
        this.value = new Array(size);
        this.cache = [];
        this.size = size;
    }

    reduceLength(amount = 1){
        this.cacheIt();
        let newValue = [];
        let length = this.size
        for (let i = 0; i < length-amount; i++){
            newValue[i] = this.value[i];
        }
        this.value = newValue;
        return this.value;
    }

    push(obj){
        this.cacheIt()
        this.value = [obj].concat(this.reduceLength());
    }

    pop(){
        this.cacheIt();
        let result = this.value[this.value.length];
        this.reduceLength();
        this.size--;
        return result;
    }

    changeSize(newSize){
        this.cacheIt();
        if(newSize < this.size){
            this.reduceLength(this.size - newSize);
        }
        this.size = newSize;
    }

    clear(){
        this.cacheIt();
        this.value = [];
    }

    cacheIt() {
        this.cache.push(this.value.slice(0));
        localStorage.setItem("cached", JSON.stringify(this.cache));
    }

    restoreCache() {
        this.cache = JSON.parse(localStorage.getItem("cached"));
        this.value = this.cache.pop();
        this.size = this.value.length;
        localStorage.setItem("cached", JSON.stringify(this.cache));
    }
}

let pudge = new SmartStack(7);
pudge.value = [1, 2, 3, 4, 5, 6, 7];
pudge.push(4)

