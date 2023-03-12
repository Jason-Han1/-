option = {
    grid: {
        top: 70,
        bottom: 40,
        left: 70,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
    },
    yAxis: {
        data: ['学士以下', '学士', '硕士', '博士'],
        axisLabel: {
            margin: 10,
            color: '#777777',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    },
    xAxis: {
        data: ['≤35', '36-45', '46-55', '≥56'],
        axisLabel: {
            margin: 10,
            color: '#777777',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#D1D1D1',
            }
        }
    },
    series: [{
        type: 'scatter',
        symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: function(data) {
            return Math.sqrt(data[2]) * 10;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: '#D9EDFF',
                borderColor: '#77B3FF',
                borderWidth: 1,
            }
        },
        data: [
            ['≤35', '学士以下', 15],
            ['46-55', '学士以下', 15],
            ['≤35', '学士', 35],
            ['46-55', '学士', 35],
            ['≤35', '硕士', 30],
            ['36-45', '硕士', 40],
            ['46-55', '硕士', 45],
            ['≥56', '硕士', 15],
            ['36-45', '博士', 30],
            ['46-55', '博士', 30],
            ['≥56', '博士', 40],
        ]
    }, ]
};