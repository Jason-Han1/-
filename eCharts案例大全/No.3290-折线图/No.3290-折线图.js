var xData = ['2021年1月','2021年2月','2021年3月','2021年4月','2021年5月'];
option = {
    backgroundColor:'#232d36',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
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
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
    },
    legend:{
        data:['转入','转出'],
        textStyle:{
            color:'#fff',
            align: 'center',
            fontSize: 16
        },
        x:'center'
    },
    xAxis: [{
        type: 'category',
        // 轴线
        axisLine: {
            show: true,
            lineStyle:{
               color: '#85B1B4',
           }
        },
        // 轴刻度线
        axisTick:{
            show:false,
        },
        // 坐标轴名称
        axisLabel: {
            color: '#fff',
            margin:6,
        },
        // 轴分隔线
        splitLine: {
            show: false
        },
        // 轴两侧留白
        boundaryGap: ['5%','5%'],
        data: xData

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
           lineStyle:{
               color: '#85B1B4'
           }
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#fff',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name:'转入',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 4,
            lineStyle: {
                normal: {
                    color: "#FF8736",
                },
            },
            label: {
                show: false,
            },
            itemStyle: {
                color: "#FF8736",
                borderColor: "#FF8736",
                borderWidth: 2,
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //             {
            //                 offset: 0,
            //                 color: 'rgba(43,193,145,0.3)'
            //             },
            //             {
            //                 offset: 1,
            //                 color: 'rgba(43,193,145,0)'
            //             }
            //         ], false),
            //     }
            // },
            data: [4,7,5,4,3,5,8]//data.values
        },
        {
            name:'转出',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize:4,
            lineStyle: {
                normal: {
                    color: "#13EFB7",
                },
            },
            label: {
                show: false,
            },
            itemStyle: {
                color: "#13EFB7",
                borderColor: "#13EFB7",
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(81,150,164,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(81,150,164,0)'
                        }
                    ], false),
                }
            },
            data: [3,5,4,2,1,7,6]//data.values
        },
    ]
};