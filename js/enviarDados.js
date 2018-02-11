
if(document.getElementById("btnEnviar") != null){
    document.getElementById("btnEnviar").onclick = function(){
        var titulo = document.getElementById("titulo").value;
        var texto = document.getElementById("texto").value;
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/inserirDados.php",
            type: "POST",
            data: {"titulo" : titulo , "texto" : texto},
            success: function(result){
                if(result != false){
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
    }
}