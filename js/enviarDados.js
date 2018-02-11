var dados = JSON.parse(localStorage.getItem("usuario"));

if(document.getElementById("btnEnviar") != null){
    document.getElementById("btnEnviar").onclick = function(){
        var titulo = document.getElementById("titulo").value;
        var texto = document.getElementById("texto").value;
        var login = dados.login;
        if( titulo && texto != ''){
            document.getElementById("load").src = "../img/load.gif";
            document.getElementById("dshow").style.display = "none";
            $.ajax({
                url: "http://betho3.000webhostapp.com/mvc/dao/inserirDados.php",
                type: "POST",
                data: {"titulo" : titulo , "texto" : texto , "login" : login} ,
                success: function(result){
                    if(result != false){
                        document.getElementById("load").style.display = "none";
                        document.getElementById("dshow").style.display = "block";
                        function sucesso() {
                            location.reload();
                        }
                        
                        navigator.notification.alert(
                            'Adcionado ao seu diário com sucesso', 
                            sucesso,        
                            ';D',            
                            'OK'                 
                        );
                    }
                }, error: function(result){
    
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function failed() {
                        location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Erro ao adcionar em seu diário', 
                        failed,        
                        'Erro',            
                        'OK'                 
                    );
                }
            });
        } else {
            navigator.vibrate([300 , 300 , 200 , 100]);
            function faile() {
                location.reload();
            }
            
            navigator.notification.alert(
                'Escreva algo antes de enviar', 
                faile,        
                'Erro',            
                'OK'                 
            );
        }

    }
}