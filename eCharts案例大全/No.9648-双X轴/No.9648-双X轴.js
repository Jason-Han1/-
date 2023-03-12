app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['2018', '2019']
    },
    grid: [{
        top: 50,
        bottom: 50,
         left: '55%',
        width: '35%'
    }, {
        top: 50,
        bottom: 50,
        width: '35%'
    }],
    xAxis : [
      {
            name : '金额(CNY MM)',
            type : 'value',
            //max :600
        },
        {
            gridIndex: 1,
            name : '数量(#)',
            type : 'value',
            inverse: true
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: true},
            axixLabel:{padding:[0,100]},
            data : ['苏宁','美团','银联','JD','财付通','Alipay','总计']
        },
         {
            gridIndex: 1,
            type : 'category',
            position:'right',
            axisTick : {show: true},
            data :  ['苏宁','美团','银联','JD','财付通','Alipay','总计']
        }
    ],
    series : [
        {
            name:'2018',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[1200, 1800, 4000, 890, 3568, 5876, 9918]
        },
         {
            name:'2019',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[1600, 1900, 3500, 1090, 5568, 8876, 15918]
        },
        {
            name:'2018',
            type:'bar',
             xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            //stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[100, 200, 300, 450, 600, 800, 1600]
        },
         {
            name:'2019',
            type:'bar',
             xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
           // stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[150, 300, 250, 700, 689, 900, 2050]
        }
    ]
};
