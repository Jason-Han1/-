var data = [1, 0, 0, 0, 0]
var titlename = ['Java', 'Hadoop', 'Api', 'Face', 'AI'];
var valdata = [100, 100, 100, 100, 100]
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
option = {
    backgroundColor: '#0e2147',
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
            color: '#fff',
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    // padding: 5,
                    align: 'center',
                    width: 15,
                    height: 15
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff',
            },
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
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100],
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
            }
        }
    }, ]
};