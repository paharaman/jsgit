//import {Backend} from "/backend.js"
//const api = new Backend;
//api.setBaseURL("https://api.learnjavascript.online/demo/shopping-list.json");
const button = document.querySelector("button");
const ul = document.querySelector("#listings");

const displayElement = element => {
    ul.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
}

const getInfo = () => {
    fetch("https://api.learnjavascript.online/demo/shopping-list.json").then(response => response.json())
    .then(data => {
        data.forEach(element => {
            displayElement(element);
        });

    })

    button.addEventListener("click", e => {
        e.preventDefault();
        getInfo();
    })

}
