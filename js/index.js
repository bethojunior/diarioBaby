
if(document.getElementById("btnLogar") != null){
    document.getElementById("btnLogar").onclick = function(){
        var login = document.getElementById("login").value;
        var pass = document.getElementById("pass").value;
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/login.php",
            type: "POST",
            data: {"login" : login , "pass" : pass},
            success : function(result){
                if(result != false){
                    window.location.href = "views/index.html";  
                }else{
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function erroId() {
                        //
                    }
                    
                    navigator.notification.alert(
                        'Usuário ou senha incorreto', 
                        erroId,        
                        'Erro',            
                        'OK'                 
                    );
                    
                }
            }
        })
    }
}