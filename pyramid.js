


var type = 2;
var rows = 50;
    var a = ''; 

    if (type===1){

        for(var i = 1; i<=rows; i++){
            for (var j=1; j<=i;j++){
            a += j + ' ';
        }
        console.log(a);
        a='';
   }
        
    }

if (type===2){

    for(var i = rows; i>=0; i--){
        for (var j=1; j<=i;j++){
        a += j + ' ';
    }
    console.log(a);
    a='';
}
    
}





