var timeData = ['10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40'];

option = {
    color: ["#FFC25C", "#FD666D"],
    title: {
        text: '收发数据统计图',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    grid: [{
        height: '40%'
    }, {
        top: '47%',
        height: '40%',
        zlevel: 100
    }],
    xAxis: [{
            show: false,
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: false
            },
            data: timeData
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            axisLine: {
                onZero: true
            },
            data: timeData,
            position: 'top'

        }
    ],
    yAxis: [{
            name: '发送',
            type: 'value',
            areaStyle: {},
            areaColor: 'red'
        },
        {
            gridIndex: 1,
            name: '接收',
            type: 'value',
            inverse: true
        }
    ],
    series: [{
            name: '发送',
            type: 'line',
            symbolSize: 8,
            hoverAnimation: false,
            data: [
                200, 1000, 6783, 1234, 768, 1024, 2048, 799
            ],
            areaStyle: {}
        },
        {
            name: '接收',
            type: 'line',
            symbol: 'circle',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [
                200, 1000, 6783, 1234, 768, 1024, 2048, 799
            ],
            areaStyle: {}
        }
    ]
};