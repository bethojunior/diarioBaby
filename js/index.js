
if(document.getElementById("btnLogar") != null){
    document.getElementById("btnLogar").onclick = function(){
        document.getElementById("load").src = "img/load.gif";
        document.getElementById("divLogin").style.display = "none";
        var login = document.getElementById("login").value;
        var pass = document.getElementById("pass").value;
        if( login && pass != ''){
            $.ajax({
                url: "http://betho3.000webhostapp.com/mvc/controller/login.php",
                type: "GET",
                data: {"login" : login , "pass" : pass},
                success : function(result){
                    let dados = JSON.parse(result);
                    if(dados != null){
                        localStorage.setItem("usuario", result);
                        window.location.href = "views/index.html";  
                    } else {
                        document.getElementById("load").src = "";
                        navigator.vibrate([300 , 300 , 200 , 100]);
                        function erroLogin() {
                            location.reload();
                        }
                        
                        navigator.notification.alert(
                            'Usurario ou senha inválidos', 
                            erroLogin,        
                            'Erro',                     
                            'OK'                 
                        );
                    }
                }
            });
        } else {
            navigator.vibrate([300 , 300 , 200 , 100]);
            function erro() {
                location.reload();
            }
            
            navigator.notification.alert(
                'Preencha todos os campos', 
                erro,        
                'Erro',                     
                'OK'                 
            );
        }

    }
}
