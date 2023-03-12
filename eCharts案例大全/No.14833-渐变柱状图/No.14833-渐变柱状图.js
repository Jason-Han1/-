option = {
    backgroundColor: '#ffffff',
    color: ['#57acff', '#2c8cff', '#004cad', '#f5a623', '#d0011b'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        padding: 10
    },
    legend: {
        show: true,
        bottom: '30px',
        icon: 'circle',
        data: [{
            name: '0-1年',
            textStyle: {
                color: '#57acff'
            },
        }, {
            name: '1-2年',
            textStyle: {
                color: '#2c8cff'
            },
        }, {
            name: '2-3年',
            textStyle: {
                color: '#004cad'
            },
        }, {
            name: '3-5年',
            textStyle: {
                color: '#f5a623'
            },
        }, {
            name: '5年以上',
            textStyle: {
                color: '#d0011b'
            },
        }],
    },
    grid: {
        left: '2%',
        right: '5%',
        containLabel: true
    },
    xAxis: {
        name: '日期',
        show: true,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            fontSize: 14,
        },
        data: ['08/30', '08/31', '09/01', '09/02', '09/03', '09/04', '09/05', '09/06', '09/10', '09/11', '09/12']
    },
    yAxis: [{
        nameLocation: 'start',
        nameTextStyle: {
            color: '#666666',
            fontSize: 14,
        },
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eeeeee',
            }
        },
        splitLine: {
            show: false,
        },
    }],
    series: [{
        name: '0-1年',
        type: 'bar',
        stack: '数量',
        barWidth: 19,
        data: [20, 32, 26, 37, 48, 59, 20, 23, 22, 12, 32]
    }, {
        name: '1-2年',
        type: 'bar',
        stack: '数量',
        barWidth: 19,
        data: [10, 30, 26, 37, 48, 19, 48, 32, 44, 23, 23]
    }, {
        name: '2-3年',
        type: 'bar',
        stack: '数量',
        barWidth: 19,
        data: [23, 33, 26, 37, 48, 19, 48, 32, 44, 23, 21]
    }, {
        name: '3-5年',
        type: 'bar',
        stack: '数量',
        barWidth: 19,
        data: [23, 33, 26, 37, 48, 19, 48, 32, 44, 12, 20]
    }, {
        name: '5年以上',
        type: 'bar',
        stack: '数量',
        barWidth: 19,
        data: [23, 33, 26, 37, 48, 19, 48, 32, 44, 15, 16]
    }]
};