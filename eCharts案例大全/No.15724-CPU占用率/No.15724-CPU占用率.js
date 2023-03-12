var xData = [];
var yData = [];
for (var i = 60; i >= 0; i--) {
    xData.push(i);
    if (i < 1) {
        yData.push(20);
    } else {
        yData.push(0);
    }
}

option = {
    animation: false,
    title: {
        text: 'CPU占用率',
        x: 'left'
    },
    xAxis: [{
        name: '秒',
        type: 'category',
        boundaryGap: false,
        data: xData
    }],
    yAxis: {
        name: '占用率',
        type: 'value',
        max: 100,
        splitLine: {
            show: false
        }
    },
    series: {
        type: 'line',
        symbol: 'none',
        tooltip: {
            trigger: 'axis'
                // formatter: '{a} <br/>{b}日: {c}元'
        },
        smooth: true,
        itemStyle: {
            normal: {
                color: "#39B7CE"
            }
        },
        lineStyle: {
            normal: {
                color: "#39B7CE"
            }
        },
        areaStyle: {
            normal: {
                color: "#39B7CE",
                opacity: 0.8
            }
        },
        data: yData
    }
};

setInterval(function go() {
    var lastNum = yData[60];
    var random = Math.random();
    if (random < 0.45 && lastNum < 60) {
        lastNum += 2;
    } else if (random > 0.55 && lastNum > 10) {
        lastNum -= 2;
    }
    yData.push(lastNum);
    yData.shift();
    var option = myChart.getOption();
    option.series[0].data = yData;
    myChart.setOption(option);
}, 1000);