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
        data:['资产总额','购入资产金额']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2018-8','2018-9','2018-10','2018-11','2018-12','2019-1','2019-2','2019-3','2019-4','2019-5','2019-6','2019-7'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '资产总额(万元)',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}万元'
            }
        },
        {
            type: 'value',
            name: '购入资产金额万元',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value}万元 '
            }
        }
    ],
    series: [
        {
            name:'资产总额',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'购入资产金额',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
