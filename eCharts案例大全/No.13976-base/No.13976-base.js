option = {
    title: {
        text: 'title',
        left: -5,
        textStyle: {
            fontWeight: 'normal'
        }
    },
    graphic: {
        elements: [{
            type: 'group',
            left: 'center',
            top: 'center',
            children: [{
                    type: 'text',
                    left: 'center',
                    top: '0',
                    style: {
                        text: 999,
                        fontSize: 30,
                        fill: '#0af'
                    }
                },
                {
                    type: 'text',
                    left: 'center',
                    top: '30',
                    style: {
                        text: 'pie title',
                        fontSize: 20,
                    }
                }
            ]
        }]
    },
    grid: {
        left: 3,
        top: 45,
        bottom: 0,
        right: 0,
        containLabel: true
    },
    xAxis: [{
        // type: 'value',
        data: ['x1', 'x2', 'x3', 'x4', 'x5'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
            inside: true
        },
        axisLabel: {
            // inside: true
        },
    }],
    yAxis: [{
        // type: 'category',
        // data: ['y1', 'y2', 'y3', 'y4', 'y5'],
        axisLine: {
            show: false
        },
        splitLine: {
            // show: false,
            lineStyle: {
                type: ['solid', 'dashed', 'dotted'][2]
            }
        },
        axisTick: {
            show: false,
            inside: true
        },
        axisLabel: {
            // inside: true,
            // rotate: 45,
            margin: 5,
            formatter: function f(value, index) {
                if (isNaN(value)) {
                    return value
                }
                value = +value
                for (var i = 0; true; i++) {
                    var v = value / 10000;
                    if (v < 1) break;
                    value = v;
                }
                return (+value.toFixed(1)) +
                    Array(i % 2 + 1).join('万') +
                    Array(parseInt(i / 2) + 1).join('亿')
            }
        },
    }],
    dataZoom: [{
        type: 'slider',
        show: false,
        start: 0,
        end: 100
    }],
    tooltip: {
        trigger: 'item'
    },
    tooltip: {
        trigger: ['item', 'axis'][1],
        position: function(pt) {
            return [pt[0] - 14, '0'];
        },
        confine: true,
        axisPointer: {
            // type: 'cross',
        },
        extraCssText: 'transition:none;box-shadow:1px 1px 10px #aaa;background:rgba(0,0,0,.5);bottom:auto;top:0;margin-bottom:-30px;pointer-events:none',
    },
    color: ['#0af', '#21D100', '#FFD013', '#FF6767'],
    legend: {
        right: 0,
        icon: "rect",
        itemGap: 16,
        itemHeight: 8,
        itemWidth: 20,
        data: ['A', 'B', 'C'],
        selected: {
            'A': true,
        }
    },
    series: [{
        name: 'A',
        type: ['line', 'bar', 'pie'][0],
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        z: 3,
        data: [1, 2, 4, 4, 6, {
            name: 'x',
            value: 9
        }]
    }, {
        name: 'B',
        type: ['line', 'bar', 'pie'][1],
        barMaxWidth: 30,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        z: 2,
        data: [5, 4, 2, 1, 1]
    }, {
        name: 'C',
        type: ['line', 'bar', 'pie'][2],
        barMaxWidth: 30,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        radius: ['40%', '55%'],
        z: 1,
        label: {
            align: 'left',
            formatter: '{d}%  {c}\n{b}',
        },
        data: [{
            name: '准点人数',
            value: 17,
        }, {
            name: '迟到人数',
            value: 1,
        }, {
            name: '请假人数',
            value: 1,
        }, {
            name: '未打卡人数',
            value: 1,
        }]
    }]
};