var data = [70, 34, 60, 78, 69]
var titlename = ['第一个', '第二个', '第三个', '第四个', '第五个'];
var valdata = [683, 234, 234, 523, 345]
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
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100],
        barWidth: 30,
        itemStyle: {
            normal: {
                // borderColor: '#E6E7E9',
                borderWidth: 3,
                barBorderRadius: 15,
                color: 'rgba(102, 102, 102,0.5)'
            }
        }
    }, {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color:' #56A7FF'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }, ]
};