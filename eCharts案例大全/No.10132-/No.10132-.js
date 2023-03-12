var data = [70, 34, 60, 78]
var titlename = ['明洞', '主洞掘进', '初期支护', '二次衬砌'];
var valdata = [683, 234, 234, 523]
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448'];
option = {
    backgroundColor: '#fff',
    title: {
        "text": "项目",
        textStyle: {
            color: '#000',
        }
    },
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
            color: '#797979',
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#3399FE',
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
                color: '#000',
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
        data: [100, 100, 100, 100],
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