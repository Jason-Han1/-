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
            data: ['2018年1-7月','2018年1-8月','2018年1-9月','2018年1-10月','2018年1-11月','2018年1-12月','2019年1-3月'
            ,'2019年1-4月','2019年1-5月','2019年1-6月','2019年1-7月','2019年1-8月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                interval:0,//横轴信息全部显示
                rotate:30,//度角倾斜显示
             }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：万元',
            min: 0,
            max: 120000000,
            interval: 20000000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '单位：%',
            min: -300,
            max: 1800,
            interval: 300,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'收入',
            type:'bar',
            data:[61052995.7, 67289782.5, 89545423.7,90171432.6, 110624121.4, 116381750.6, 30088211.2, 51824936.4, 24731046.9, 89156032.3, 96069605.7,118051152.3]
        },
        {
            name:'利润',
            type:'bar',
            data:[29286685.1, 30875114.7, 48285216.6,43390267.9, 58047281.3, 56609821.6, 14649524.4, 31277404.3, 2346070.3, 60398771.2, 63222767.4,80858192.5]
        },
        {
            name:'收入增速',
            type:'line',
            yAxisIndex: 1,
            data:[-16.7, -28.2, -14.4,-26.6, -21.6, -26.1, 99.6, 135.0, -87.2, 69.3, 57.4, 75.4]
        },
        {
            name:'利润增速',
            type:'line',
            yAxisIndex: 1,
            data:[-37.1, -50.3, -28.7,-46.8,-38.0,-42.0, 1590.0, 845.0, -40.5, 147.0, 116.0, 162.0]
        }
    ]
};
