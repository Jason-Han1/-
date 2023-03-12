option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['1号传感器', '2号传感器', '3号传感器', '4号传感器', '5号传感器'],
        show: true,
    },
    grid: {
        left: '8%',
        right: '8%',
        top: '10%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 1, 2, 3, 4, 5, 6]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '1号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '2号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '3号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '4号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '5号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
    dataZoom: [{
        type: "inside",
        xAxisIndex: 0,
    },{
        type: "slider",
        yAxisIndex: 0
    }]
}