option = {
    backgroundColor: '#001037',
    grid: {
        top: '10%',
        left: '5%',
        right: '2%',
        bottom: '14%',
    },
    tooltip: {
        show: false,
        trigger: 'axis',
        backgroundColor: 'rgba(65,114,231,0.8)',
        formatter: function (item) {
            return item[0].axisValueLabel + '<br />' + item[0].seriesName + ': ' + item[0].data;
        },
    },
    yAxis: {
        show: false,
        data: ['1月'],
        axisLine: {
            lineStyle: {
                color: '#0a4980',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#ADD6FF',
                fontSize: 12,
            },
        },
    },
    xAxis: [
        {
            show: false,
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0a4980',
                },
            },
            axisLabel: {
                show: true,
                fontSize: 12,
                textStyle: {
                    color: '#ADD6FF',
                },
            },
        },
    ],
    series: [
        {
            name: '机器故障率',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(5,27,56)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(36,188,255)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: [75],
            z: 0,
            zlevel: 0,
            label: {
                show: true,
                position: 'right',
            },
        },
        {
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#011140',
                },
            },
            symbolRepeat: 11,
            // symbolMargin: 300,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [4, 15],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: [100],
            z: 1,
            zlevel: 0,
        },
        {
            name: '机器故障率',
            type: 'bar',
            barGap: '-125%',
            data: [100],
            barWidth: 18,
            label: {
                show: true,
                position: ['0%', '-100%'],
                formatter: '机具故障率',
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    barBorderColor: 'rgb(148,217,249)',
                    barBorderWidth: 1,
                },
            },
            z: 2,
        },
    ],
};
