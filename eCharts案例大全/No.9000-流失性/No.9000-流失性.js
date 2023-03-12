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
        data:['收入','利润']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2018年7月','2018年8月','2018年9月','2018年10月','2018年11月','2018年12月','2019年1月'
            ,'2019年2月','2019年3月','2019年4月','2019年5月','2019年6月'],
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
            max: 800,
            interval: 100,
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
            data:[610.7, 500.5, 460.7,443.6, 410.4, 400.6, 360.2, 320.4, 246.9, 302.3,
            190.7,112.3]
        },
        {
            name:'利润',
            type:'bar',
            data:[295.1, 314.7, 298.6,267.9, 211.3, 191.6, 174.4, 154.3,
            130.3, 171.2, 127.4,102.5]
        }
    ]
};
