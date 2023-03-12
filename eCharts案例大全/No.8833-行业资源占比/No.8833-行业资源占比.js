option = {
    grid: {
        show: 'true',
        borderWidth: '0',
        height: "80%",
        width: "80%",
        x: "12%",
        // y:"20%",
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b0}: {c0}"
    },
    backgroundColor: '#333',
    xAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            fontSize: 14,
            textStyle: {
                color: "#b0caff"
            },
            formatter: function(val) {
                return `${val}%`
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.4)"
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            fontSize: 14,
            textStyle: {
                color: "#b0caff"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: 'rgba(255,255,255,0.2)'
            }
        },
        data: ['教育', '交通', '综治', '水利', '公安']
    },
    series: [{
            name: '',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#00bcff',
                }
            },
            barWidth: 20,
            data: [50, 20, 15, 10, 5]
        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 188, 255, 0.2)'
                }
            },
            barGap: '-100%',
            barWidth: 20,
            data: [100, 100, 100, 100, 100]
        }
    ]
};