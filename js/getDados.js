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
                "<div onclick='modalChange(" + dados[i].id + ")' class='divWhite'>"+
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

function modalChange(id){
    localStorage.setItem("idUpdate", id);
    $('#modalDados').modal('open');
    let login = dados.login;
    $.ajax({
        url: 'http://betho3.000webhostapp.com/mvc/dao/showAll.php',
        data: {"login" : login},
        type: 'POST',
        success: function(result){
            var dados = JSON.parse(result);
            console.log(dados);
            let txt = '';
            for(let i in dados){
                if(dados[i]['id'] == id){
                    var dadosModal = dados[i];
                    document.getElementById("titleAgain").value = dadosModal.titulo;
                    document.getElementById("textAgain").innerHTML = dadosModal.texto;
                }
            }

        }, error: function(){
            var dados = JSON.parse(result);
            console.log(dados);
        }
    });
}
