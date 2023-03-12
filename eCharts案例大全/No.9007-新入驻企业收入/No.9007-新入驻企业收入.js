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
            max: 1200000,
            interval: 200000,
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
            data:[610295.7, 672982.5, 894523.7,901432.6, 1102421.4, 1163150.6, 300811.2, 584936.4, 247046.9, 891602.3, 960665.7,1180152.3]
        },
        {
            name:'利润',
            type:'bar',
            data:[292885.1, 308714.7, 482216.6,433267.9, 587281.3, 566921.6, 146924.4, 312704.3,
            23400.3, 609771.2, 632267.4,808892.5]
        },
        {
            name:'收入增速',
            type:'line',
            yAxisIndex: 1,
            data:[16.7, 28.2, 14.4,26.6, 21.6, 26.1, 99.6, 135.0, 87.2, 69.3, 57.4, 75.4]
        },
        {
            name:'利润增速',
            type:'line',
            yAxisIndex: 1,
            data:[37.1, 50.3, 28.7,46.8,38.0,42.0, 150.0, 85.0, 40.5, 147.0, 116.0, 162.0]
        }
    ]
};
