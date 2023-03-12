var category = ['2010年','2011年','2012年','2013年','2014年','2015年', '2016年', '2017年', '2018年', '2019年'];
var dottedBase = [];

var barData = [10.1,9.01,7.33,7.23,6.76,6.36,6.12,6.3,6.12,6.11];
var rateData = [3566,4382,5432,6629,6747,8280,8516.2, 8582.94, 9608,10121.3];
;


// option
option = {
    title: {
        text: '中国2010-2019年GDP数据分析',
       x: 'center',
        y: 50,
        textStyle: {
            color: '#B4B4B4',
            fontSize:30,
            fontWeight: 'normal',
        },

    },
    backgroundColor: '#191E40',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar',  'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['人均GDP同比去年增长速率','人均GDP'],
        textStyle: {
            color: '#B4B4B4'
        },
        top: '15%',
        
    },
    grid: {
        
       x: '12%',
        width: '82%',
        y: '20%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [{

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },

            axisLabel: {
                formatter: '{value} ',
            }
        },
        {

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            axisLabel: {
                formatter: '{value} ',
            }
        }
    ],

    series: [{
            name: '人均GDP同比去年增长速率',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(156,107,211,0.5)'
                            },
                            {
                                offset: 0.2,
                                color: 'rgba(156,107,211,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(156,107,211,0)'
                            }
                        ]
                    )
                }
            },
            z: -12,

            
            data: barData
        }, {
            name: '人均GDP',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#F02FC2'
                },
            },
            data: rateData
        },




    ]
};
