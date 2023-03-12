let dataX= ['人防办', '人防办', '人防办', '人防办', '人防办', '人防办', '人防办', '人防办']
let dataY =[98, 38, 48, 35, 92, 28, 93, 85]
let dataY1 =[400, 500, 300, 300, 300, 400, 400, 400, 300]
var option = {
    backgroundColor: '#0D2753',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                dataX[params[0].dataIndex] +
                '<br/>满意度：' +
                dataY[params[0].dataIndex] +
                '%' +
                '<br> 处理量：' +
                dataY1[params[0].dataIndex] +
                ''
            );
        },
    },
    grid: {
        top: '10%',
        bottom: '5%',
        left: '5%',
        right: '5%',
        containLabel: true,
    },
    legend: {
        data: ['回访数量', '满意率'],
        left: '15',
        top: '15',
        textStyle: {
            padding:[4,0,0,0],
            color: '33FFFF',
        },
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 25,
    },
    xAxis: {
        type: 'category',
        data: dataX,
        axisLine: {
            lineStyle: {
                color: 'rgba(66, 192, 255, .3)',
            },
        },
        
        axisLabel: {
        rotate: -45,
            textStyle: {
                color: '#33FFFF',
            },
        },
    },

    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#5FBBEB',
                },
            },
            axisLine: {
                lineStyle: {
                    fontSize:12,
                    color: 'rgba(66, 192, 255, .3)',
                },
            },
        },
        {
            type: 'value',
            name: '(%)',
            nameTextStyle: {
                color: '#d2d2d2',
            },
            max:'100',
            min:'0',
            scale: true,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: 'rgba(66, 192, 255, .3)',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                formatter: '{value} %', //右侧Y轴文字显示
                textStyle: {
                    fontSize:12,
                    color: '#42C0FF',
                },
            },
        },
    ],
    series: [
        {
            name: '回访数量',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#29acff',
                        },
                        {
                            offset: 1,
                            color: '#4bdfff',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            data: dataY1,
        },
        {
            name: '满意率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示

            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                normal: {
                    color: '#ffa43a',
                    borderColor: 'rgba(255, 234, 0, 0.5)', //圆点透明 边框
                    borderWidth: 5,
                },
            },
            lineStyle: {
                color: '#ffa43a',
            },

            data: dataY,
        },
    ],
};
