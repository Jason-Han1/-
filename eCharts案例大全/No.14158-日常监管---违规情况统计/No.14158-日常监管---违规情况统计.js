option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['检查次数','违法违规数','违法违规率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '检查批次数',
            min: 0,
            max: 4500,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '违法违规率（%）',
            min: 0,
            max: 100,
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            }
        }
    ],
    series: [
        {
            name:'检查次数',
            type:'bar',
            itemStyle:{normal:{color:'#386AB7'}},
            data:[2990, 2900, 3133, 3433, 3233, 3333, 3133, 2933, 3033, 2630, 2730,2913],
        },
        {
            name:'违法违规数',
            type:'bar',
            itemStyle:{normal:{color:'#99cccc'}},
            data:[800, 833, 933, 1003, 933, 1083, 1150, 1329, 1473, 1003, 743,763],
        },
        {
            name:'违法违规率',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#ff9933'}},
            data:[26.8, 28.7, 29.8, 29.2, 28.9, 32.5, 36.8, 45.3, 48.6, 38.1, 27.2, 26.2],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
