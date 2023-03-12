option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            interval: 0,
            rotate: 25,
            margin: 15,
            formatter: function(value, index) {
                return index === 0 ? '' : value;
            },
        },
        data: ['2017/6/23', '2017/10/27', '2018/3/2', '2018/7/6', '2018/11/9', '2019/2/15', '2018/3/2', '2019/7/12', '2019/11/8']
    },
    yAxis: {
        type: 'log',
        min: 0.95,
        max: 1.80,
        axisTick: { //y轴刻度线
            show: false,
        },
        splitLine: { //网格线
            show: false,
        },
        axisLabel: {
            show: false,
        },
        logBase: 10,
    },
    series: [{
        data: [1.0514, 1.0685, 1.0743, 1.0865, 1.1198, 1.1865, 1.3675, 1.5379, 1.749],
        type: 'line',
        markLine: {
            silent: true,
            symbol: ['none', 'none'], //去掉箭头
            lineStyle: {
                type: 'solid',
                color: 'black',
                opacity: 0.3
            },
            label: {
                show: true,
                position: 'start',
                formatter: '{b}'
            },
            formatter: function(params) {},
            data: [{
                    name: '0.95',
                    yAxis: 0.95
                },
                {
                    name: '1.00',
                    yAxis: 1.00
                },
                {
                    name: '1.10',
                    yAxis: 1.10
                },
                {
                    name: '1.20',
                    yAxis: 1.20
                },
                {
                    name: '1.30',
                    yAxis: 1.30
                },
                {
                    name: '1.40',
                    yAxis: 1.40
                },
                {
                    name: '1.50',
                    yAxis: 1.50
                },
                {
                    name: '1.60',
                    yAxis: 1.60
                },
                {
                    name: '1.70',
                    yAxis: 1.70
                },
                {
                    name: '1.80',
                    yAxis: 1.80
                }, {
                    name: '1.90',
                    yAxis: 1.90
                },
            ]
        }
    }]
};