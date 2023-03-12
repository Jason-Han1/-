var blackJuimage = "/asset/get/s/data-1576055383730-yw87bo2L.jpg";
var blackMimage = "/asset/get/s/data-1576055391916-hRrZjCak.jpg";
var blackPimage = "/asset/get/s/data-1576055397138-MkZaxN0P.jpg";
var blackShiimage = "/asset/get/s/data-1576055401328-Nu1AOCC_.jpg";
var blackXimage = "/asset/get/s/data-1576055405517-cFV2PomZ.jpg";
var blackZimage = "/asset/get/s/data-1576055410277-VShVIAsy.jpg";
var redBimage = "/asset/get/s/data-1576055414269-8HhjCI8k.jpg";
var redMimage = "/asset/get/s/data-1576055418481-pM9V69MN.jpg";
var redPimage = "/asset/get/s/data-1576055422744-uYEoHpmm.jpg";
var redSimage = "/asset/get/s/data-1576055425912-sVVsyVyM.jpg";
var redShiimage = "/asset/get/s/data-1576055431575-UBEqXUH1.jpg";
var redXimage = "/asset/get/s/data-1576055434725-7GvfxDh5.jpg";
var blackJimage = "/asset/get/s/data-1576055321930-fB42iADN.jpg";
var qipan = "/asset/get/s/data-1576054841141-Ge_RYvPZ.jpg";
var redCimage = "/asset/get/s/data-1576054917502-CtKE_uSn.jpg";


document.getElementById('chart-panel').innerHTML="<div id='echarts1' style='width: 500px;height: 667px; background: url("+qipan+") no-repeat 0% 50%;float: left'></div><div id='show' style='width: 300px;height: 667px; float: left;padding-left: 20px;background-color: #ffffff;'><div style='width: 100px;height: 100px;padding-top: 200px;'>        <img id='selectQ' src='"+redCimage+"' width='100px' height='99px'></div><div style='width: 100px;height: 10px;text-align: center;padding-top: 20px;'><span id='playerName'>红方</span></div><div style='width: 100px;height: 10px;text-align: center;padding-top: 20px;'><span id='message'></span></div></div>";

