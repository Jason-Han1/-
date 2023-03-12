option = {
    title: {
        text: 'Issues解决率趋势分析',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['6/1','6/4','6/7','6/10','6/13','6/16','6/19','6/21','6/24','6/27','6/30','7/2','7/5','7/8','7/11']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'月度解决率',
            type:'line',
            data:[92, 96, 99, 91, 96, 103, 100,92, 96, 99, 91, 96, 103, 100,115],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'累计解决率',
            type:'line',
            data:[81, 90, 96, 81, 86, 93, 90,81, 90, 96, 81, 86, 93, 90,100],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};
