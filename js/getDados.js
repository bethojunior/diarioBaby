
function getAll(){
    $.ajax({
        url: "http://betho3.000webhostapp.com/mvc/dao/showAll.php",
        type: "POST",
        data: {},
        success: function(result){
            console.log(result);
            for(let i in result){
            }

        },error: function(result){
            console.log("error");
        }
    });
}