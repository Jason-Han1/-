option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var result = '' + params[0].name + '<br/>';
            var unit = '';
            params.forEach(item => {
                unit = item.seriesType === 'bar' ? '%' : '<br/>';
                result += item.seriesName + ' : ' + item.value + unit;
            });
            return result;
        }
    },
    legend: {
        data: ['工单数', '满意度'],
        right: '10%',
        top: 20,
        textStyle: {
            color: '#606683'
        }
    },
    color: ['#4F7FFF', '#349A99'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30']
    },
    yAxis: [{
        type: 'value',
        name: '工单数',
        position: 'left',
        // nameLocation: 'center'
    }, {
        type: 'value',
        name: '满意度',
        position: 'right',
        axisLabel: {
            formatter: '{value}%'
        },
        max: 100,
        splitLine: {
            show: true
        },
        // nameLocation: 'center',
        boundaryGap: [0.2, 0.2]
    }],
    series: [{
            name: '工单数',
            type: 'line',

            lineStyle: {
                color: '#4F7FFF'
            },
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '满意度',
            type: 'bar',
            yAxisIndex: 1,
            barMaxWidth: '20%',
            label: {
                show: true,
                position: 'top',
                formatter: '{c}%'
            },
            stack: '总量',
            lineStyle: {
                color: '#349A99'
            },
            data: [0.6 * 100, 0.75 * 100, 0.51 * 100, 0.64 * 100, 0.75 * 100, 0.8 * 100, 70]
        }
    ]
}