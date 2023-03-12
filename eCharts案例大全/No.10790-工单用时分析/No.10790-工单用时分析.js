option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var result = '' + params[0].name + '<br/>'
            params.forEach(item => {
                result += item.seriesName + ' : ' + item.value + 'h<br/>'
            })
            return result
        }
    },
    toolbox: {
        show: true,
        right: '4%',
        feature: {
            magicType: {
                show: true,
                type: ['stack', 'tiled']
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        left: '100px',
        bottom: '0px',
        data: ['工单总耗时', '平均工单耗时', '平均接单耗时', '平均处理耗时'] // 系列名称
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    color: ['#FF6766', '#339A99', '#FFCC33', '#4876E7'],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['7/11', '7/10', '7/9', '7/8', '7/7', '7/6', '7/5'] // 类目值
    },
    yAxis: {
        type: 'value',
        name: '小时',
        axisLabel: {
            formatter: function(value) {
                // console.log(arguments);
                return value ? `${value}h` : 0
            }
        }
    },
    series: [{
            name: '工单总耗时', // 系列名称
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210] // 数值
        },
        {
            name: '平均工单耗时',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [22, 18, 19, 23, 29, 33, 31]
        },
        {
            name: '平均接单耗时',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [15, 23, 20, 14, 19, 33, 40]
        },
        {
            name: '平均处理耗时',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [30, 32, 31, 34, 30, 30, 30]
        }

    ]
}