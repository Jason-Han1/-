var data = {
    year: ['2015', '2016', '2017', '2018', '2019'],
    legend: ['原材料', '设备', '设计', '制造', '封测'],
    color: ['#4ca273', '#2b8ec9', '#a87057', '#964264', '#61766c'],
    data: [
        [434.0, 443.2, 472.4, 519.0, 521.1], // 原材料
        [365.3, 412.4, 565.8, 645.0, 597.5],
        [79.1, 85.4, 93.6, 96.9, 102.5],
        [803.1, 778.6, 991.5, 1061.5, 984.2],
        [1433.2, 1482.4, 1908.6, 2332.2, 1883.1],
        [508.5, 506.0, 531.8, 539.2, 467.3]
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
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '13%',
    //     containLabel: true
    // },
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
        name: '单位：亿美元',
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
        type: 'bar',
        stack: '总量',
        barWidth: '20%',
        label: {
            show: false,
            position: 'insideRight'
        },
        data: data.data[i]
    })
}
myChart.setOption(option);