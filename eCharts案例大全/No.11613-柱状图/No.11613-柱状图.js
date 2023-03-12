option = {
    backgroundColor: "#05224d",
    tooltip: {},
    grid: {
        left: '7%',
        right: '10%',
        bottom: '3%',
        top: '3%',
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ["5", "6", "7", "8", "9", '10', '11', '12', '1', '2', '3', '4'], //横坐标
        axisTick: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            rotate: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#fff',
                width: '1  ', //坐标线的宽度

            }
        },
    },
    yAxis: {
        splitLine: {
            show: false,
            lineStyle: {
                color: '#40A1EA', //网格横线颜色
                width: 1,
                type: 'solid'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12, //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
        },
    },
    series: [{
        name: '',
        type: 'bar',
        barWidth: 15,
        data: [30, 49, 26, 60, 26, 29, 30, 40, 66, 33, 55, 20], //数据
        itemStyle: {
            normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                barBorderRadius: [6, 6, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#125ee8'
                }, {
                    offset: 1,
                    color: '#20b8ff'
                }])

            }
        },
    }]
};