option = {
    backgroundColor: '#142758',
    textStyle: {
        color: '#fff',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false,
    },
    yAxis: [
        {
            type: 'category',
            inverse: false,
            axisLabel: {
                show: true,
                margin: 50,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            data: ['有效', '待改进', '有效'],
        },
        {
            type: 'category',
            inverse: false,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
            },
            data: [18203, 23489, 29034],
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: 40,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: function (params) {
                        const colorList = ['#DC69AA', '#00CCFF', '#4EDBB3', '#c23531', '#2f4554', '#d48265', '#61a0a8'];
                        return colorList[params.dataIndex];
                    },
                },
            },
            data: [18203, 23489, 29034],
        },
        {
            type: 'bar',
            barWidth: 40,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: '#0D599F',
                },
            },
            data: [32000, 32000, 32000],
        },
    ],
};
