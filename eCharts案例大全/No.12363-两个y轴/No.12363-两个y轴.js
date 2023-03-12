var x_data = ['2时', '4时', '6时', '8时', '10时', '12时', '14时', '16时', '18时', '20时', '22时', '24时'],
    bar_data = ["60", "72", "59", "70", "71", "89", "64", "62", "71", "46", "39", "40"],
    line_data = ["-8", "-5", "-9", "0", "7", "4", "5", "3", "-8", "-5", "-12", "-11"]

option = {
    backgroundColor: "#fff",
    color: "#FF9F7F",
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(67,100,247,0.8)',
        padding: [10, 20],
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(67,100,247,0.08)'
            }
        }
    },
    legend: {
        data: ['湿度', '温度']
    },
    xAxis: [{
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        data: x_data
    }],
    yAxis: [

        {
            type: 'value',
            name: '湿度',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            position: 'right',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: "dataMin",
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            splitLine: {
                show: false
            },
            max: 25,
            position: 'left',
            axisLabel: {
                formatter: '{value} ℃'
            }
        }
    ],
    series: [{
            name: '湿度',
            type: 'bar',
            smooth: true,
            barWidth: 20,
            yAxisIndex: 0,
            itemStyle: {
                color: "#89C3F8"
            },
            data: bar_data
        },
        {
            name: '温度',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            yAxisIndex: 1,
            data: line_data
        }
    ]
};