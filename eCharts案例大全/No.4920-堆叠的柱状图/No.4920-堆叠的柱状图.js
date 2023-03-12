option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: (param, ticket, callback) => {
            var str = ''
            for (const item of param) {
                item.seriesName && (str += item.marker + ' ' + item.seriesName + '：' + item.value + '<br>')
            }

            return str
        }
    },
    legend: {
        data: ['高危', '中低'],
        right: '20px'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: '100%',
        containLabel: true
    },
    xAxis: {
        data: ['业务系统1', '业务系统1', '业务系统1', '业务系统1', '业务系统1', '业务系统1', '业务系统1']
    },
    yAxis: {
        type: 'value'

    },
    series: [{
            name: '高危',
            type: 'bar',
            color: '#F56C6C',
            barWidth: 30,
            stack: '总量',

            data: [50, 60, 59, 50, 50, 50, 50]
        },
        {
            name: '中低',
            type: 'bar',
            stack: '总量',
            color: '#F5AF45',
            barWidth: 30,

            data: [70, 70, 70, 70, 70, 70, 70]
        },

        {
            name: '',
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0, ],
            stack: '总量',
            barWidth: 30,
            label: {
                show: true,
                position: 'top',
                color: 'black'
            }
        }

    ]
};
var series = option.series

function getSum(params) {

    var datavalue = 0
    for (var i = 0; i < series.length; i++) {
        datavalue += series[i].data[params.dataIndex]
    }
    return datavalue
}

series[series.length - 1].label.formatter = getSum
myChart.setOption(option)
myChart.on('legendselectchanged', (obj) => {
    function getSum(params) {
        var datavalue = 0
        for (var i = 0; i < series.length; i++) {
            if (obj.selected[series[i].name]) {
                datavalue += series[i].data[params.dataIndex]
            }
        }
        return datavalue
    }
    series[series.length - 1].label.formatter = getSum
    myChart.setOption(option)
})