const inputItem = document.getElementById("input-item");
const submitItem = document.getElementById("button-item");
let contador = 0;

submitItem.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (submitItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container", "checkbox");
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input", "fintcheckbox");
    checkboxInput.id = `checkbox_${++contador}`;
    const checkboxLabel = document.createElement("label");
    checkboxLabel.appendChild(checkboxInput);
    containerCheckbox.appendChild(checkboxLabel);

    document.querySelector("#mainListContainer").appendChild(containerCheckbox);
})

