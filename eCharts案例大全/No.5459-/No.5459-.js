var getname = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
var getvalue = [2, 19, 15, 13, 9, 12, 5, 12, 33, 45, 56, 75, 89, 65, 25, 11, 22, 36, 48, 23, 36, 33, 12, 8];

option = {
    backgroundColor: '#000',
    grid: {
        containLabel: true,
        left: 10,
        top: 20,
        right: 20,
        bottom: 10
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.3,
                        color: 'rgba(0,225,231,0.59)' // 100% 处的颜色
                    }, {
                        offset: 0.7,
                        color: 'rgba(0,225,231,0.59)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)' // 100% 处的颜色
                    }],

                }
            }
        },
        confine: true,
        formatter: '昨日{b}时进出人次: {c}',

        backgroundColor: 'rgba(7,89,178,0.3)',

    },
    xAxis: {
        type: 'category',
        data: getname,
        axisLabel: {
            interval: 0,
            margin: 10,
            color: '#A9C1E5',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        axisLabel: {
            color: '#A9C1E5',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 2,
        data: getvalue,
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.2,
                        color: '#00E4FF' // 100% 处的颜色
                    }, {
                        offset: 0.8,
                        color: '#00E4FF' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)' // 100% 处的颜色
                    }],

                },
                width: 2,
                shadowColor: 'rgba(0,132,255,0.14)',
                shadowBlur: 8,

            },
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.8,
                        color: '#00E4FF'
                    }, {
                        offset: 1,
                        color: '#00E4FF'
                    }],
                    global: false // 缺省为 false
                },
                borderColor: 'rgba(0, 236, 242, 0.3)',
                borderWidth: 10,
                opacity: 0,
            }
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        }
    }]
};
let chart = document.getElementById('chart-panel');
let myChart = echarts.init(chart)
let i = 0
setInterval(function() {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0, // 显示第几个series
        dataIndex: i // 显示第几个数据
    });
    i = i === getname.length ? 0 : i + 1
}, 1000)