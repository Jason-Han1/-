option = {
    title: {
        text: '本月拥堵时段统计表',
        top: "16%",
        left: "center",
        textStyle: {
            color: '#333',
            fontSize: '23'
        }
    },
    visualMap: {
        show: true,
        orient: 'horizontal',
        top: '25%',
        left: 'center',
        pieces: [{
            gt: 6,
            lte: 7,
            color: '#ecee98'
        }, {
            gt: 7,
            lte: 8,
            color: '#dab87e'
        }, {
            gt: 8,
            lte: 9,
            color: '#dc9470'
        }, {
            gt: 9,
            lte: 10,
            color: '#e04e46'
        }],
        textStyle: {
            color: '#666',
        },
        formatter: function(value) {
            if (value == 10) {
                return 9
            } else {
                return Math.round(value) + 1;
            }
            console.log(value)
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['10级拥堵', '9级拥堵', '8级拥堵', '7级拥堵'],
        top: "18%",
        textStyle: {
            color: '#fff'
        },
        itemHeight: '6',
        icon: 'rect',
        itemGap: 20
    },
    color: ['#e04e46', '#dc9470', '#dab87e', '#ecee98'],
    grid: {
        left: '3%',
        right: '6%',
        bottom: '13%',
        top: '35%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00-03:00', '00:30-06:00', '06:00-09:00', '09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00', '21:00-24:00'],
        axisLabel: {
            color: '#5e6877'
        },
        axisLine: {
            lineStyle: {
                color: '#5e6877'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#5e6877'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#5e6877'
        },
        name: '(级)',
        minInterval: 1,
        max: 10,
        min: 7,
        axisLine: {
            lineStyle: {
                color: '#5e6877'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#5e6877'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#5e6877'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        type: 'line',
        showSymbol: false,
        data: [7, 8, 9, 10, 7, 8, 9, 7, 8]
    }]
}