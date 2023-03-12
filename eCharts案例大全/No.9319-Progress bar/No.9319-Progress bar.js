option = {
    backgroundColor: "#25c7e6",
    color: ["#3861EA", "#FF8F24"],
    
    grid: [{
        top: '100',
        left: '50',
        right: '50',
        bottom: '50',
        containLabel: false,
    }],
    calculable: true,
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        y: '17',
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
            color: '#fff',
            fontSize: 13,
        },
        icon: 'rect',
        data: ['A', 'B']
    },
    xAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        boundaryGap: false,
    }],
    yAxis: [{
        type: 'category',
        boundaryGap: false,
        position: 'top',
        data: ["H", "G", "F", "E", "D", "C", "B", "A"],
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
            },
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    }],
    series: [{
            name: "A",
            type: 'bar',
            data: ["75", "68", "55", "55", "34", "66", "88", "42"],
            barWidth: 5,
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: '#83E1F3',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            }
        },
        {
            name: "B",
            type: 'bar',
            data: ["55", "68", "55", "21", "55", "68", "95", "33"],
            barWidth: 5,
            barGap: '2px',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: '#83E1F3',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            }
        }
    ]
};