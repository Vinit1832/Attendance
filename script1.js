function verify(){
    
    var timeout = 3000;
    for(var i=1; i<=9;i+=2){
        var image1=document.getElementById("img"+i);
        var image2=document.getElementById("img"+(i+1));
        setTimeout(change,timeout,image1,image2);
        timeout+=500;

    }
    
    function change(image1, image2){
       image1.style.display="none";
       image2.style.display="block";
}
}
    
    