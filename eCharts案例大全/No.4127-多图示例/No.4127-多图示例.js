   function formatTime(shijianchuo){
        var date = new Date(shijianchuo);
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        if (hours >= 0 && hours <= 9) {
          hours = "0" + hours;
        }
        if (minutes >= 0 && minutes <= 9) {
          minutes = "0" + minutes;
        }
        if (second >= 0 && second <= 9) {
          second = "0" + second;
        }
        var currentdate = hours + seperator2 + minutes;
        return currentdate;
    };
    
    function formatY(v){
        let str;
        if(v == "1"){
            str = "一级";
        }else if(v == "2"){
            str = "二级";
        }else if(v == "3"){
            str = "三级";
        }else if(v == "4"){
            str = "四级";
        }else if(v == "5"){
            str = "五级";
        }else{
            str = "开始";
        }
        return str;
        // return 1;
    }
    var datax = ["10:00","10:05","10:10","10:15","10:20","10:25","10:30","10:35","10:40","10:45",
    "10:50"];
    var startTime = "1611715974";    //开始时间
    var statusStr = "饱满,无,一般|饱满,无,较好|较好,明显,一般|饱满,无,较好|饱满,无,一般|饱满,无,一般|饱满,无,正常|饱满,无,较好|饱满,无,很好|饱满,无,差|较好,轻微,差|较好,有,差|较好,隐性,一般|饱满,无,很好|饱满,无,差|饱满,无,很好|中等,轻微,一般|饱满,无,一般|饱满,无,一般|中等,轻微,差|饱满,无,较好|饱满,无,差|饱满,无,一般|饱满,无,正常|饱满,无,很好|饱满,无,差|较好,有,一般|较好,隐性,很好|饱满,无,很好|饱满,无,很好|饱满,无,一般|饱满,轻微,一般|饱满,无,正常|中等,轻微,差|较好,轻微,一般|饱满,无,一般|饱满,无,正常|较好,隐性,正常|饱满,轻微,一般|较差,轻微,差|饱满,轻微,正常|饱满,轻微,差|饱满,轻微,一般|中等,轻微,一般|饱满,无,一般|饱满,无,一般|中等,轻微,差|饱满,轻微,一般";
    statusStr = statusStr.split("|");
    
    //拿值
    let flag = 0;
    let js=[];
    let pl=[];
    let gz=[];
    let timeList = [];
    for(let j=0;j<statusStr.length;j++){
        let blockList = statusStr[j].split(",");
        for(let g=0;g<blockList.length;g++){
            let stastr = blockList[g];
            if(g == "0"){
              if (stastr == "较差") {
                  js.push(1);
                } else if (stastr == "略差") {
                  js.push(2);
                } else if (stastr == "中等") {
                  js.push(3);
                } else if (stastr == "较好") {
                  js.push(4);
                } else {
                  js.push(5);
                }  
            }else if(g == "1"){
                 if (stastr == "无") {
                  pl.push(1);
                } else if (stastr == "隐性") {
                  pl.push(2);
                } else if (stastr == "轻微") {
                  pl.push(3);
                } else if (stastr == "有") {
                  pl.push(4);
                } else {
                  pl.push(5);
                }
            }else{
                if (stastr == "差") {
                  gz.push(1);
                } else if (stastr == "一般") {
                  gz.push(2);
                } else if (stastr == "正常") {
                  gz.push(3);
                } else if (stastr == "较好") {
                  gz.push(4);;
                } else {
                  gz.push(5);
                }
            }
        }
        timeList.push(startTime*1);
        startTime=startTime*1+60;
    }
    
    let stackjs=[],stackpl=[],stackgz=[],demodata=[];
    for(let j=0; j<js.length;j++){
        stackjs.push(js[j]*1 -1);
        stackpl.push(pl[j]*1 - 1);
        stackgz.push(gz[j]*1 - 1);
        demodata.push(1);
    }
    console.log(js,pl);
    let demodatapl = [];
    for(let h=0;h<demodata.length;h++){
        let obj;
        if(h%2 == "0"){
            obj = {
                value: 1,
                itemStyle: {
                    color: '#a90000',
                    borderColor:"#a90000"
                }
            }
        }else{
            obj = {
                value: 1,
                itemStyle: {
                    color: '#ff6000',
                    borderColor:"#ff6000"
                }
            }
        }
        demodatapl.push(obj);
    }
    option = {
        title: {
            text: '指标示例',
            left: 'left',
            top: 0
        },
        legend:{
            show:true
        },
        dataZoom:[
            {type:"inside",xAxisIndex:[0,1,2],zoomLock:true},
            // {type:"inside",xAxisIndex:1},
            // {type:"inside",xAxisIndex:2},
            // {type:"inside",xAxisIndex:3},
        ],
        grid: [
            {left: '4%', top: '4%', width: '90%', height: '22%',containLabel:"true"},
            {left: '4%', top: '34%', width: '90%', height: '22%',containLabel:"true"},
            {left: '4%', top: '64%', width: '90%', height: '22%',containLabel:"true"}
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            textStyle:{
                color:'red'
            },
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor:"#b6d88e",
            borderWidth:1,
            // position: function (pos, params, el, elRect, size) {
            //     var obj = {top: 10};
            //     obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            //     return obj;
            // },
            extraCssText: 'width: 140px'
        },
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: 'red',
                formatter:function(res){
                    console.log("res",res);
                    if(res.axisDimension == "x"){
                        return formatTime(res.value*1000);
                    }else{
                         console.log(res);
                        if(res.value*1 <=1){
                            return "一级";
                        }else if(res.value <=2){
                            return "二级";
                        }else if(res.value <=3){
                            return "三级";
                        }else if(res.value <=4){
                            return "四级";
                        }else if(res.value <=5){
                            return "五级";
                        }
                    }
                }
            },
            borderColor:"#b6d88e",
        },
        xAxis: [
            {gridIndex: 0,splitLine:{show:true}, data:timeList,axisLabel:{formatter:function(v){return formatTime(v*1000)}}},
            {gridIndex: 1, data:timeList,axisLabel:{formatter:function(v){return formatTime(v*1000)}}},
            {gridIndex: 2, data:timeList,axisLabel:{formatter:function(v){return formatTime(v*1000)}}}
        ],
        yAxis: [
            {gridIndex: 0,min: 0, max: 5,axisLabel:{
                formatter:function(v){return formatY(v)},
            },
            splitLine:{
             
            },
            },
            {gridIndex: 1, min: 0, max: 5,axisLabel:{formatter:function(v){return formatY(v)}}},
            {gridIndex: 2, min: 0, max: 5,axisLabel:{formatter:function(v){return formatY(v)}}}
        ],
        series: [
            {
                name: '',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                stack:"js",
                data: stackjs,
                barWidth:"100%",
                symbol:false,
                symbolSize:0,
                smooth:0.5,
                tooltip:{
                    show:false
                },
                itemStyle:{
                   
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                },
            },
            // {
            //     name: 'I',
            //     type: 'bar',
            //     xAxisIndex: 0,
            //     yAxisIndex: 0,
            //     stack:"js",
            //     data: demodata,
            //     // barWidth:"100%",
            //     // symbol:'rect',
            //     // symbolSize:[30,10],
            //     itemStyle:{
            //         color:"#366fab",
            //         borderColor:"#366fab"
            //     },
            //     // lineStyle:{
            //     //     color:'rgba(0,0,0,0)'
            //     // }
            //     // markLine: markLineOpt
            // },
             {
                name: '',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: stackpl,
                stack:"pl",
                barWidth:"100%",
                tooltip:{
                    show:false
                },
                itemStyle:{
                  color:"rgba(0,0,0,0)",
                  borderColor:"rgba(0,0,0,0)"
                }
            },
            {
                name: 'II',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: demodatapl,
                stack:"pl",
                barWidth:"100%",
            },
            {
                name: '',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: stackgz,
                tooltip:{
                    show:false
                },
                stack:"gz",
                barWidth:"100%",
                itemStyle:{
                    color:"rgba(0,0,0,0)",
                    borderColor:"rgba(0,0,0,0)"
                },
            },
            {
                name: 'III',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: demodata,
                stack:"gz",
                barWidth:"100%",
                itemStyle:{
                    color:"#366fab",
                    borderColor:"#366fab"
                },
            },
            // {
            //     name: 'IV',
            //     type: 'bar',
            //     xAxisIndex: 3,
            //     yAxisIndex: 3,
            //     data: dataAll[3],
            //     barWidth:"100%",
            //     // markLine: markLineOpt
            //     // symbol:'rect',
            //     // symbolSize:[30,10],
            //     itemStyle:{
            //         color:"#366fab",
            //         borderColor:"#366fab"
            //     },
            //     // lineStyle:{
            //     //     color:'rgba(0,0,0,0)'
            //     // }
            // }
        ]
    };