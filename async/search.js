class SearchField{
    constructor(searchUrl){
        this.searchUrl = searchUrl;
        this.db = this.loadDB();
        this.rootDiv = document.getElementById("root");
        this.doc = document.createElement('input');
        this.rootDiv.appendChild(this.doc);
        this.onUpdate = this.onUpdate.bind(this);
        this.results = [];

        this.innerValue = document.querySelector("input");
        this.innerValue.addEventListener("input", this.onUpdate);
    }

    loadDB(){
        const loadingDB = new Promise((resolve) => {
            const request = new XMLHttpRequest();
            request.open("GET", this.searchUrl);
            request.onload = function(){
                let entities = JSON.parse(request.response).results;
                resolve(entities)
            }
            request.send();
        });
        loadingDB.then((db) => {
            this.db = db
            console.log("Загрузили с кайфом");
            // console.log(this.db.length)
        }).catch(error => {
            console.log("Все хуево");
            console.log(error);
        })
    }

    onUpdate(e){
        let searchArg = e.target.value.toLowerCase();
        this.doSearch(searchArg);
        this.showResults();
        if (searchArg.length == 0){
            this.cleanResults();
        }
    }

    doSearch(text){
        let entities = this.db;
        this.cleanResults();

        for (let i = 0; i < entities.length; i++){
            if (entities[i].name.toLowerCase().includes(text)){
                let result = new Person(entities[i])
                this.results.push(result);
            }
        }
    }

    showResults(){
        for (let i = 0; i < this.results.length; i++){
            this.results[i].appendOn(this.rootDiv);
        }
    }

    cleanResults(){
        for (let i = 0; i < this.results.length; i++){
            this.results[i].removeFrom(this.rootDiv);
        }
        this.results = [];
    }
}

class Person{
    constructor(obj){
        this.doc = document.createElement("div");
        
        this.obj = obj;
        this.doc.innerText = obj.name;
        this.showOnPage = this.showOnPage.bind(this);
        this.doc.onclick = this.showOnPage;
    }
    
    appendOn(div){
        div.appendChild(this.doc);
    }

    removeFrom(div){
        div.removeChild(this.doc);
    }

    showOnPage(){
        let infoBlock = new EntityInfoBlock(this.obj)
        infoBlock.showInfo();
    }
}

class EntityInfoBlock{
    constructor(entity){
        this.entity = entity;
        this.doc = document.createElement("div");
        this.root = document.getElementById("root");
        this.root.appendChild(this.doc);
    }

    showInfo(){
        let propertyList = Object.keys(this.entity)
        for(let i = 0; i < propertyList.length; i++){
            let row = document.createElement("div");
            let fieldValue = this.entity[propertyList[i]];
            row.innerText = propertyList[i] + ": "+ fieldValue;
            this.doc.appendChild(row);
        }
    }
}

search = new SearchField("https://swapi.dev/api/people/");