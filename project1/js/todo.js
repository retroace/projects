
//  var data = new Array()

// function getUserTodo(){
 
//     var title = document.getElementById('title');
//     var content = document.getElementById('content');
    
//     var listItem = {
//         title: title.value,
//         content: content.value,
//         status: false,
//         completed_date: null 
//     };

//     title.value = '';
//     content.value='';

//     return listItem;
// }

// document.querySelector('[type="button"]').addEventListener('click',function(e){
//     var newtodo = getUserTodo();
//     data.push(newtodo)
//     //console.log(data)
//     var  getlist = document.getElementById("todo-item")
//     var li = document.createElement("li")
//     li.innerHTML=(generateTodo(newtodo))
//     getlist.appendChild(li)
// })


// function generateTodo(todo)
// {
//     console.log("eta",todo)
// 	return "\n<div class=\"card\"><div class=\"card-header d-flex justify-content-between\"><p>".concat(todo.title, "</p><span class='close'>x</span></div><div class=\"card-body\">").concat(todo.content, "<div class=\"form-roup\"><label>Checkbox</label><input type=\"checkbox\" ").concat(todo.status ? 'checked' : '', " name=\"completed\"></div></div></div>");
// }


function frontpyramid(num){
    var p="";
    var i =1;
    // for(i=1;i<=num;i++){
    //         p = p + " "+i;
    //        console.log(p)
    //    }

    //    do {
    //     p = p + " "+i;
    //     console.log(p)
    //     i++
    //    } while (i<=num);


       while(i<=num){
        p = p + " "+i;
        console.log(p)
        i++ 
       }
}

function backPyramid(num){ 
   
    for(i=num;i>=1;i--){
        var p=""
           for(j=1;j<=i;j++){
            var p = p +j
            //console.log(p)
           }console.log(p)
       }
}

function leftAstricPyramid(num){
    for(i=0;i<=num;i++){
     let p = '';
        for(j=0;j<=i;j++){
            p += '*';
        }
        console.log(p)
    }

    
}

function middlePyramid(rows){

    for(let i = 0; i <= rows; i++){
        let str = '';
        for(let j=0;j<rows-i; j++){
            str+=' '  
        }
        for(let k=0;k<=i;k++){
            str+='* ' 
            
        }console.log(str)
       
    }
}

function getFormat(){
    var number = document.getElementById("value").value;
    var getType = document.getElementById("type").value;
   if(getType == "1"){
       frontpyramid(number);
       leftAstricPyramid(number)
      //middlePyramid(number)
   }else if(getType == "2"){
       backPyramid(number);
   }else{
    alert("Choose Type must be 1 or 2")
   }
   alert('please look in console for result. Type 1 print leftpryamid while type 2 print right pyramid')
}





