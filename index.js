let msg = "que pasa tooo"

console.log("hola mundo");



document.addEventListener("DOMContentLoaded", init)

function init(event) {

    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.json")
}


function loadData(url) {
    let json
    fetch(url)
        .then(response => response.json())
        .then(data => pintaMishobbies(data))   
}

function pintaMishobbies(json) {
    console.log(json)
}