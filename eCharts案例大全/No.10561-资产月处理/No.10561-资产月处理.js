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
        data:['资产总额','新增资产','处置资产']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2019-1','2019-2','2019-3','2019-4','2019-5','2019-6','2019-7','2019-8','2019-9','2019-10','2019-11','2019-12'],
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
            name: '资产变动（万元）',
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
            name:'新增资产',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
                {
            name:'处置资产',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'资产总额',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
