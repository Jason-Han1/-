let barData = [{              
        name: '挂号',
        data: [122, 214, 117, 223, 125, 226, 113, 116, 222, 220, 216, 120],
        color: ['rgba(40,183,216,1)', 'rgba(30,89,115,0.5)', 'transparent']
    },
    {
        name: '就诊',
        data: [512, 611, 423, 222, 212,412, 317, 218, 423, 318, 212, 320],
        color: ['rgba(202,109,37,1)', 'rgba(129,67,16,0.5)', 'transparent']
    }
];
let seriesData = [];
for(let i =0;i<barData.length;i++){
    seriesData.push({
            name: barData[i].name,
            type: 'bar',
            barWidth: 5,
           
            itemStyle: {
                normal: {
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
        data: [' 全科  ', '内科 ', '中医科  ', '放射科', '超声科', '检验科', '心电图科', '康复医学科'],

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