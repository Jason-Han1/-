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
        data:['财务消费','留资量','下发量','留资成本','下发成本']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2018-05-01:2018-05-01','2018-05-08:2018-05-14','2018-05-15:2018-05-21','2018-05-022:2018-05-28'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '财务消费',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 元'
            }
        },
                {
            type: 'value',
            name: '下发量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '留资量',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} 个'
            }
        }
    ],
    series: [
        {
            name:'财务消费',
            type:'bar',
            data:[100,120, 115, 98]
        },
             
        {
            name:'留资量',
            type:'bar',
            data:[20.26, 25.29, 29.0, 26.4, 28.7, 27, 31.6, 18.2, 28.7, 28.8, 26.0, 22.3]
        },
           {
            name:'下发量',
            type:'bar',
            data:[20, 49, 70, 23.2]
        },{
            name:'留资成本',
            type:'line',
            yAxisIndex: 1,
            data:[52.0, 40.2, 73.3, 54.5, 16.3, 50.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            name:'下发成本',
            type:'line',
            yAxisIndex: 1,
            data:[10.0, 12.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 16.2]
        }
    ]
};
