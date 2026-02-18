

function adicionarTarefa() {
    let valorinput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorinput + '<span onclick="removerTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li);

    document.querySelector("input").value = "" 
}

function removerTarefa(li) {
    li.parentElement.remove();
}
