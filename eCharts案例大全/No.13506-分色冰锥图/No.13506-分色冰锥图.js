option = {
        title: {
          text: '分色冰锥图',
          textStyle: {
            color: '#dabbfe',
            fontSize: 20
          }
        },
        grid: {
        left: '5%',
        right: '10%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ffffff",
                width: 1,
                type: "solid",
                opacity: 0.3
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#dabbfe",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#dabbfe",
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#ffffff",
                opacity: 0.15,
                type: 'dotted'
            }
        }
    }],
    series: [{
        type: 'pictorialBar',
        symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z', 
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        barWidth: 30, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#173f9a'
                }, {
                    offset: 0.5,
                    color: '#173f9a'
                }, {
                    offset: 0.5,
                    color: '#247ed1'
                }
                , {
                    offset: 1,
                    color: '#247ed1'
                }]),
                opacity: 1,
            }
        }
    }]
      };