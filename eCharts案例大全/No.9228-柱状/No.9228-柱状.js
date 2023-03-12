var data = [88,58, 30, 35, ]
var titlename = ['正常', '违章', '漏气', '软管老化'];
var valdata = [583, 334, 234, 263]
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448'];
option = {
    backgroundColor: '#fff',
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
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
            textStyle: {
                color: function(value, index) {
                    var num = myColor.length;
                    return myColor[index % num]
                }
            },
            formatter: function(value, index) {
                return [
                    '{title|' + value + '} '
                ].join('\n')
            },
            rich: {}
        },

    }, {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
            textStyle: {
                color: function(value, index) {
                    var num = myColor.length;
                    return myColor[index % num]
                }
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }]
};