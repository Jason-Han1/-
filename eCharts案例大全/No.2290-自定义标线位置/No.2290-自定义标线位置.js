option = {
    backgroundColor: 'rgba(0, 46, 78, .4)',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '8px',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        backgroundColor: 'rgba(89,129,201, 0.7)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#fff',
        },
        formatter: (params) => {
            var result = `<h3>${params[0].axisValueLabel}</h3>`;
            for (let i = 0; i < params.length; i++) {
                if (params[i].seriesName !== '') {
                    result += params[i].seriesName + ':' + params[i].data + '</br>';
                }
            }
            return result;
        },
    },
    legend: {
        show: true,
        right: 10,
        icon: 'pin',
        itemWidth: 15,
        itemHeight: 6,
        textStyle: {
            color: '#fff',
            fontSize: 9,
        },
        data: ['北区', '南区', '西区'],
    },
    xAxis: [
        {
            type: 'category',
            name: '',
            nameTextStyle: {
                fontSize: 12,
                color: 'red',
                lineHeight: 90,
            },
            axisLabel: {
                color: '#fff',
                fontSize: 11,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0A3E63',
                    width: 2,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#197584',
                },
            },
            data: ['笨', '甲苯', '二甲苯', '臭氧'],
            z: 999,
            zlevel: 999,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            interval: 1,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: function () {
                        // if (params == 4) return 'red';
                        return '#fff';
                    },
                    fontSize: 9,
                },
            },
        },
    ],
    series: [
        {
            name: '北区',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#17F8FF',
            },
            symbolRepeat: true,
            symbolSize: [14, 2],
            symbolOffset: [-24, 0],
            symbolMargin: 1,
            symbolPosition: 'start',
            z: 1,
            data: [2, 2.5, 4.5, 3],
            markLine: {
                symbolSize: 0,
                symbol: ['none', 'none'], //去掉箭头
                data: [
                    [
                        {
                            yAxis: 5,
                            name: '5',
                            label: {
                                show: true,
                            },
                            x: "12%",
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                    width: 2,
                                },
                            },
                        },
                        {
                            yAxis: 5,
                            x: "24.8%",
                        },
                    ],
                ],
            },
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#022458',
            },
            symbolRepeat: true,
            symbolSize: [14, 2],
            symbolOffset: [-24, 0],
            symbolMargin: 1,
            symbolPosition: 'start',
            z: -20,
            data: [5, 5, 5, 5],
        },
        {
            name: '南区',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#04E333',
                },
            },
            symbolRepeat: true,
            symbolSize: [14, 2],
            symbolOffset: [0, 0],
            symbolMargin: 1,
            symbolPosition: 'start',
            z: 0,
            data: [2, 2.5, 4.5, 3],
            markLine: {
                symbolSize: 0,
                symbol: ['none', 'none'], //去掉箭头
                data: [
                    [
                        {
                            yAxis: 4,
                            name: '4',
                            label: {
                                show: true,
                            },
                            x: "52.5%",
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                    width: 2,
                                },
                            },
                        },
                        {
                            yAxis: 4,
                            x: "66.5%",
                        },
                    ],
                ],
            },
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#022458',
            },
            symbolRepeat: true,
            symbolSize: [14, 2],
            symbolOffset: [0, 0],
            symbolMargin: 1,
            symbolPosition: 'start',
            z: -20,
            data: [5, 5, 5, 5],
        },
        {
            name: '西区',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#FFDD21',
            },
            symbolRepeat: true,
            symbolSize: [14, 2],
            symbolOffset: [24, 0],
            symbolMargin: 1,
            symbolPosition: 'start',
            z: 0,
            data: [2, 2.5, 4.5, 3],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#022458',
            },
            symbolRepeat: true,
            symbolSize: [14, 2],
            symbolOffset: [24, 0],
            symbolMargin: 1,
            symbolPosition: 'start',
            z: -20,
            data: [5, 5, 5, 5],
        },
    ],
};
