var charts = {
    unit: '次',
    names: ['高危', '中危','低危','可疑'],
    lineX: [
        ' 00:00',
        ' 01:00',
        ' 02:00',
        ' 03:00',
        ' 04:00',
        ' 05:00',
        ' 06:00',
        ' 07:00',
        ' 08:00',
        
       
    ],
    value: [
        [51, 52, 23,34, 45, 36, 47, 28, 59 ],
        [60, 60, 33, 48, 50, 20, 42, 30, 50],
        [13, 32, 43, 34, 34, 13, 45, 31, 23],
        [32, 22, 33, 24, 43, 43, 32, 20, 40 ],
    ],
};
var color = ['rgba(255,100,97','rgba(242,157,10','rgba(139,170,44','rgba(23, 255, 243' ];
var lineY = [];

for (var i = 0; i < charts.names.length; i++) {
    var x = i;
    if (x > color.length - 1) {
        x = color.length - 1;
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        stack: '总量',
        color: color[x] + ')',
        smooth: true,
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
    backgroundColor: '#1b2735',
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)',
        },
        right: '4%',
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)',
            },
        },
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
            lineStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
    },
    series: lineY,
};
