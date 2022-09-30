function turn(){
    if("file:///C:/Users/toko/Desktop/digital%20industry/%E1%83%93%E1%83%90%E1%83%95%E1%83%90%E1%83%9A%E1%83%94%E1%83%91%E1%83%90%2010/images/off.png"==document.getElementById("bulb").src){
        document.getElementById("bulb").src="images/on.png";
    }else{
        document.getElementById("bulb").src="images/off.png"
    }
    
    
}
function change(){
    if(document.getElementById("button").innerHTML=="ON"){
        document.getElementById("button").innerHTML="OFF";
    }else{
        document.getElementById("button").innerHTML="ON";
    }
}