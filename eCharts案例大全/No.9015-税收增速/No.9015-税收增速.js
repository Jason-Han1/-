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
        data:['区级纳税金额','区级纳税金额增速']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2018年1-10月','2018年1-11月','2018年1-12月','2019年1-3月'
            ,'2019年1-4月','2019年1-5月','2019年1-6月','2019年1-7月','2019年1-8月','2019年1-9月'],
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
            name: '单位：元',
            min: 0,
            max: 6000000000,
            interval: 1000000000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '单位：%',
            min: -10,
            max: 40,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'区级纳税金额',
            type:'bar',
            data:[4907672294,4961221342.7,5175890229.9,829632134.3, 1031637453.5, 1352836343.2, 2211956324.5,
            2590501286.6, 3007345139.2, 3573592787.8,3813504379.6,4123197177.1]
        },
        {
            name:'区级纳税金额增速',
            type:'line',
            yAxisIndex: 1,
            data:[30.5, 25.4,26.0,-1.6,-6.6,5.3, 10.9, 5.4, 7.8, 9.0, 5.8, 2.0]
        }
    ]
};
