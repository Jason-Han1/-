option = {
    backgroundColor: '#080b30',
    title: {
        text: '',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#0000005c',
        borderColor:'#6FD0FF',
        borderWidth:1,
        padding: [2, 10],
        textStyle:{
            color:'#6FD0FF',
            fontSize:12,
            fontWeight:600,
        },
        formatter:'{b}<br/>{c}',
        axisPointer: {
            show:true,
            axis :'x',
            label: {
                show:true,
                backgroundColor: '#000',
                shadowColor:'#6FD0FF',
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick:{
            show: false,
        },
        // axisLine: {
        //     show: false,
        // },
        // splitArea: {
        //     show: true,
        //     color: '#f00',
        //     lineStyle: {
        //         color: '#f00'
        //     },
        // },
        axisLabel: {
            color: '#fff'
        },
        data: ['2020-01-01', '2020-01-01', '2020-01-01',
        '2020-01-01', '2020-01-01', '2020-01-01'],
    },

    yAxis: {
        type: 'value',
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#949494',
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#66FFE2",
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#9ffff308' // 0% 处的颜色
                        }, {
                            offset: 0.2, color: '#8CFFED' // 100% 处的颜色
                        }, {
                            offset: 0.8, color: '#77FFE7' // 100% 处的颜色
                        },{
                            offset: 1,color:'#66ffe221'
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#66FFE2',
                }
            },
            itemStyle: {
                color: "#000",
                borderColor: "#66FFE2",
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#35e6de47' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#18C9BB00' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: '#66FFE2',
                    shadowBlur: 20
                }
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
        },
       
    ]
};