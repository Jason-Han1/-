option = {
    backgroundColor:'#081736',
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
    legend: {
        x: '46%',
        top: '50%',
        textStyle: {
            color: '#fff',
            fontSize:15,
        },
        data: ["袋装","散装"]
    },
    
    grid: {
        top: '55%',
        left: '8%',
        right: '3%',
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
            color: '#fff',
            width:100
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: [
                '11/12',
                '11/13',
                '11/14',
                '11/15',
                '11/16',
                '11/17',
                '11/18',
                '11/19',
                '11/20',
                '11/21',
                '11/22',
                '11/23',
                '11/24',
                '11/25',
                '11/26',
                '11/27',
                '11/28',
                '11/29',
                '11/30',
                '12/01',
                '12/02',
                '12/03',
                '12/04',
                '12/05',
                '12/06',
                '12/07',
                '12/08',
                '12/09',
                '12/10',
                '12/11',
]//this.$moment(data.times).format("HH-mm") ,

    }],

    yAxis: [{
        name:"单位：t",
        nameTextStyle:{
             color: '#fff',
             fontSize:15,
        },
        type: 'value',
        min: 0,
        splitNumber: 10,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#00BFF3',
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
                color: '#fff',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name:'袋装',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: "#A582EA",
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#A582EA',
                    fontSize:8
                }
            },
            itemStyle: {
                color: "#A582EA",
                borderColor: "#A582EA",
                borderWidth: 0,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(43,193,145,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(43,193,145,0)'
                        }
                    ], false),
                }
            },
            data: [158.68,
                    177.84,
                    182.2,
                    97.89,
                    248.98,
                    176.83,
                    133.49,
                    292.09,
                    186.58,
                    184.02,
                    209.62,
                    203.4,
                    165.11,
                    201.31,
                    5,
                    65.81,
                    103.67,
                    170.34,
                    146.61,
                    129.17,
                    125.97,
                    205.37,
                    102.72,
                    39.04,
                    93.45,
                    108.8,
                    82.65,
                    131.96,
                    193.21,
                    34.54]//data.values
        },
        {
            name:'散装',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
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
                    fontSize:10
                }
            },
            itemStyle: {
                color: "#2CABE3",
                borderColor: "#2CABE3",
                borderWidth: 0,
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
            data: [1004.08,
                    436.97,
                    342.37,
                    335.04,
                    259.28,
                    757.08,
                    66.14,
                    749.27,
                    486.26,
                    0,
                    0,
                    470.3,
                    811.31,
                    54.86,
                    819.06,
                    509.57,
                    105.31,
                    34.87,
                    129.04,
                    35.33,
                    0,
                    31.51,
                    227.09,
                    436.76,
                    488.59,
                    642.03,
                    626.7,
                    433.33,
                    324.09,
                    67.43,
]//data.values
        },
    ]
};