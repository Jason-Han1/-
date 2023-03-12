option = {

    title: {
        text: ''
    },
     tooltip: {
        trigger: 'axis',
        formatter: '{b1}<br/>{a1} : {c1}分<br/>{a0} : {c0}分',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10 '],
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        min: 0,
        axisTick: {
            show: false
        },
        // max:100
    },
    series: [{
            name: '预估成绩',
            type: 'line',
            color: ['#00CC00'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [34, 37, 44, 43, 60, 70, 80, 92, 98, 120]
        },
        {
            name: '平均分',
            type: 'line',
            label: {
                normal: {
                    show: false
                }
            },
            data: [100,100,100,100,100,100,100,100,100,100]
        },
    ],
    dataZoom: [{
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'filter',
        startValue: 0,
        endValue:9,
        zoomLock: true,
        zoomOnMouseWheel: false
    }]
};