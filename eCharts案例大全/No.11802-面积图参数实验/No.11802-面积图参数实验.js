option = {
    title: {
        text: 'Awesome Chart'
    },

    grid: [
        //   show: false,
        {
            x: '7%',
            y: '7%',
            width: '88%',
            height: '38%'
        },
        {
            x: '7%',
            y2: '7%',
            width: '88%',
            height: '38%'
        }
    ],
    xAxis: [{
        gridIndex: 0,

        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        gridIndex: 1,

        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }],
    yAxis: [{
            gridIndex: 0,
            splitLine: {
                show: false
            },
        },
        {
            gridIndex: 1,
            splitLine: {
                show: false
            },
        }



    ],
    series: [{
        type: 'line',
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: 'none', //value标记的图形
        symbolSize: 6,
        step: false, //是否是阶梯线图,'start', 'middle', 'end'
        smooth: true, //是否平滑
        smoothMonotone: 'none', // 可以写x或者y
        label: {
            normal: {
                show: true,
                position:'top',
                textStyle: {
                    color: 'auto' // 文字颜色#e4a21f，文字随图例改变是auto，也可以自己指定
                }
            }
        },
        //----增加areaStyle就是面积图，areaStyle:{}是跟线走
        areaStyle: {
          opacity:0.2 },
       color:'red',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        animation: false,
        barWidth: 50,
        hoverAnimation: false,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: 'auto' // 文字颜色#e4a21f，文字随图例改变是auto，也可以自己指定
                }
            }
        },
        data: [-22000000, 182000000, 191, 234, 290, 330, 310],
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ffccbc' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#ff9800' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                label: {
                    show: false
                }
            }
        }
    }]
};