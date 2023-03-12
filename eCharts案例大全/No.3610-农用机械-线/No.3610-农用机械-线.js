//配置
    var option = {
        backgroundColor: '#ffffff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '5%',
            left: '5%',
            right: '5%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                show: true,
                color: '#8FA3AB'
            },
            axisLabel: {
                color: '#516F95'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#E2E6E9'
                }
            },
            axisTick:{
                show:false
            },
            boundaryGap: true,
            data: ['二九零', '江滨', '宝泉岭', '新华', '友谊', '八五二'],

        }],

        yAxis: [{
            type: 'value',
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    //color: 'rgba(255,255,255,0.1)'
                    color: '#E2E6E9'
                }
            },
            axisLine: {
                show: true,
                color: '#8FA3AB'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#516F95',

                },
            },
            axisTick: {
                show: false,
            },
        }],
        dataset:data,
        series: [{
            name: '总动力',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: "#4ECFE3",
                    shadowColor: 'rgba(144, 196, 234, .9)',
                    shadowBlur: 5,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#05D2D7'
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#30B2C6",
                borderWidth: 3,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(159,205,240,1)'
                    },
                        {
                            offset: 0.5,
                            color: 'rgba(159,205,240,0.8)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,255,255,0)'
                        }
                    ], false),
                }
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
        }]
    };