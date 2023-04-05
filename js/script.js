// Select Elements 
const input = document.querySelector("input");
const lista = document.querySelector("ul");

//Functions
function handleKeyUp(e) {
    if(e.key === "Enter") {
        //add element li in list
        const newLi = document.createElement("li");
        newLi.innerText = input.value;
        lista.appendChild(newLi);

        //clean input
        input.value = " ";
    }
}

//Eventos
input.addEventListener("keyup", handleKeyUp);