var myChart1 = echarts.init(document.getElementById('echarts1'));
    var zuobiao= [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],
                [0,2],[2,2],[3,2],[4,2],[5,2],[6,2],[8,2],
                [1,3],[3,3],[5,3],[7,3],
                [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],
                [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],
                [1,6],[3,6],[5,6],[7,6],
                [0,7],[2,7],[3,7],[4,7],[5,7],[6,7],[8,7],
                [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8]
                ];
    var blackJu= [[0,0],[8,0]];//黑棋-車
    var blackM=[[1,0],[7,0]];//黑棋-马
    var blackX=[[2,0],[6,0]];//黑棋-象
    var blackShi=[[3,0],[5,0]];//黑棋-士
    var blackJ=[[4,0]];//黑棋-将
    var blackP=[[1,2],[7,2]];//黑棋-炮
    var blackZ=[[0,3],[2,3],[4,3],[6,3],[8,3]];//黑棋-卒
    var redC= [[0,9],[8,9]];//红棋-车
    var redM=[[1,9],[7,9]];//红棋-马
    var redX=[[2,9],[6,9]];//红棋-象
    var redShi=[[3,9],[5,9]];//红棋-士
    var redS=[[4,9]];//红棋-帅
    var redP=[[1,7],[7,7]];//红棋-兵
    var redB=[[0,6],[2,6],[4,6],[6,6],[8,6]];//红棋-卒
    var moveBefore=[0,0];//移动前棋子位置数据
    var oldReturnValues;//上一个棋子的数据
    var selectStatus=0;//是否选中棋子
    var qiziType;//棋子类型
    var player=1;//棋手 1--红方；2--黑方
    echars1();
    function echars1(){
        var option = {
           /* backgroundColor: 'rgba(175,153,124,1)',*/
            grid: {
                top:'17%',
                left: '2.5%',
                bottom: '9.7%',
                right: '10%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    myTool1: {
                        show: true,
                        title: '重新开始',
                        icon: 'path://M940.032 623.104c-9.728 0-18.432 3.584-25.088 9.728-5.12 4.096-8.704 9.728-11.264 16.384-58.368 166.4-215.552 278.016-391.68 278.016s-333.312-111.616-391.68-277.504c-7.168-18.432-27.136-27.648-46.08-22.016-19.968 6.144-31.232 27.136-25.088 47.104 69.12 196.608 254.464 328.192 462.848 328.192 156.16 0 299.52-73.728 390.656-193.536v2.56c0 20.992 16.896 37.888 37.888 37.888 20.992 0 37.888-16.896 37.888-37.888V660.48c-0.512-20.48-17.408-37.376-38.4-37.376zM83.968 402.432c16.384 0 30.208-10.752 35.328-25.088v-0.512C161.28 256 256.512 160.768 377.344 119.296c216.576-74.24 452.608 40.96 527.36 257.536 5.12 15.36 19.456 25.6 35.84 25.6 4.096 0 8.192-0.512 12.288-2.048 19.456-6.656 30.208-28.16 23.04-48.128C926.72 209.92 814.592 97.28 671.232 48.128 465.92-22.528 246.272 51.2 121.344 215.04v-1.024c0-20.992-16.896-37.888-37.888-37.888S46.08 193.024 46.08 214.016v151.04c0 20.48 16.896 37.376 37.888 37.376z',
                        onclick: function () {
                            refresh();
                        }
                    },
                }
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 8,
                minInterval: 1,
                maxInterval: 1,
                axisTick: {
                    show : false
                },
                axisLabel: {
                    show:true,
                    margin: 35,
                    color:"rgba(188,159,253,1)"
                },
                axisLine: {
                    show:true
                },
                splitLine:{
                    show : true
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 9,
                minInterval: 1,
                maxInterval: 1,
                axisTick: {
                    show : false
                },
                axisLabel: {
                    show:true,
                    margin: 35,
                    color:"rgba(188,159,253,1)"
                },
                axisLine: {
                    show:true
                },
                splitLine:{
                    show : true
                }
            },
            series: [
                {
                    type: 'scatter',
                    itemStyle:
                        {
                            color:"rgba(188,159,253,0)"
                        },
                    symbolSize: 30,
                    data: zuobiao

                },
                {
                    name:'黑車',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055383730-yw87bo2L.jpg',
                    symbolSize: 40,
                    data: blackJu
                },
                {
                    name:'黑马',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055391916-hRrZjCak.jpg',
                    symbolSize: 40,
                    data: blackM
                },
                {
                    name:'黑象',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055405517-cFV2PomZ.jpg',
                    symbolSize: 40,
                    data:blackX
                },
                {
                    name:'黑士',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055401328-Nu1AOCC_.jpg',
                    symbolSize: 40,
                    data:blackShi
                },
                {
                    name:'黑将',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055321930-fB42iADN.jpg',
                    symbolSize: 40,
                    data:blackJ
                },
                {
                    name:'黑炮',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055397138-MkZaxN0P.jpg',
                    symbolSize: 40,
                    data:blackP
                },
                {
                    name:'黑卒',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055410277-VShVIAsy.jpg',
                    symbolSize: 40,
                    data:blackZ
                },
                {
                    name:'红车',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576054917502-CtKE_uSn.jpg',
                    symbolSize: 40,
                    data: redC
                },
                {
                    name:'红马',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055418481-pM9V69MN.jpg',
                    symbolSize: 40,
                    data: redM
                },
                {
                    name:'红象',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055434725-7GvfxDh5.jpg',
                    symbolSize: 40,
                    data:redX
                },
                {
                    name:'红士',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055431575-UBEqXUH1.jpg',
                    symbolSize: 40,
                    data:redShi
                },
                {
                    name:'红帅',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055425912-sVVsyVyM.jpg',
                    symbolSize: 40,
                    data:redS
                },
                {
                    name:'红炮',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055422744-uYEoHpmm.jpg',
                    symbolSize: 40,
                    data:redP
                },
                {
                    name:'红兵',
                    type: 'scatter',
                    animation: false,
                    symbol:'image://./asset/get/s/data-1576055414269-8HhjCI8k.jpg',
                    symbolSize: 40,
                    data:redB
                }
            ]
        };
        myChart1.setOption(option);
        myChart1.on('click', function (params){
             var returns=winORlose();
            if(returns){
                echarts1Clik(params.data);
            }
        })
    }

    function echarts1Clik(data) {
        var returnValue=seekQ(data);
        var returnValues = returnValue.split("-");
        if(1==selectStatus){
            if(1==player){
                if("r"==returnValues[0]){
                   if("C"==returnValues[1]){
                       document.getElementById("selectQ").src=redCimage
                    }else if("M"==returnValues[1]){
                       document.getElementById("selectQ").src=redMimage
                    }else if("X"==returnValues[1]){
                       document.getElementById("selectQ").src=redXimage
                    }else if("Shi"==returnValues[1]){
                       document.getElementById("selectQ").src=redShiimage;
                    }else if("S"==returnValues[1]){
                       document.getElementById("selectQ").src=redSimage;
                    }else if("P"==returnValues[1]){
                       document.getElementById("selectQ").src=redPimage;
                    }else if("B"==returnValues[1]){
                       document.getElementById("selectQ").src=redBimage;
                    }
                    selectStatus=1;
                    moveBefore=data;
                    oldReturnValues=returnValues;
                    qiziType=returnValues[1];
                }else{
                    var booleans=moveRule(qiziType,moveBefore,data,returnValue);
                    if(booleans){
                        moveQizi(oldReturnValues[0],oldReturnValues[1],oldReturnValues[2],moveBefore,data);
                        player=2;
                        selectStatus=0;
                        document.getElementById("message").innerHTML="红方执棋完毕";
                        document.getElementById("playerName").innerHTML="黑方";
                        if(returnValue!=-1){
                            deleteQizi(returnValues[0],returnValues[1],returnValues[2],data);
                        }
                        myChart1.setOption({series:[{data: zuobiao},{data: blackJu},{data: blackM},{data:blackX},{data:blackShi },{data:blackJ},{data:blackP},{data:blackZ},{data: redC},{data: redM},{data:redX},{data:redShi},{data:redS},{data:redP},{ data:redB}]})
                    }else{
                        document.getElementById("message").innerHTML="棋子到不了指定位置";
                    }
                }
            }else if(2==player){
                if("b"==returnValues[0]){
                    if("Ju"==returnValues[1]){
                         document.getElementById("selectQ").src=blackJuimage;
                    }else if("M"==returnValues[1]){
                         document.getElementById("selectQ").src=blackMimage;
                    }else if("X"==returnValues[1]){
                         document.getElementById("selectQ").src=blackXimage;
                    }else if("Shi"==returnValues[1]){
        		        document.getElementById("selectQ").src=blackShiimage;
                    }else if("J"==returnValues[1]){
                         document.getElementById("selectQ").src=blackJimage;
                    }else if("P"==returnValues[1]){
                        document.getElementById("selectQ").src=blackPimage;
                    }else if("Z"==returnValues[1]){
                        document.getElementById("selectQ").src=blackZimage;
                    }
                    selectStatus=1;
                    moveBefore=data;
                    oldReturnValues=returnValues;
                    qiziType=returnValues[1];
                }else{
                    var booleans=moveRule(qiziType,moveBefore,data,returnValue);
                    if(booleans){
                        moveQizi(oldReturnValues[0],oldReturnValues[1],oldReturnValues[2],moveBefore,data);
                        player=1;
                        selectStatus=0;
                        document.getElementById("message").innerHTML="黑方执棋完毕";
                        document.getElementById("playerName").innerHTML="红方";
                        if(returnValue!=-1){
                            deleteQizi(returnValues[0],returnValues[1],returnValues[2],data);
                        }
                        myChart1.setOption({series:[{data: zuobiao},{data: blackJu},{data: blackM},{data:blackX},{data:blackShi },{data:blackJ},{data:blackP},{data:blackZ},{data: redC},{data: redM},{data:redX},{data:redShi},{data:redS},{data:redP},{ data:redB}]})
                        
                    }else{
                        document.getElementById("message").innerHTML="棋子到不了指定位置";
                    }
                }
            }
        }else if(0==selectStatus){
            if(1==player){
                if("r"==returnValues[0]){
                    if("C"==returnValues[1]){
                       document.getElementById("selectQ").src=redCimage;
                    }else if("M"==returnValues[1]){
                       document.getElementById("selectQ").src=redMimage;
                    }else if("X"==returnValues[1]){
                       document.getElementById("selectQ").src=redXimage;
                    }else if("Shi"==returnValues[1]){
                       document.getElementById("selectQ").src=redShiimage;
                    }else if("S"==returnValues[1]){
                       document.getElementById("selectQ").src=redSimage;
                    }else if("P"==returnValues[1]){
                       document.getElementById("selectQ").src=redPimage;
                    }else if("B"==returnValues[1]){
                       document.getElementById("selectQ").src=redBimage;
                    }
                    selectStatus=1;
                    moveBefore=data;
                    oldReturnValues=returnValues;
                    qiziType=returnValues[1];
                }else{
                    document.getElementById("message").innerHTML="请选择棋子";
                }
            }else if(2==player){
                if("b"==returnValues[0]){
                    if("Ju"==returnValues[1]){
                         document.getElementById("selectQ").src=blackJuimage;
                    }else if("M"==returnValues[1]){
                         document.getElementById("selectQ").src=blackMimage;
                    }else if("X"==returnValues[1]){
                         document.getElementById("selectQ").src=blackXimage;
                    }else if("Shi"==returnValues[1]){
        		        document.getElementById("selectQ").src=blackShiimage;
                    }else if("J"==returnValues[1]){
                         document.getElementById("selectQ").src=blackJimage;
                    }else if("P"==returnValues[1]){
                        document.getElementById("selectQ").src=blackPimage;
                    }else if("Z"==returnValues[1]){
                        document.getElementById("selectQ").src=blackZimage;
                    }
                    selectStatus=1;
                    moveBefore=data;
                    oldReturnValues=returnValues;
                    qiziType=returnValues[1];
                }else{
                    document.getElementById("message").innerHTML="请选择棋子";
                }
            }
        }
    }

    function deleteArray(data) {
        var index = indexOf(data);
        if (index > -1) {
            zuobiao.splice(index, 1);
            return 1;
        }else{
            return index;
        }

    }
    function seekQ(data) {
        var returnValue='-1';
        for (var i = 0; i < blackJu.length; i++) {
            if (blackJu[i].toString() == data.toString()) {
                returnValue = 'b-Ju-'+i;
            }
        }
        for (var i = 0; i < blackM.length; i++) {
            if (blackM[i].toString() == data.toString()) {
                returnValue = 'b-M-'+i;
            }
        }
        for (var i = 0; i < blackX.length; i++) {
            if (blackX[i].toString() == data.toString()) {
                returnValue = 'b-X-'+i;
            }
        }
        for (var i = 0; i < blackShi.length; i++) {
            if (blackShi[i].toString() == data.toString()) {
                returnValue = 'b-Shi-'+i;
            }
        }
        for (var i = 0; i < blackJ.length; i++) {
            if (blackJ[i].toString() == data.toString()) {
                returnValue = 'b-J-'+i;
            }
        }
        for (var i = 0; i < blackP.length; i++) {
            if (blackP[i].toString() == data.toString()) {
                returnValue = 'b-P-'+i;
            }
        }
        for (var i = 0; i < blackZ.length; i++) {
            if (blackZ[i].toString() == data.toString()) {
                returnValue = 'b-Z-'+i;
            }
        }
        for (var i = 0; i < redC.length; i++) {
            if (redC[i].toString() == data.toString()) {
                returnValue = 'r-C-'+i;
            }
        }
        for (var i = 0; i < redM.length; i++) {
            if (redM[i].toString() == data.toString()) {
                returnValue = 'r-M-'+i;
            }
        }
        for (var i = 0; i < redX.length; i++) {
            if (redX[i].toString() == data.toString()) {
                returnValue = 'r-X-'+i;
            }
        }
        for (var i = 0; i < redShi.length; i++) {
            if (redShi[i].toString() == data.toString()) {
                returnValue = 'r-Shi-'+i;
            }
        }
        for (var i = 0; i < redS.length; i++) {
            if (redS[i].toString() == data.toString()) {
                returnValue = 'r-S-'+i;
            }
        }
        for (var i = 0; i < redP.length; i++) {
            if (redP[i].toString() == data.toString()) {
                returnValue = 'r-P-'+i;
            }
        }
        for (var i = 0; i < redB.length; i++) {
            if (redB[i].toString() == data.toString()) {
                returnValue = 'r-B-'+i;
            }
        }
        return returnValue;
    }
    function indexOf(data) {
        for (var i = 0; i < zuobiao.length; i++) {
            if (zuobiao[i].toString() == data.toString()) {
                return i;
            }
        }
        return -1;
    }
    function moveRule(type,moveBefore,moveAfter,returnValue) {
        if("Ju"==type || "C"==type){
            if(moveBefore[0]==moveAfter[0]){
                var juX=new Array();
                for (var i =0; i < zuobiao.length; i++) {
                    var zuodiaoD=zuobiao[i];
                    if(parseInt(moveBefore[1])-parseInt(moveAfter[1])>0){
                        if (zuodiaoD[0] == moveBefore[0] && zuodiaoD[1]<parseInt(moveBefore[1])&& zuodiaoD[1]>=parseInt(moveAfter[1])) {
                            juX.push(zuodiaoD)
                        }
                    }else{
                        if (zuodiaoD[0] == moveBefore[0] && zuodiaoD[1]>parseInt(moveBefore[1])&& zuodiaoD[1]<=parseInt(moveAfter[1])) {
                            juX.push(zuodiaoD)
                        }
                    }
                }
                var num=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
                var juXlength;
                if(returnValue==-1){
                    juXlength=juX.length
                }else {
                    juXlength=juX.length+1;
                }
                if(num==juXlength){
                    return true;
                }else {
                    return false;
                }
            }else if(moveBefore[1]==moveAfter[1]){
                var juY=new Array();
                for (var i =0; i < zuobiao.length; i++) {
                    var zuodiaoD=zuobiao[i];
                    if(parseInt(moveBefore[0])-parseInt(moveAfter[0])>0){
                        if (zuodiaoD[1] == moveAfter[1] && zuodiaoD[0]<parseInt(moveBefore[0])&& zuodiaoD[0]>=parseInt(moveAfter[0])) {
                            juY.push(zuodiaoD)
                        }
                    }else{
                        if (zuodiaoD[1] == moveAfter[1] && zuodiaoD[0]>parseInt(moveBefore[0])&& zuodiaoD[0]<=parseInt(moveAfter[0])) {
                            juY.push(zuodiaoD)
                        }
                    }
                }
                var num=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
                var juYlength;
                if(returnValue==-1){
                    juYlength=juY.length
                }else {
                    juYlength=juY.length+1;
                }
                if(num==juYlength){
                    return true;
                }else {
                    return false;
                }
            }else{
                return false;
            }
        }
        if("M"==type){
            var x=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
            var y=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
            if(x==1 && y==2){
                if(parseInt(moveBefore[1])-parseInt(moveAfter[1])>0){
                    var moveindes= moveinde(moveBefore[0],parseInt(moveBefore[1])-1);
                    if(moveindes>-1){
                        return true;
                    }else {
                        return false;
                    }
                }else{
                    var moveindes= moveinde(moveBefore[0],parseInt(moveBefore[1])+1);
                    if(moveindes>-1){
                        return true;
                    }else {
                        return false;
                    }
                }
            }else if(x==2 && y==1){
                if(parseInt(moveBefore[0])-parseInt(moveAfter[0])>0){
                    var moveindes= moveinde(parseInt(moveBefore[0])-1,moveBefore[1]);
                    if(moveindes>-1){
                        return true;
                    }else {
                        return false;
                    }
                }else{
                    var moveindes= moveinde(parseInt(moveBefore[0])+1,moveBefore[1]);
                    if(moveindes>-1){
                        return true;
                    }else {
                        return false;
                    }
                }
            }else{
                return false;
            }
        }
        if("X"==type){
            var x=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
            var y=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
            if(x==2 && y==2){
                if((moveBefore[1]<=4 && moveAfter[1]<=4) || (moveBefore[1]>4 && moveAfter[1]>4)){
                    if(parseInt(moveBefore[0])-parseInt(moveAfter[0])>0 && parseInt(moveBefore[1])-parseInt(moveAfter[1])>0){
                        var moveindes= moveinde(parseInt(moveBefore[0])-1,parseInt(moveBefore[1])-1);
                        if(moveindes>-1){
                            return true;
                        }else {
                            return false;
                        }
                    }else if(parseInt(moveBefore[0])-parseInt(moveAfter[0])>0 && parseInt(moveBefore[1])-parseInt(moveAfter[1])<0){
                        var moveindes= moveinde(parseInt(moveBefore[0])-1,parseInt(moveBefore[1])+1);
                        if(moveindes>-1){
                            return true;
                        }else {
                            return false;
                        }
                    }else if(parseInt(moveBefore[0])-parseInt(moveAfter[0])<0 && parseInt(moveBefore[1])-parseInt(moveAfter[1])>0){
                        var moveindes= moveinde(parseInt(moveBefore[0])+1,parseInt(moveBefore[1])-1);
                        if(moveindes>-1){
                            return true;
                        }else {
                            return false;
                        }
                    }else if(parseInt(moveBefore[0])-parseInt(moveAfter[0])<0 && parseInt(moveBefore[1])-parseInt(moveAfter[1])<0){
                        var moveindes= moveinde(parseInt(moveBefore[0])+1,parseInt(moveBefore[1])+1);
                        if(moveindes>-1){
                            return true;
                        }else {
                            return false;
                        }
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
        if("Shi"==type){
            var x=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
            var y=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
            if(x==1 && y==1){
                if(moveAfter[0]>2 && moveAfter[0]<6){
                    if((moveAfter[1]>=0 && moveAfter[1]<3) || (moveAfter[1]<=9 && moveAfter[1]>6)){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
        if("J"==type || "S"==type){
            var x=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
            var y=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
            var returnValues = returnValue.split("-");
            if("J"==returnValues[1] || "S"==returnValues[1]){
                var JSsz=new Array();
                if(moveBefore[0]==moveAfter[0]){
                    for (var i =0; i < zuobiao.length; i++) {
                        var zuodiaoD=zuobiao[i];
                        if(parseInt(moveBefore[1])>parseInt(moveAfter[1])){
                            if(zuodiaoD[0] == moveBefore[0] && zuodiaoD[1]>moveAfter[1] && zuodiaoD[1]<moveBefore[1]){
                                JSsz.push(zuodiaoD)
                            }
                        }else{
                            if(parseInt(moveBefore[1])<parseInt(moveAfter[1])){
                                if(zuodiaoD[0] == moveBefore[0] && zuodiaoD[1]>moveBefore[1] && zuodiaoD[1]<moveAfter[1]){
                                    JSsz.push(zuodiaoD)
                                }
                            }
                        }
                    }
                    if(y-JSsz.length==1){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                if((x==1 && y==0) || (x==0 && y==1)){
                    if(moveAfter[0]>2 && moveAfter[0]<6){
                        if((moveAfter[1]>=0 && moveAfter[1]<3) || (moveAfter[1]<=9 && moveAfter[1]>6)){
                            return true;
                        }else{
                            return false;
                        }
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }
        }
        if("P"==type){
            if(moveBefore[0]==moveAfter[0]){
                var juX=new Array();
                for (var i =0; i < zuobiao.length; i++) {
                    var zuodiaoD=zuobiao[i];
                    if(parseInt(moveBefore[1])-parseInt(moveAfter[1])>0){
                        if (zuodiaoD[0] == moveBefore[0] && zuodiaoD[1]<parseInt(moveBefore[1])&& zuodiaoD[1]>=parseInt(moveAfter[1])) {
                            juX.push(zuodiaoD)
                        }
                    }else{
                        if (zuodiaoD[0] == moveBefore[0] && zuodiaoD[1]>parseInt(moveBefore[1])&& zuodiaoD[1]<=parseInt(moveAfter[1])) {
                            juX.push(zuodiaoD)
                        }
                    }
                }
                var num=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
                var juXlength;
                if(returnValue==-1){
                    juXlength=juX.length
                }else {
                    juXlength=juX.length+2;
                }
                if(num==juXlength){
                    return true;
                }else {
                    return false;
                }
            }else if(moveBefore[1]==moveAfter[1]){
                var juY=new Array();
                for (var i =0; i < zuobiao.length; i++) {
                    var zuodiaoD=zuobiao[i];
                    if(parseInt(moveBefore[0])-parseInt(moveAfter[0])>0){
                        if (zuodiaoD[1] == moveAfter[1] && zuodiaoD[0]<parseInt(moveBefore[0])&& zuodiaoD[0]>=parseInt(moveAfter[0])) {
                            juY.push(zuodiaoD)
                        }
                    }else{
                        if (zuodiaoD[1] == moveAfter[1] && zuodiaoD[0]>parseInt(moveBefore[0])&& zuodiaoD[0]<=parseInt(moveAfter[0])) {
                            juY.push(zuodiaoD)
                        }
                    }
                }
                var num=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
                var juYlength;
                if(returnValue==-1){
                    juYlength=juY.length
                }else {
                    juYlength=juY.length+2;
                }
                if(num==juYlength){
                    return true;
                }else {
                    return false;
                }
            }else{
                return false;
            }
        }
        if("Z"==type || "B"==type){
            var x=Math.abs(parseInt(moveBefore[0])-parseInt(moveAfter[0]));
            var y=Math.abs(parseInt(moveBefore[1])-parseInt(moveAfter[1]));
            var moveBeforeValue=seekQ(moveBefore);
            var moveBeforeValues=moveBeforeValue.split("-");
            if("r"==moveBeforeValues[0]){
                if(moveBefore[1]>4 && parseInt(moveBefore[1])-parseInt(moveAfter[1])==1 && x==0){
                    return true;
                }else if(moveBefore[1]<5 && ((parseInt(moveBefore[1])-parseInt(moveAfter[1])==1 && x==0)|| (x==1 && y==0))){
                    return true;
                }else{
                    return false;
                }
            }else{
                if(moveBefore[1]<5 && parseInt(moveAfter[1])-parseInt(moveBefore[1])==1 && x==0){
                    return true;
                }else if(moveBefore[1]>4 && ((parseInt(moveAfter[1])-parseInt(moveBefore[1])==1 && x==0)|| (x==1 && y==0))){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
    function moveinde(one,two) {
        for (var i = 0; i < zuobiao.length; i++) {
            var zuobiaoD=zuobiao[i];
            if (zuobiaoD[0] == one && zuobiaoD[1] == two) {
                return i;
            }
        }
        return -1;
    }
    function moveQizi(BOrR,type,index,moveBefore,moveAfter) {
       var indexs;
        if("b"==BOrR){
            if("Ju"==type){
                blackJu.splice(index, 1,moveAfter);
            }else if("M"==type){
                blackM.splice(index, 1,moveAfter);
            }else if("X"==type){
                blackX.splice(index, 1,moveAfter);
            }else if("Shi"==type){
                blackShi.splice(index, 1,moveAfter);
            }else if("J"==type){
                blackJ.splice(index, 1,moveAfter);
            }else if("P"==type){
                blackP.splice(index, 1,moveAfter);
            }else if("Z"==type){
                blackZ.splice(index, 1,moveAfter);
            }
        }
       if("r"==BOrR){
            if("C"==type){
                redC.splice(index, 1,moveAfter);
            }else if("M"==type){
                redM.splice(index, 1,moveAfter);
            }else if("X"==type){
                redX.splice(index, 1,moveAfter);
            }else if("Shi"==type){
                redShi.splice(index, 1,moveAfter);
            }else if("S"==type){
                redS.splice(index, 1,moveAfter);
            }else if("P"==type){
                redP.splice(index, 1,moveAfter);
            }else if("B"==type){
                redB.splice(index, 1,moveAfter);
            }
        }
        for (var i = 0; i < zuobiao.length; i++) {
            if (zuobiao[i].toString() == moveAfter.toString()) {
                indexs=i;
            }
        }
        zuobiao.splice(indexs, 1,moveBefore);
    }
    function deleteQizi(BOrR,type,index,data) {
        if("b"==BOrR){
            if("Ju"==type){
                blackJu.splice(index, 1);
            }else if("M"==type){
                blackM.splice(index, 1);
            }else if("X"==type){
                blackX.splice(index, 1);
            }else if("Shi"==type){
                blackShi.splice(index, 1);
            }else if("J"==type){
                blackJ.splice(index, 1);
                winORlose();
            }else if("P"==type){
                blackP.splice(index, 1);
            }else if("Z"==type){
                blackZ.splice(index, 1);
            }
        }
        if("r"==BOrR){
            if("C"==type){
                redC.splice(index, 1);
            }else if("M"==type){
                redM.splice(index, 1);
            }else if("X"==type){
                redX.splice(index, 1);
            }else if("Shi"==type){
                redShi.splice(index, 1);
            }else if("S"==type){
                redS.splice(index, 1);
                winORlose();
            }else if("P"==type){
                redP.splice(index, 1);
            }else if("B"==type){
                redB.splice(index, 1);
            }
        }
        zuobiao.push(data);
    }
     function winORlose() {
        var returns=true;
        if(redS.length==0){
            alert("黑方获胜");
            returns=false;
        }
        if(blackJ.length==0){
            alert("红方获胜");
            returns=false;
        }
        if(!returns){
            if(confirm("是否开始新一局")){
                refresh();
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
    function refresh(){
        zuobiao= [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],
            [0,2],[2,2],[3,2],[4,2],[5,2],[6,2],[8,2],
            [1,3],[3,3],[5,3],[7,3],
            [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],
            [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],
            [1,6],[3,6],[5,6],[7,6],
            [0,7],[2,7],[3,7],[4,7],[5,7],[6,7],[8,7],
            [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8]
        ];
        blackJu= [[0,0],[8,0]];//黑棋-車
        blackM=[[1,0],[7,0]];//黑棋-马
        blackX=[[2,0],[6,0]];//黑棋-象
        blackShi=[[3,0],[5,0]];//黑棋-士
        blackJ=[[4,0]];//黑棋-将
        blackP=[[1,2],[7,2]];//黑棋-炮
        blackZ=[[0,3],[2,3],[4,3],[6,3],[8,3]];//黑棋-卒
        redC= [[0,9],[8,9]];//红棋-车
        redM=[[1,9],[7,9]];//红棋-马
        redX=[[2,9],[6,9]];//红棋-象
        redShi=[[3,9],[5,9]];//红棋-士
        redS=[[4,9]];//红棋-帅
        redP=[[1,7],[7,7]];//红棋-兵
        redB=[[0,6],[2,6],[4,6],[6,6],[8,6]];//红棋-卒
        player=1;
        selectStatus=0;
        document.getElementById("message").innerHTML=" ";
        document.getElementById("playerName").innerHTML="红方";
        myChart1.setOption({series:[{data: zuobiao},{data: blackJu},{data: blackM},{data:blackX},{data:blackShi },{data:blackJ},{data:blackP},{data:blackZ},{data: redC},{data: redM},{data:redX},{data:redShi},{data:redS},{data:redP},{ data:redB}]})

    }