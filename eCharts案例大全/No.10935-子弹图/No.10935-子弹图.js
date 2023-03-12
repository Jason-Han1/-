option = {
    backgroundColor: '#FFF',
    title: {
        text: '销售净额趋势',
        subtext: '数据纯属虚构',
        left: '10%',
        top:'5%',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        //formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
            type: 'shadow'
        }
    },
     toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['本期', '目标量', '去年同期'],
        icon: 'roundRect',
        left: 'center',
         top:'5%',
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '50%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        //max:120,
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} '
        }
    },
    xAxis: {
        boundaryGap: true,

        axisLine: {
            show: true,

        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 16,
                fontWeight: 'bolder',
            }
        },
        data: [
            '1月 ', '2月', '3月', '4月', '5月','6月 ', '7月', '8月', '9月', '10月', '11月','12月'
        ]
    },

    series: [{
            name: '去年同期',
            type: 'bar',
            barGap: '-200%',
            barWidth: 10,
            z: 10,
            itemStyle: {
                normal: {
                    color: '#61A5E8'
                }
            },
            data: [300, 194, 297, 578, 468,578,265, 390, 300, 390, 585,300]
        },
        {
            name: '目标量',
            type: 'scatter',
            symbol: 'rect',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#7ECF51'
                }
            },
            symbolSize: [50, 5],
            symbolOffset: ["-10%", "-10%"],
            z: 20,
            data: [265, 390, 300, 390, 585,300, 194, 297, 578, 468,578,468]
        },
        {
            name: '本期',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: '#FCCE10'
                }
            },
            stack: 'total',
            data: [300, 400, 450, 480, 570,390, 300, 390, 585,300, 194,390]
        }
    ]
};