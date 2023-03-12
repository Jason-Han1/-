var charts = {
    unit: '单位(km)',
    names: ['曲线1', '曲线2'],
    lineX: ['10-11', '10-12', '10-13', '10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20', '10-21', '10-22'],
    value: [
        [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
        [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98],
    ],
};
var color = ['rgba(205, 173, 62', 'rgba(93, 255, 255'];
var lineY = [];

for (var i = 0; i < charts.names.length; i++) {
    var x = i;
    if (x > color.length - 1) {
        x = color.length - 1;
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: false,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: color[x] + ', 0.3)',
                        },
                        {
                            offset: 0.8,
                            color: color[x] + ', 0)',
                        },
                    ],
                    false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
            },
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i],
    };
    lineY.push(data);
}
var option = {
    title: {
        text: '数据曲线',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 22,
            color: '#F1F1F3',
        },
        left: '46%',
        top: '1%',
    },
    backgroundColor: 'rgba(1, 22, 53, 1)',
    tooltip: {
        trigger: 'axis',
    },

    legend: {
        top: '4%',
        data: charts.names,
        textStyle: {
            fontSize: 14,
            color: 'F1F1F3',
        },
        right: '4%',
    },
    grid: {
        top: '10%',
        left: '4%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
            formatter: function (params) {
                return params;
            },
        },
    },
    yAxis: {
        show: true,
        splitArea: {
            show: true,
            areaStyle: {
                color: 'rgba(1, 22, 53, 1)',
            },
        },
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)',
            },
        },

        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
    },
    series: lineY,
};
setInterval(() => {
    myChart.setOption({
        legend: {
            selected: {
                曲线1: false,
                曲线2: false,
            },
        },
    });
    myChart.setOption({
        legend: {
            selected: {
                曲线1: true,
                曲线2: true,
            },
        },
    });
}, 10000);
