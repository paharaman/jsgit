class AppTextPara extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        let wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        wrapper.innerHTML = "Добре дошли!";

        let style = document.createElement("style");
        style.textContent = `.wrapper{
            font-weight : bold;
            margin-left: 20px;
        }`

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(wrapper);
    }   
} 
window.customElements.define("app-text-para", AppTextPara); 

class AppAnotherText extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        const anotherText = document.querySelector("#another-text");
        shadow.appendChild(anotherText.content.cloneNode(true));
    }
}
window.customElements.define("app-another-text", AppAnotherText); 
