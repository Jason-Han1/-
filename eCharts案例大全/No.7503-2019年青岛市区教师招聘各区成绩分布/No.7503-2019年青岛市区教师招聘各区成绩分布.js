option = {
    backgroundColor: '#0f375f',
    title: {
        text: '2019年青岛市区教师招聘各区成绩分布',
        left: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: '400'
        }
    },
    color: ['#FF00FF', '#73DEB3', '#FFA500', '#FF4500'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '24',
        top: '75',
        containLabel: true
    },
    legend: {
        data: ['市北3人', '李沧5人', '崂山5人', '城阳7人'],
        orient: 'horizontal',
        textStyle: {
            color: '#fff'
        },
        icon: "rect",
        show: true,
        left: 20,
        top: 25,
    },
    xAxis: {
        type: 'category',
        show: false,

        data: [],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        min: 78,
        splitNumber: 7,
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    series: [{
            name: '市北3人',
            type: 'line',
            symbol: 'circle',
            lineStyle: {
                width: 3,
            },
            label: {
                show: true,
            },
            symbolSize: 10,
            smooth: true,
            data: [84.6, 83.4, 81.7, 81.6, 80.3, 80.1, 80, 79.7, 78.4].reverse()
        },
        {
            name: '李沧5人',
            type: 'line',
            symbol: 'circle',
            lineStyle: {
                width: 3,
            },
            label: {
                show: true,
            },
            symbolSize: 10,
            smooth: true,
            data: [86.90, 83.00, 82.80, 82.40, 82.40, 81.40, 81.10, 80.10, 78.50, 78.50].reverse()
        },
        {
            name: '崂山5人',
            type: 'line',
            symbol: 'circle',
            lineStyle: {
                width: 3,
            },
            label: {
                show: true,
            },
            symbolSize: 10,
            smooth: true,
            data: [87.90, 87.10, 86.00, 83.30, 82.00, 81.80, 81.60, 81.30, 81.00, 80.80, 80.80, 80.40, 80.30, 80.20, 79.90].reverse()
        },
        {
            name: '城阳7人',
            type: 'line',
            symbol: 'circle',
            lineStyle: {
                width: 3,
            },
            label: {
                show: true,
            },
            symbolSize: 10,
            smooth: true,
            data: [85.70,
                84.90, 84.90, 84.10, 84.10, 83.80, 83.50, 83.50, 83.30, 83.10,
                83.10, 82.80, 82.80, 82.70, 82.60, 82.40, 82.20, 82.20, 82.00,
                82.00, 81.70, 81.50, 81.40, 81.20, 81.20
            ].reverse()
        }
    ]
};