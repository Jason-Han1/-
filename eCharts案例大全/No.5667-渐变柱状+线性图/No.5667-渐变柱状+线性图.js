option = {
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            boundaryGap: false,
            // 坐标轴线
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#999"
                }
            },
            // 分割线
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#e5e5e5',
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#999"
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e5e5e5'
                }
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            barWidth: '25%',
            seriesLayoutBy: 'row',
            itemStyle: {
                barBorderRadius: [30, 30, 0, 0],
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {offset: 0, color: '#57FFE0'},
                        {offset: 0.3, color: '#3AA5C7'},
                        {offset: 1, color: '#3469E2'}
                    ]
                }
            }
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            barWidth: '25%',
            seriesLayoutBy: 'row',
            itemStyle: {
                barBorderRadius: [30, 30, 0, 0],
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {offset: 0, color: '#F78678'},
                        {offset: 0.5, color: '#C359D0'},
                        {offset: 1, color: '#963EF5'}
                    ]
                }
            }
        },
        {
            name:'平均温度',
            type:'line',
            color: "#0bcd74",
            smooth: true,
            symbol: 'circle',
            symbolSize: 14,
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#0bcd74'
                }
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 3
            },
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
