option = {
    title: {
        text: '4月8日',
        textStyle: {
            color: '#fff', 
            fontSize: 20,
            align: 'center'
        },
        itemGap: 2
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        position: 'left',
        data: ['应有活动量', '接触客户度', '已成交客户数'],
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // marginLeft: 9,
            margin: 10,
            textStyle: {
                color: '#fff'
            },
            formatter: function(value, index) {
                return [
                    '{title|' + value + '} '
                ].join('\n')
            },
            rich: {},
            color: '#fff',
            fontSize: 20
        }
    }],
    grid: {
        left: 205
    },
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [78, 60, 90],
        barWidth: 45,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
                color: function(params) {
                    var num = ['#0ca6dc'].length;
                    return ['#0ca6dc'][params.dataIndex % num]
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}',
                color: '#fff',
                fontSize: 20
                
            }
        },
    }]
}