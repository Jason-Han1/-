option = {
    backgroundColor: '#0F2B5C',
    grid: {
        top: '18%',
        left: '1%',
        right: '1%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.4)'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#d1e6eb',
                margin: 15,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 3,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '注册总量',
            type: 'line',
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
           // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: "#53fdfe", // 线条颜色
                },
                borderColor: '#f0f'
            },
            label: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(255,255,255,1)",

                }
            },
            tooltip: {
                show: false
            },
            data: [23, 25, 26, 28, 29, 53, 53]
        },
        {
            type: 'bar',
            animation: false,
            barWidth: 10,
            hoverAnimation: false,
            data: [23, 25, 26, 28, 29, 53, 53],
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
                            color: 'rgba(255,255,255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255,255,255, 0)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    label: {
                        show: false
                    }
                }
            }
        }
    ]
};