option = {
    backgroundColor: '#fff',
    title: {
      text: '折线图——实际与指标对比'
    },
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
    legend: {
        top: 10,
        left: 260,
        show: true,
        orient: 'horizontal',
        data: ['A实际完成数', 'A指标完成数', 'B实际完成数', 'B指标完成数']
    },
    grid: {
        left: 30,
        right: 60,
        top: 40,
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ["2019-10", "2019-11", "2019-12", "2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09"],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#E8E8E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'A实际完成数',
        type: 'line',
        smooth: true,
        data: [3, 1, 0, 5, 10, 24, 12, 17, 37, 1, 5, 0]
    }, {
        name: 'A指标完成数',
        type: 'line',
        lineStyle: {
            type: 'dotted'
        },
        data: [2, 2, 2, 10, 10, 10, 15, 15, 15, 15, 15, 15]
    }, {
        name: 'B实际完成数',
        type: 'line',
        smooth: true,
        data: [2, 3, 1, 1, 1, 23, 0, 11, 15, 0, 2, 0]
    }, {
        name: 'B指标完成数',
        type: 'line',
        lineStyle: {
            type: 'dotted'
        },
        data: [1, 1, 1, 4.34, 4.34, 4.34, 5.66, 5.66, 5.66, 6.99, 6.99, 6.99]
    }]
}