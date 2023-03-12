option = {
    color: ['#69c0ff', '#40a9ff', '#1890ff', '#096dd9'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['谨慎', '维持', '推荐', '强烈推荐']
    },
    grid: {
        top: 32,
        left: 48,
        right: 32,
        bottom: 48
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 2
            }
        }
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 2
            }
        },
        data: ['2017', '2016', '2015', '2014', '2013']
    },
    series: [{
        name: '谨慎',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        data: [20, 30, 25, 25, 20]
    }, {
        name: '维持',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        data: [30, 25, 20, 35, 20]
    }, {
        name: '推荐',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        data: [25, 20, 25, 15, 35]
    }, {
        name: '强烈推荐',
        type: 'bar',
        stack: 1,
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        data: [25, 25, 30, 25, 25]
    }]
}