$(document).ready(function(){
    var jss;
    var f="";
    var ls=["text","textarea","button","password","checkbox","radio","select","file","number","output","keygen"];
    $("#cr").click(function(){
    var name= prompt("Enter Form Name:");
        if (name!=null && name!=""){
            f=name;
             var c=$("#control");
            var fa=$("#form-area");
           c.empty();
            fa.empty();
        var form=$('<form action="vv" id='+name+'></form>');
            $(form).appendTo(fa);
            $(form).append($("<h1>"+name+"</h1>",{id:"header",value: name}));
            jss={"head":[{"id":"header","value": name}]};
            console.log(jss);
            $(form).append("<br>");
           $(form).append($("<input>",{id:"sub",value:"Submit",type:"submit"}))
         for(i=0;i<ls.length;i++){
         var d=document.createElement("button");
             d.setAttribute("id",ls[i]);
             d.innerHTML="Add "+ls[i]+" field";
             $(d).click({type: ls[i], parent: "#sub"},create);
             c.append(d);
             
         }   
        }
    });
 
function create(e){
    
    var ele= prompt("Enter "+e.data.type+" Name:");
    if (ele!=null && ele!=""){
//    docc.setAttribute("id",ele);
    if(["text","textarea","password","number"].indexOf(e.data.type)!=-1){
        $('<label>'+e.data.type+': </label>').insertBefore(e.data.parent);
     $('<input type="'+e.data.type+'" value="'+ele+'" id="'+ele+'">').insertBefore(e.data.parent);
//        $(e.data.parent).append("<br>");
    }
    else if(["checkbox","radio"].indexOf(e.data.type)!=-1){
     $('<label>'+ele+': </label>').insertBefore(e.data.parent);
     $('<input type="'+e.data.type+'" value="'+ele+'" id="'+ele+'">').insertBefore(e.data.parent);
    }
    else if(e.data.type==="keygen"){
        $('<label>'+e.data.type+': </label>').insertBefore(e.data.parent);
       $('<keygen id="'+ele+'" name="security">').insertBefore(e.data.parent); 
    }
    else if(e.data.type==="select"){
     $('<label>'+ele+': </label>').insertBefore(e.data.parent);
       $('<select id="'+ele+'"></select>').insertBefore(e.data.parent);
        $('<button id="'+ele+'b" value="options">Add Options</button>').insertBefore(e.data.parent);
        $("#"+ele+"b").click(function(e){
        e.preventDefault();
            var pro=prompt("Enter Option:");
            $("#"+ele).append('<option value='+pro+'>'+pro+'</option>');
        });
    }
        else if(e.data.type==="output"){
            $("").insertBefore()
        }
    else{
    $('<input type="'+e.data.type+'"  value="'+ele+'" id="'+ele+'">').insertBefore(e.data.parent);
        
    }
    
         $("<br>").insertBefore(e.data.parent);
        
    }
    else{
    alert("Empty Name Field Not Created");
    }
}
    
    
});