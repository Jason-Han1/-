var data1 = [60, 85, 110];
var data2 = [80, 190, 80];
var xdata = ['周一', '周二', '周三'];
option = {
  backgroundColor:"#051F54",
    tooltip: {
        trigger: "item",
        show: true,

        formatter:function(p){
            console.info(p);
            return p.marker +p.name + ' : ' +p.value
        }
    },
    grid: {
        left: "10%",
        top: "35%",
        bottom: "15%",
        right: "10%",
        containLabel: true
    },
    xAxis: {
        data: xdata,
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        type: 'value',
        splitNumber: 4,
        interval: 50,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ec7443'
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    series: [{
            type: 'bar',
            animation: false,
            barWidth: 2,
            data: data1,
            tooltip: {
                show: false
            },
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(85, 255, 237, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(66, 142, 255, 0.05)' // 100% 处的颜色
                    }],
                }
            },
        },
        {
            type: 'scatter',
            data: data1,
            symbolOffset: ['-120%', '0'],
            symbolSize: 8,
            itemStyle: {
                borderWidth: 0,
                opacity: 1,
                color: "rgba(85, 255, 237, 1)",
                shadowColor:'rgba(85, 255, 237, 1)',
                shadowBlur: 100,
                shadowOffsetX:100
            }
        },
        {
            type: 'bar',
            animation: false,
            barGap: '800%',
            barWidth: 2,
            data: data2,
            tooltip: {
                show: false
            },
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(214, 91, 255, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(184, 91, 255, 0.05)' // 100% 处的颜色
                    }],
                }
            },
        },
        {
            type: 'scatter',
            data: data2,
            symbolOffset: ['110%', '0'],
            symbolSize: 8,
            itemStyle: {
                borderWidth: 0,
                opacity: 1,
                color: "#f2fec3"
            }
        }

    ]
};