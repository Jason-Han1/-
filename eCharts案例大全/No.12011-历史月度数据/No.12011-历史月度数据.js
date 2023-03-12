option = {
    backgroundColor: '#031571',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['任务总数', '关联', '合格', '违规'],
        align: 'right',
        right: 20,
        textStyle: {
            color: "#fff"
        },
        itemGap: 30,
        itemWidth: 30,
        itemHeight: 10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#034e90",
                width: 2,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#9fceff",
                fontSize: 14
            }
        },
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 6,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: "#91bdeb",
                fontSize: 16
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00a1e4",
                width: 2,
                type: "solid"
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#034e90",
                width: 2,
                type: "solid"
            }
        }
    }],
    series: [{
        name: '任务总数',
        type: 'line',
        data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
                d.push(parseInt(Math.random() * (100 - 50 + 1) + 50, 10));
            }
            return d;
        })(),
        itemStyle: {
            normal: {
                color: '#00a1e4',
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        }
    }, {
        name: '关联',
        type: 'line',
        data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
                d.push(parseInt(Math.random() * (90 - 40) + 40, 10));
            }
            return d;
        })(),
        itemStyle: {
            normal: {
                color: '#ffc600',
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
    }, {
        name: '合格',
        type: 'line',
        data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
                d.push(parseInt(Math.random() * (80 - 30 + 1) + 30, 10));
            }
            return d;
        })(),
        itemStyle: {
            normal: {
                color: '#24c768',
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        }
    }, {
        name: '违规',
        type: 'line',
        data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
                d.push(parseInt(Math.random() * (70 - 20 + 1) + 20, 10));
            }
            return d;
        })(),
        itemStyle: {
            normal: {
                color: '#de7008',
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        }
    }]
};