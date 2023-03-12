$('#chart-panel div').append('<canvas id="canvas" width="1000" height="600"></canvas>')

 var ocanvas = document.getElementById("canvas");  
    var mycanvas = ocanvas.getContext("2d");  
    var arr = [60,90,150,130,170,190,125,175,155,165,155,145];  
  
    //第一先定义一个画线的函数方法    画两条线  
    function line(aX,aY,bX,bY) {//开始和结束的横坐标  开始和结束的纵坐标  
        mycanvas.beginPath();  
        mycanvas.moveTo(aX,aY);  
        mycanvas.lineTo(bX,bY);  
        mycanvas.stroke();  
    }  
    line(300,80,300,480);  
    line(900,80,900,480);  
  
    //第二用for循环 画11条线   利用上面line的画线方法  
    for(var i=0;i<11;i++){  
       //300,80,900,80  
        //300,120,900,120  
       line(300,80+i*40,900,80+i*40);  
        write(200-i*20,280,80+i*40)  
  
    }  
    //第三定义一个矩形的函数方法  
    function rect(X,Y,width,height) {  
        mycanvas.beginPath();  
        mycanvas.fillStyle="#abcdef";  
        mycanvas.rect(X,Y,width,height);  
        mycanvas.fill();  
        mycanvas.closePath()  
    }  
  
    //第四定义一个方法  定义矩形的具体变量以及高引入数组  
    function wenrect() {  
        for(var i=0;i<12;i++){  
            var width=30;  
            var height=arr[i]*2;  
            var X=310+i*40+i*10;  
            var Y=480-height;  
            rect(X,Y,width,height);  
            write((i+1)+"月",320+i*40+i*10,500)  
            label(arr[i],320+i*40+i*10,Y+10)  
        }  
    }  
    wenrect();  
  
    //添加字  
    function write(start,ox,oy) {  
        mycanvas.beginPath();  
        mycanvas.fillStyle = "black";  
        mycanvas.fillText(start,ox,oy);  
        mycanvas.closePath();  
    }  
    // 添加label
    function label(start,ox,oy) {  
        mycanvas.beginPath();  
        mycanvas.fillStyle = "black";  
        mycanvas.fillText(start,ox,oy);  
        mycanvas.closePath();  
    } 