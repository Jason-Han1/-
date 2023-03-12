
let xData = ['开关电源', '铅酸电池', 'UPS设备', '普通空调', '机房环境', '智能电表'],
    yData = [22,52,55,12,35,44];


option = {
    backgroundColor: '#062544',
    grid: {
        top: '10%',
        left: '-5%',
        bottom: '5%',
        right: '5%',
        containLabel: true,
    },
     tooltip: {
        trigger: 'item',
    },
    animation: false,
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd',
                },
                margin: 30,
            },
            interval: 1,
        },
    ],
    yAxis: [
        {
            show: true,
            type: 'value',
          
        },
    ],
    series: [
        {
            name: '上部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#5BFCF4',
                },
            },
            color: '#5BFCF4',
            data: yData,
        },
        {
            name: '底部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            z: 12,
            color: '#5BFCF4',
            data: yData,
        },
        {
            name: '内层波浪',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [50, 15],
            symbolOffset: [0, 12],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#5BFCF4',
                    borderType: 'solid',
                    borderWidth: 8,
                },
            },
            data: yData,
        },
        {
            name: '外层波浪',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [70, 20],
            symbolOffset: [0, 18],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: 'rgba(91,252,244,0.5)',
                    borderType: 'solid',
                    borderWidth: 5,
                },
            },
            data: yData,
        },
        {
             name: '设备数量',
            type: 'bar',
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: 'rgba(210,210,210,0.3)',
                        },
                        {
                            offset: 1,
                            color: '#5BFCF4',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
            data: yData,
        },
    ],
};
