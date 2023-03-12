app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
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
        data:['分析总数量','分析成功率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2019-02-12','2019-02-11','2019-02-10','2019-02-09','2019-02-08','2019-02-07','2019-02-06'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '分析总数量',
            min: 0,
            max: 40,
            interval: 5,
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        {
            type: 'value',
            name: '分析成功率',
            min: 0,
            max: 100,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'分析总数量',
            type:'bar',
            data:[35, 21, 30, 28, 10, 12, 25]
        },
        {
            name:'分析成功率',
            type:'line',
            yAxisIndex: 1,
            data:[98.5, 85.5, 92.5, 89.6, 10, 45.5, 87.6]
        }
    ]
};
