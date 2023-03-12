let barData = [{              
        name: '挂号',
        data: [190, 110, 160, 130, 200, 235, 170, 130, 170, 118, 165, 170],
        color: ['rgba(0,250,251,1)', 'rgba(1,185,255,0.5)', 'transparent']
    },
    {
        name: '就诊',
        data: [260, 165, 115, 190, 175, 95, 117, 95, 190, 230, 170, 120, 225],
        color: ['rgba(230,194,17,1)', 'rgba(129,67,16,0.5)', 'transparent']
    }
];
let seriesData = [];
for(let i =0;i<barData.length;i++){
    seriesData.push({
            name: barData[i].name,
            type: 'bar',
            barWidth: 5,
            barGap: '100%',
            itemStyle: {
                normal: {
                    barBorderRadius:50,//圆角
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: barData[i].color[0]
                            },
                            {
                                offset: 0.5,
                                color: barData[i].color[1]
                            },
                            {
                                offset: 1,
                                color: 'transparent'
                            }
                        ]
                    )
                },

            },
            data:barData[i].data,

        })
}

option = {
   backgroundColor: '#010d14',
    title: {
        text: '人',
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
            color: '#c7dfe9' //标题颜色
        },
        top: '0%',
        left: '0%',
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '5px',
        right: '5px',
        bottom: '5px',
        top: '50px',
        containLabel: true,

    },
    calculable: true,
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0, // 解决x轴名称过长问题
            textStyle: {
                color: '#c8d8e3'
            }
        },
        axisLine: {
            lineStyle: { //y轴网格线设置
                color: '#032e42',
                width: 1,

            }
        },                                   
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],

    }],
    yAxis: [{
        type: 'value',
        
        axisLine: {
            lineStyle: { //y轴网格线设置
                color: '#032e42',
                width: 1,

            }
        },
        splitLine: { //保留网格线
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#c7dfe9' //字体颜色
            }
        },
    }],
    legend: {
         icon: 'roundRect',
         orient: 'horizontal',
         itemWidth:20,
         itemHeight:15,
         textStyle: {
             fontSize: 12, //字体大小
             color: '#b9c8d4', //字体颜色
         },
         right: '3%' //距离右侧
     },
    series: seriesData
};