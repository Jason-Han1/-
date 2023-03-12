function detectionData(str) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(243, 238,67, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(225, 128,78, 1)'
                    }, {
                        offset:1,
                       color: 'rgba(237, 92,79, 1)'
                    }]);
    if (str >= 30 && str <= 60) {
        color =  new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(243, 238,67, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(225, 128,78, 1)'
                    }, {
                        offset:1,
                       color: 'rgba(237, 92,79, 1)'
                    }]);
    } else if (str > 60) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(243, 238,67, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(225, 128,78, 1)'
                    }, {
                        offset:1,
                       color: 'rgba(237, 92,79, 1)'
                    }]);
    }
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
        splitNumber:60,
        axisLine: {
            "lineStyle": {
                "color": [
                    [0.31, "#333"],
                    [1, "#333"]
                ],
                "width": 20
            },
            
        },
        axisTick: {
            lineStyle: {
                color:'#ccc',
                width: 2
            },
            length: 20,
            splitNumber:2
        },
          pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                show:false
            },
        axisLabel: {
            distance: 10,
            textStyle: {
                color: "#fff"
            },
            show:false,
        },
        splitLine: {
            "show": false
        },
        itemStyle: {
            normal: {
                color: "#494f50"
            }
        },
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
app.timeTicket = setInterval(function() {
    var value = (Math.random() * 100).toFixed(2) - 0;
    option.series[0].data[0].value = value;
    option.series[0].axisLine.lineStyle.color[0][0] = value / 100;
    option.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
    myChart.setOption(option, true);
}, 500);