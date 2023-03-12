// option = {
//     title: {
//         text: 'Awesome Chart'
//     },
//     xAxis: {
//         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     yAxis: {},
//     series: [{
//         type: 'line',
//         data:[220, 182, 191, 234, 290, 330, 310]
//     }]
// };


yList = [32];
yList2 = [52];
xList = [10];
color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: color[index]
        }
    };
});
dom = 800;
barWidth = dom / 20;
colors = [{
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF3FDA'
        }, {
            offset: 0.5,
            color: '#FF3FDA'
        }, {
            offset: 0.5,
            color: '#CC1BAA'
        }, {
            offset: 1,
            color: '#CC1BAA'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#602CFF'
        }, {
            offset: 0.5,
            color: '#602CFF'
        }, {
            offset: 0.5,
            color: '#4915E6'
        }, {
            offset: 1,
            color: '#4915E6'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#00FFFF'
        }, {
            offset: 0.5,
            color: '#00FFFF'
        }, {
            offset: 0.5,
            color: '#11A6D0'
        }, {
            offset: 1,
            color: '#11A6D0'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#89FF5E'
        }, {
            offset: 0.5,
            color: '#89FF5E'
        }, {
            offset: 0.5,
            color: '#48DD12'
        }, {
            offset: 1,
            color: '#48DD12'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FFD05C'
        }, {
            offset: 0.5,
            color: '#FFD05C'
        }, {
            offset: 0.5,
            color: '#DEA821'
        }, {
            offset: 1,
            color: '#DEA821'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF7853'
        }, {
            offset: 0.5,
            color: '#FF7853'
        }, {
            offset: 0.5,
            color: '#DB3E13'
        }, {
            offset: 1,
            color: '#DB3E13'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#AA48FF'
        }, {
            offset: 0.5,
            color: '#AA48FF'
        }, {
            offset: 0.5,
            color: '#8E15F8'
        }, {
            offset: 1,
            color: '#8E15F8'
        }]
    }
];
option = {
      backgroundColor: "#010d3a",
    
    //提示框
    tooltip: {
        show:false
    },
    /**区域位置*/
    //   grid: {
    //       left: '10%',
    //       right: '10%',
    //       top: 80,
    //       bottom: 40,
    //     },
    /**图例大小*/
        //  legend: {
        //   type: 'plain',
        //   left: 0,
        //   top: 20,
        //   itemGap: 20,
        //   itemWidth: 35,
        //   itemHeight: 20
        // },
    //X轴
    xAxis: {
        show:false,
        name:'X',
         nameTextStyle: {
            color: '#FFFFFF',
            padding: [0, 0, 0, 20]

          },
        data: xData,
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                 shadowColor:'rgba(255,255,255,1)',
                shadowOffsetX: '20',
            },
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 25]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        axisLabel: {
            rotate: -30,
            fontSize: 12,
        },
    },
    yAxis: {
        show: false,
        splitNumber: 4,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'

            },
        },
        axisLabel: {
            color: '#FFFFFF',
        }
    },
    series: [{
            type: 'bar',
            stack:'ttt',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#2450F0',
                                    },
                                    {
                                        offset: 1,
                                        color: '#2FCAFD',
                                    },
                                ])
                }
            },
            label: {
                show: true,
                position: "inside",
                offset: [barWidth/2 + 20, 0],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            data: yList
        },
        {
            type: 'bar',
            stack:'ttt',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#1A4DC0',
                                    },
                                    {
                                        offset: 1,
                                        color: '#9E2FFD',
                                    },
                                ]),
                }
            },
            label: {
                show: true,
                position: "inside",
                offset: [barWidth/2 + 20, 0],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
                formatter: function(params){
                    return [
                       '{circle|}' ,
                       '省内',
                       params.data
                    ].join('')
                },
                textStyle:{
                    rich:{
                        circle:{
                            width:10,
                            height:10,
                            borderRadius: '50%',
                            borderWidth:1,
                            borderColor:'#CF47FD',
                            backgroundColor:'#CF47FD'
                        }
                    }
                }
            },
            data: yList2
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: yList,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: '#2FCAFD'
                }
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#3FA1FB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#41B4F8',
                                    },
                                ])

                }
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: [84],
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#886DF8',
                                    },
                                    {
                                        offset: 1,
                                        color: '#4781F0',
                                    },
                                ]),

                }
            },
        },
    ],
};