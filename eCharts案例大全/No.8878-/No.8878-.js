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
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data:['收入','利润','收入增速','利润增速']
    },
    xAxis: [
        {
            type: 'category',
            data: ['AAA',
            'AA','A','B','C'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                interval:0,//横轴信息全部显示
                rotate:0,//度角倾斜显示
             }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：个',
            min: 0,
            max: 500,
            interval: 100,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            type:'bar',
            barWidth : 30,
            data:[211,362,195,122,42]
        }
    ]
};
