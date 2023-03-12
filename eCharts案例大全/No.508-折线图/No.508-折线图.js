var charts = {
    unit: '',
    names: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
        'item7',
        'item8',
        'item9',
    ],
    lineX: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
    value: [
        [150, 150, 150, 150, 150, 150, 150],
        [210, 210, 210, 210, 210, 210, 210],
        [340, 340, 340, 340, 340, 340, 340],
        [240, 240, 240, 240, 240, 240, 240],
        [310, 310, 310, 310, 310, 310, 310],
        [100, 100, 100, 100, 100, 100, 100],
        [230, 230, 230, 230, 230, 230, 230],
        [360, 360, 360, 360, 360, 360, 360],
        [400, 400, 400, 400, 400, 400, 400],
    ],
};
var color = [
    'rgb(243,154,47',
    'rgb(112,215,117',
    'rgb(0,150,255',
    'rgb(250,70,213',
    'rgb(172,92,215',
    'rgb(75,213,179',
    'rgb(224,47,118',
    'rgb(246,222,86',
    'rgb(244,106,132',
];
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

        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i],
    };
    lineY.push(data);
}

var option = {
    backgroundColor: '#000',
    title: {
        show: false,
        text: '历史数据-曲线',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3',
        },
        left: '6%',
        top: '4%',
    },
    tooltip: {
        trigger: 'axis',
    },

    legend: {
        top: '2%',
        itemStyle: {
           opacity: 0
        },
        lineStyle: {
           height: 2
        },
        data: charts.names,
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
    },
    grid: {
        top: '15%',
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
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#173763',
            },
        },
    },
    yAxis: {
        show: true,
        splitArea: {
            show: true,
            areaStyle: {
                color: 'transparent',
            },
        },
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#173763',
            },
        },
        axisLine: {
            show: false,
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
                出口: false,
                入口: false,
            },
        },
    });
    myChart.setOption({
        legend: {
            selected: {
                出口: true,
                入口: true,
            },
        },
    });
}, 10000);
