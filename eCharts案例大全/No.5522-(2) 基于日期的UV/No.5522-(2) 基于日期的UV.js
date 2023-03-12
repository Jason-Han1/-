option = {
    title: {
        text: '(2) 基于日期的UV',
        padding:[70, 25]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['11-25至12-01', '12-01至12-08'],
        top:100
    },
    grid: {
        top: 200,
        bottom: 200
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
            },
            data: ['11-25\n\n周六', '11-26\n\n周日','11-27\n\n周一','11-28\n\n周二','11-29\n\n周三','11-30\n\n周四','12-01\n\n周五']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
            },
            data: ['12-02\n\n周六', '12-03\n\n周日','12-04\n\n周一','12-05\n\n周二','12-06\n\n周三','12-07\n\n周四','12-08\n\n周五']
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 100000,
            max: 300000
        }
    ],
    series: [
        {
            name: '11-25至12-01',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            label: {
                show: true,
            },
            data: [183584,186121,184659,184644,186905,189976,192457]
        },
        {
            name: '12-01至12-08',
            type: 'line',
            smooth: true,
            label: {
                show: true,
            },
            data: [252526,251635]
        }
    ]
};