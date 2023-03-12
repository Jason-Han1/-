option = {
    backgroundColor: '#080b30',
    legend: {
        color: ["#17B4FA", "#47D8BE", "#F9A589"],
        data: ['日用气量分析'],
        left: 'center',
         top: "8%",
         textStyle: {
            color: "#ffffff"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: '#0060FF',
        formatter:(params)=> {
            let str = params.seriesName+'</br>'+params.name+' : '+params.data
            return str
        }
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%'
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['00:00', '3:00', '6:00', '9:00', '12:00', '15:00','18:00', '21:00', '24:00'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(50, 180, 181, 1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '日用气量分析',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "rgba(0, 96, 255, 1)",
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                }
            },
            itemStyle: {
                color: "rgba(0, 96, 255, 0.8)",
                borderColor: "#fff",
                borderWidth: 2,
            },
            tooltip: {
                show: true
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 96, 255, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 96, 255, 0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0, 96, 255, 0.9)',
                    shadowBlur: 10
                }
            },
            data: [30,90,120,130,108,140,135,120,130]
        },
        
    ]
};