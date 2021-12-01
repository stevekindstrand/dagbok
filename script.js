const addName = document.getElementById("addName");
const addDate = document.getElementById("addDate");
const textArea = document.getElementById("textArea");
const button = document.getElementById("button");
//Local storage variable
const storedInput = localStorage.getItem("Dagboksinlägg");

button.addEventListener("click", function(event){
    event.preventDefault();

    div = document.createElement("DIV");
    div.innerHTML += addName.value + "<br>";
    div.innerHTML += addDate.value + "<br><br>";
    div.innerHTML += textArea.value + "<br>";
    document.body.appendChild(div);

    saveLocalStorage();
});

const saveLocalStorage = () =>{
    localStorage.setItem("Dagboksinlägg", div.innerText);
};