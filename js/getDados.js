var dados = JSON.parse(localStorage.getItem("usuario"));
function getAll(){
    let login = dados.login;
    document.getElementById("preLoad").src = "../img/load.gif";
    document.getElementById("esconder").style.display = "none";
    $.ajax({
        url: 'http://betho3.000webhostapp.com/mvc/dao/showAll.php',
        data: {"login" : login},
        type: 'POST',
        success: function(result){
            var dados = JSON.parse(result);
            console.log(dados);
            let txt = '';
            for(let i in dados){
                txt += 
                "<div class='divWhite'>"+
                    "<span class='hid'>" + dados[i].id + "</span>" +
                    "<label class='data'>" + dados[i].data + "</label>"+
                    "<div class='divTitulo'>" + dados[i].titulo + "</div>" +
                    "<div class='divTexto'>" + dados[i].texto + "</div>" +
                "</div>";
            }
            document.getElementById("preLoad").style.display = "none";
            document.getElementById("esconder").style.display = "block";
            document.getElementById("diario").innerHTML = txt;

        }, error: function(){
            var dados = JSON.parse(result);
            console.log(dados);
        }
    });
}