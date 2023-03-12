option = {
    title: {
        // text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },

    },
    xAxis: {
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        name:'日期',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
    },
    yAxis: {
        name:'单位(h)',
    },
    color: ['#00E4DD'],
    series: [{
        name: '使用时长',
        type: 'line',
        smooth: true,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00E4DD30',
            }, {
                offset: 1,
                color: '#FFFFFF'
            }])
        },
        data:[220, 182, 191, 234, 290, 330, 310,323,223,454,313,335]
    }]
};