var charts = {
    names: ['收轨装置', '起重装置', '轨道平车'],
    lineX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
    value: [
        [10, 11, 9.2, 9.5, 10.2, 11, 13, 9.7, 9.6,9.9 , 10.3, 11],
        [13, 13.2, 13.3, 14.1, 14, 14.1, 14.3, 14.4, 14.0,13.9,12.9,13.3],
        [18, 19, 18.8, 18.5, 19.2, 19.3, 19.2,19.2, 19.2, 19.2, 19.3, 19.1]
    ],
};
var color = [ 'rgba(93, 255, 255','rgba(205, 73, 62','rgba(105,103, 62'];
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

lineY[0].markLine = {
    silent: true,
    data: [
        {
            yAxis: 100,
        },
        {
            yAxis: 200,
        },
        {
            yAxis: 300,
        },
        {
            yAxis: 400,
        },
    ],
};
var option = {
      title: {
        text: '单车平均材料成本走势图',
        left: 'center'
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
                return params.split(' ')[0] + '\n' + params.split(' ')[1];
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
