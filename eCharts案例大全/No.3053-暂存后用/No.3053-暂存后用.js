option = {
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
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            color:'#A582EA'
        },
    
        axisLabel: {
            color: '#000000',
            width:100
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ["行政审批局西区站","红石崖站","行政审批局西区站","红石崖站","行政审批局西区站","红石崖站","行政审批局西区站","红石崖站"]//this.$moment(data.times).format("HH-mm") ,

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 8,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eeeeee',
                opacity:0.23
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#000000',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#2CABE3",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#2CABE3',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#2CABE3",
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
            data: [230,450,580,480,700,750,550,400]//data.values
        },
    ]
};