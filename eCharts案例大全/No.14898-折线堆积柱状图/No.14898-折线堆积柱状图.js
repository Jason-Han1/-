option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['今日来客人数', '今日就餐人数', '今日客单价']
    },
    xAxis: [{
        type: 'category',
        data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    }],
    yAxis: [{
        type: 'value',
        name: '人数',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
            formatter: '{value}人'
        }
    }, {
        type: 'value',
        name: '价格',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
            formatter: '{value}元'
        }
    }],
    series: [{
        name: '今日来客人数',
        type: 'bar',
        data: [25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
    }, {
        name: '今日就餐人数',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        data: [28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
    }, {
        name: '今日客单价',
        type: 'line',
        yAxisIndex: 1,
        data: [3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }]
};