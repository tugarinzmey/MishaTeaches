var a = null // sync
var b = 2;


function addSomething() { // sync
    a = 3
    
    return a;
}

setTimeout(addSomething, 0); // async


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => { // async
        // server 
        var result = addSomething() // ?????
        
        if (result === 3) {
            reject("oh it was a number 3!!!")
        }

        resolve(result)

    }, Math.floor(Math.random() * 3000));
  });



myPromise.then(result => { // jdet!!!!
    var result = result + b
    console.log(result)
}).catch(error => {
    console.log(error)
})


function reqListener () {
    // KOGDA BLEAD????
    console.log(this.responseText);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://swapi.dev/api/people/1");
  req.send();


// 1. download postman
// 2. https://swapi.dev/ create search in UI
// 3. in order to communicate with server we can use only XMLHttpRequest method
// 4. handle async code with promise ONLY
// 5. make own stack with special behavior 

var stack = [1,2,3]
stack.dobavit(1);

// [1,1,2]
stack.dobavit(10);

// [10, 1, 1]
stack.dobavit(12);

// [12, 10, 1]
stack.udalitVesStack()

// []

// ** 
stack.getAllFromCache()

// [10, 1, 2]
// ** add POP method

// **** increase stack size to 5 and can be moved back to 3