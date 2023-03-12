// Generate data
var category = ['市区', '万州', '江北', '南岸', '北碚'];
var dottedBase = [];
var lineData = [18092, 20728, 24045, 28348, 32808];
var barData = [4600, 5000, 5500, 6500, 7500];
var rateData = [];
for (var i = 0; i < 33; i++) {
    // var date = i+2001;
    // category.push(date)
    var rate = barData[i] / lineData[i];
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    // title: {
    //     text: '增量设备贯通情况-单位',
    //     x: 'center',
    //     y: 0,
    //     textStyle:{
    //         color:'#B4B4B4',
    //         fontSize:16,
    //         fontWeight:'normal',
    //     },

    // },
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
    // legend: {
    //     data: ['已贯通', '计划贯通','贯通率',],
    //     textStyle: {
    //         color: '#B4B4B4'
    //     },
    //     top:'7%',
    // },
    grid: {
        x: '12%',
        width: '82%',
        y: '12%',
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
                show: false,
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            splitLine: {
                show: false
            },

            axisLabel: {
                show: false,
                formatter: '{value} ',
            }
        },
        {

            
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
            name: '已贯通',
            type: 'bar',
            barWidth: 10,
            stack: 'sum',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#956FD4'
                            },
                            {
                                offset: 1,
                                color: '#3EACE5'
                            }
                        ]
                    )
                }
            },
            data: barData
        },
        {
            name: '计划贯通',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            stack: 'sum1',
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

            data: lineData
        },
    ]
};