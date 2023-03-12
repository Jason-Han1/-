var xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var dataArrA = [180, 250, 281, 239, 279, 180, 382, 301, 286, 239, 249, 200, ];
var dataArrB = [90,120,120,80,50,70,96,150,90,110,180,146];
option = {
    backgroundColor: '#354061',
    color: ["#67B59F", "#E8E093"],
    title: {
        text: "收支对比",
        left: "2%",
        top: "4%",
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
    },
    legend: {
        data: ['收入', '支出'],
        right: '4%',
        top: '4%',
        textStyle: {
            color: '#DFDFDF',
        },
    },
    calculable: true,
    grid: {
        left: '2%',
        right: '4%',
        bottom: '10%',
        top: '14%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "#DFDFDF",
                 fontSize: 14
             }
         },
         axisLine: {
             show: false
         },
        data: xdata,
    }],
    yAxis: [{
        type: 'value',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
        axisLabel: {
             show: true,
             textStyle: {
                 color: "#DFDFDF",
                 fontSize: 14
             },
             formatter: '{value}',
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.2)',
             }
         },
    }],
    series: [{
            name: '收入',
            type: 'bar',
            data:dataArrA,
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
        },
        {
            name: '支出',
            type: 'bar',
            data: dataArrB,
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                       
                    }
                ]
            },
        }
    ]
};