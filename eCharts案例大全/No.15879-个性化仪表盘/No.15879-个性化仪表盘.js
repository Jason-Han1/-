function detectionData(str) {
    var color = '#5eb95e';
    if (str >= 30 && str <= 60) {
        color = '#F37B1D';
    } else if (str > 60) {
        color = '#dd514c';
    }
    return color;
}
var option = {
    "tooltip": {
        "formatter": "{a} <br/>{b} : {c}%"
    },
    "series": [{
        "name": "业务指标",
        "type": "gauge",
        "splitNumber": 5,
        "axisLine": {
            "lineStyle": {
                "color": [
                    [0.31, "#F37B1D"],
                    [1, "#e9ecf3"]
                ],
                "width": 50
            }
        },
        "axisTick": {
            "lineStyle": {
                "color": "#3bb4f2",
                "width": 3
            },
            "length": -25,
            "splitNumber": 1
        },
        "axisLabel": {
            "distance": -80,
            "textStyle": {
                "color": "#000"
            }
        },
        "splitLine": {
            "show": false
        },
        "itemStyle": {
            "normal": {
                "color": "#494f50"
            }
        },
        "detail": {
            "formatter": "{value}%",
            "offsetCenter": [0, "60%"],
            "textStyle": {
                "fontSize": 30,
                "color": "#F37B1D"
            }
        },
        "title": {
            "offsetCenter": [0, "100%"]
        },
        "data": [{
            "name": "CPU",
            "value": 31
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