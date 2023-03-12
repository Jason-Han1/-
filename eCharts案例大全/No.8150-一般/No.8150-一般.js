option = {
    backgroundColor: '#a5abb1',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },

    grid: {
        top: '10px',
        left: '5px',
        right: '15px',
        bottom: '10px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#192c4f'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#87b3cb'
            }
        },
        data: ['机柜', '服务器', '网络设备', '安全机', '动环']
    }],
    yAxis: [{
        type: 'value',
        name: '单位/个',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#192c4f'
            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#87b3cb',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#060f2b'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    visualMap: {
        type: "piecewise",
        top: 10,
        right: 10,
        pieces: [{
                gt: 0,
                lte: 10,
                color: 'rgba(1,143,98,0.4)'
            },
            {
                gt: 10,
                lte: 20,
                color: 'rgba(232,206,52,0.4)'
            }, {
                gt: 20,
                lte: 30,
                color: 'rgba(233,143,50,0.4)'
            }, {
                gt: 30,
                lte: 40,
                color: 'rgba(186,4,50,0.4)'
            }, {
                gt: 40,
                lte: 50,
                color: 'rgba(93,3,145,0.4)'
            },
            {
                gt: 50,
                color: 'rgba(114,4,36,0.4)'
            }
        ],
        outOfRange: {
            color: 'RGB(180,228,255)'
        }
    },
    series: [{
            name: 'A',
            type: 'line',
            // smooth: true,//是否平滑曲线显示
            symbol: 'arrow', //折线点标记的图形
            symbolSize: 5, //标记的图形大小
            showSymbol: true, //是否显示标记，false则是hover的时候显示
            lineStyle: {
                normal: {
                    width: 5, //折线宽度

                }
            },
            areaStyle: { //折线区域填充颜色

            },
            itemStyle: {
                
            },
            data: [50, 70, 25, 60, 50],
        },
        {
            name: 'C',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
               
            },
            itemStyle: {
                
            },
            data: [40, 90, 45, 80, 30],
        },
    ]
};