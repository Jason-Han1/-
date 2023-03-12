option = {
    title: {
        text: '每日申请、实际乘车对比',
        subtext: '2019-04-01至2019-04-14',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['申请人数', '实际乘车人数'],
        top: 'bottom',

    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            formatter: function(value, index) {
                return value.substring(5)
            }
        },
        data: ['2019-04-01', '2019-04-02', '2019-04-03', '2019-04-04', '2019-04-05', '2019-04-06', '2019-04-07', '2019-04-08', '2019-04-09', '2019-04-10', '2019-04-11', '2019-04-12', '2019-04-13', '2019-04-14']
    }],
    yAxis: [{
        type: 'value',
        name: '人次',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
            name: '申请人数',
            type: 'bar',
            data: [544, 513, 410, 161, 32, 60, 73, 204, 386, 368, 357, 129, 61, 60, ],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
        },
        {
            name: '实际乘车人数',
            type: 'bar',
            data: [443, 418, 340, 128, 28, 48, 60, 186, 358, 338, 336, 115, 56, 57, ],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
        }
    ]
};