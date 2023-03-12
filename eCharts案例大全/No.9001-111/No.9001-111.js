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
            max: 12000,
            interval: 2000,
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
            data:[6195.7, 6982.5, 8523.7,9432.6, 11021.4, 11630.6, 3001.2, 5936.4, 2476.9, 8602.3,
            9665.7,11802.3]
        },
        {
            name:'利润',
            type:'bar',
            data:[2985.1, 3014.7, 4216.6,4367.9, 5881.3, 5661.6, 1424.4, 3104.3,
            230.3, 6071.2, 6327.4,8892.5]
        }
    ]
};
