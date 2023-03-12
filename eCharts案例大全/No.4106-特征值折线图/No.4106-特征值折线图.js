option = {
    backgroundColor: '#000',
    color: ['#F43030', '#3B5BC3', '#009437', '#fff'],
    legend: {
        icon: 'rect',
        textStyle: {
            color: '#fff',
        },
        data: ['标准值上限', '标准值', '标准值下限', '特征值']
    },
    grid: {
        top: '10%',
        bottom: '10%',
        right: '10%',
        left: '10%',
        containLabel: true
    },
    xAxis: {
        name: 'PM2.5',
        nameTextStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 14
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name: 'PM10',
        nameTextStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 14
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '标准值上限',
            data: [
                [0, 1.2],
                [1.3, 0]
            ],
            type: 'line',
            symbol: 'none',
            lineStyle: {
                type: 'dashed'
            }
        },
        {
            name: '标准值',
            data: [
                [0, 1],
                [1, 0]
            ],
            type: 'line',
            symbol: 'none',

        },
        {
            name: '标准值下限',
            data: [
                [0, 0.8],
                [0.82, 0]
            ],
            type: 'line',
            lineStyle: {
                type: 'dashed'
            },
            symbol: 'none',
        },
        {
            name: '特征值',
            data: [
                [0, 1.38],
                [1.22, 0]
            ],
            type: 'line',
            symbol: 'none',

        }
    ]
};