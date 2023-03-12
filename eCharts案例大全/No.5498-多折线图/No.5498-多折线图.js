var data = {
    year: ['2015', '2016', '2017', '2018', '2019'],
    legend: ['原材料', '设备', '设计', '制造', '封测'],
    color: ['#4ca273', '#2b8ec9', '#a87057', '#964264', '#61766c'],
    data: [
        [-1.5, 2.1, 6.6, 9.9, 0.4], // 原材料
        [-2.8, 12.9, 37.2, 14.0, -7.4],
        [6.6, 8.0, 9.6, 3.5, 5.8],
        [-12.1, -3.1, 27.3, 7.1, -7.3],
        [7.4, 3.4, 28.8, 22.2, -19.3],
        [-3.1, -0.5, 5.1, 1.4, -13.3]
    ]
}

var option = {
    backgroundColor: "#000518",
    color: data.color,
    legend: {
        top: 10,
        textStyle: {
            fontSize: 14,
            color: '#96A4F4',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0,
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        data: data.year
    },
    yAxis: {
        type: 'value',
        name: '单位：%',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            // width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            // show:false,
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: []
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'line',
        stack: '总量',
        symbolSize: 10,
        symbol: 'circle',
        smooth: true, // 圆滑
        lineStyle: {
            width: 5,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: data.color[i]
                },
                {
                    offset: 1,
                    color: data.color[i]
                }
            ]),
            shadowColor: 'rgba(158,135,255, 0.3)',
            shadowBlur: 5,
            shadowOffsetY: 5
        },
        data: data.data[i],
    })
}
myChart.setOption(option);