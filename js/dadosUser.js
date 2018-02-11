var dados = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("nameUser").innerHTML = dados.login;
var name = dados.login;
if(name == 'hellen'){
    document.getElementById("img").src = '../img/hellen.jpg';
} else {
    document.getElementById("img").src = '../img/hemile.jpg';
}