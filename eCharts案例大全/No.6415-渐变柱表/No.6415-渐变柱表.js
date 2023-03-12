
//x轴数值
var  getsyzl_b_b=['2014','2015','2016','2017','2018','2019'];


//文理科对应数值
var  getwkrs_b_b=[826,673,588,782,779,855];
var  getlkrs_b_b=[686,703,788,882,779,785];

option = {
    backgroundColor: '#061326',
    //配置鼠标放到图形上展现的东西
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: "shadow"
        }
    },
    grid: {
        top: '20%',
        left: '7%',
        right: '2%',
        bottom: '3%',
        containLabel: true,

    },

    legend: {
        data: ['文科', '理科'],
        right: "3%",
        top: "4%",
        textStyle: {
            color: "#A1D5FF",
            fontSize: 12
        },
        itemWidth: 12, // 设置宽度
        itemHeight: 16, // 设置高度
        itemGap: 12 // 设置间距
    },
    xAxis: [{
        data: getsyzl_b_b,
        axisLabel: {
            margin: 10,
            color: '#ffffff',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#102E74',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#ffffff',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        //背后网格线的颜色（那个绿色的线）
        splitLine: {
            lineStyle: {
                color: '#67ff2c',
            }
        }
    }],
    series: [{
            name: "文科",
            type: 'bar',
            data: getwkrs_b_b,
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(85,244,255,0.9)' // 柱形上层的颜色
                    }, {
                        offset: 1,
                        color: 'red' // 柱形下层处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
        }, {
            name: "理科",
            type: 'bar',
            data: getlkrs_b_b,
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(85,101,255,0.9)' // 柱形上层的颜色
                    }, {
                        offset: 1,
                        color: 'yellow'  // 柱形下层处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
        }]

    
};