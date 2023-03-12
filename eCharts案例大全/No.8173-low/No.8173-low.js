option = {
    grid: {
        left: '20%',
        right: '40%',
        top: '10%',
        height: '75%',
        containLabel: true,
        z: 22
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false, //不显示坐标轴线
            margin: '10%'
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        name: '',
        type: 'value',
        max: 150, //设置最大值
        min: 0, //最小值
        splitNumber: 6,
        nameTextStyle: {
            color: '#000',
            padding: [0, 0, 0, 0]
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
    }],
    series: [{
        data: [100.5],
        type: 'bar',
        // xAxisIndex: 0,
        // yAxisIndex: 0,
        barWidth: '68%',
        itemStyle: {
            normal: {
                color: '#FF8040',
                barBorderColor: '#000',
                barBorderWidth: 2,
            }
        },
        zlevel: 11
    }, {
        type: 'bar',
        barGap: '-115%',
        itemStyle: {
            color: '#DCBA66',
            opacity: 0.8,
            barBorderColor: '#000',
            barBorderWidth: 2,
        },
        barWidth: '90%',
        data: [150],
        z: 5
    }]
};