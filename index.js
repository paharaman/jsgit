//import {Backend} from "/backend.js"
//const api = new Backend;

class MyFirstWebComponent extends HTMLElement {
    constructor(){
        super();
        this.table = document.querySelector("#tableHeader");
    }
}

window.customElements.define("app-table", MyFirstWebComponent);
