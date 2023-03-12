function detectionData(str) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'green'
                    }, {
                        offset: 0.3,
                        color: 'skyblue'
                    }, {
                        offset:0.6,
                       color: 'blue'
                    },{
                          offset:1,
                       color: 'gray'
                    }]);
    return color;
}




var option = {
    backgroundColor:'#333333',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: "仪盘表",
        type: "gauge",
        splitNumber:35,
        radius:'100%',
        startAngle:180,
        endAngle:0,
        axisLine: {
            "lineStyle": {
                "color": [
                    [0, "#333"],
                    [1, "#333"]
                ],
                shadowColor: 'transparent',
                shadowBlur: 10,
                shadowOffsetX:'-10',
                shadowOffsetY:'-10',
                "width": 20,
                opacity:1,
            },
            show:true,
        },
        axisTick: {
            lineStyle: {
                // color:'rgb(51, 51, 51)',
                color:'#333',
                width: 15,
                borderColor:'none',
                borderColor:'#333',
                type:'solid',
                opacity:'1'
            },
            length: 30,
            splitNumber:1,
            
        },
          pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 10,
                show:false
            },
        axisLabel: {
            // distance: 10,
            // textStyle: {
            //     color: "#fff"
            // },
            show:false,
        },
        splitLine: {
            "show": false
        },
        // itemStyle: {
        //     normal: {
        //         color: "#494f50"
        //     }
        // },
        detail: {
            formatter: "{value}%",
            offsetCenter: [0, "30%"],
            textStyle: {
                fontSize: 60,
                color: "#F37B1D"
            }
        },
        title: {
            offsetCenter: [0, "60%"]
        },
        data: [{
            name: "CPU",
            value: 31
        }]
    }]
}
var value =0;
app.timeTicket = setInterval(function() {
    // var value = (Math.random() * 100).toFixed(2) - 0;
    if(value<100){
        value+=2
    }else{
        value=0
    }
    
    option.series[0].data[0].value = value;
    option.series[0].axisLine.lineStyle.color[0][0] = value / 100;
    option.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
    myChart.setOption(option, true);
}, 60);