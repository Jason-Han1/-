var data = {

    area: ['供应商', '供应商', '供应商', '供应商', '供应商', '供应商', '供应商', '供应商', '供应商'],
    legend: ['米', '肉食', '油', '面/面制品', '蔬菜', '调料', '鸡蛋', '豆/豆制品'],
    data: [
        [1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
        [320, 302, 301, 334, 390, 330, 320, 100, 50],
    ]

}
// var colors = ['#4C98FB', '#83CCE7', '#26C7C8', '#73DEBD', '#26C978', '#8CDF6C', '#FBD657', '#F56679', '#E07BCE', '#9D50E0', '#634FDA']
var colors = ['#D67BFE', '#927BFE', '#127CF3', '#38D7E8', '#14ED34', '#FDF805', '#F49607', '#CA310E', ]
var option = {
    title: {
        // text: '供应商菜品交易量',
        // left: 19,
        top: 15,
        textStyle: {
            color: '#fff'
        }
    },
    color: colors,
    legend: {
        top: 10,
        // left: 200,
        align: 'auto',
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 14,
            color: '#96A4F4',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
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
        data: data.area
    },
    yAxis: {
        name: '(吨)',
        type: 'value',
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
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: [

    ]
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '30',
        label: {
            show: false,
            position: 'insideRight'
        },
        data: data.data[i]
    })
}
myChart.setOption(option);