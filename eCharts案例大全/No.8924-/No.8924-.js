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
            max: 800000,
            interval: 100000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '单位：%',
            min: -200,
            max: 400,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'收入',
            type:'bar',
            data:[414322.4, 421872.4, 406282.7,441426.6, 436322.4, 446433.6, 
            453598.2, 436753.4, 426734.9, 447484.3, 461602.7,452432.3]
        },
        {
            name:'利润',
            type:'bar',
            data:[283786.1, 297630.7, 247423.6,268852.9, 312575.3, 328421.6, 
            347578.4, 314687.3,324102.3, 294587.2, 351236.4,324567.5]
        },
        {
            name:'收入增速',
            type:'line',
            yAxisIndex: 1,
            data:[12.7, 23.2, 14.4,26.6, 21.6, 26.1, 34.6, 36.0, 39.2, 32.3, 36.4, 37.4]
        },
        {
            name:'利润增速',
            type:'line',
            yAxisIndex: 1,
            data:[37.1, 50.3, 28.7,46.8,38.0,42.0, 35.0, 43.0, 40.5, 46.0, 42.0, 43.0]
        }
    ]
};
