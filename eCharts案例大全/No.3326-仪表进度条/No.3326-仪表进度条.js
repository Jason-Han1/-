const obj = {
    startAngle: 220,
    endAngle: -40,
    pointer: {
        // 指针
        show: false,
    },
    axisLabel: {
        // 刻度值
        show:false,
    },
    axisTick: {
        show:false,
    },
};
option = {
    series: [
        {
            type: 'gauge',
            splitNumber: 95,
            splitLine: {
                // 分割线
                distance: -50,
                length: 20,
                lineStyle: {
                    width: 10,
                    color: '#3ff0a3'
                }
            },
            axisLine: {
                // 轴线
                    lineStyle:{
                       width:4,
                       color: [[1, '#3300ee11']],
                   }
            },
            itemStyle: {
                show:false,
                color: '#FFAB91'
            },
            axisLabel: {
                // 刻度值
                show:false,
            },
            ...obj,
        },
        // {
        //     type: 'gauge',
        //     startAngle: 220,
        //     endAngle: -40,
        //     splitNumber: 45,
        //     splitLine: {
        //         length: 30,
        //         lineStyle: {
        //             width: 14,
        //             color: {
        //               type: 'linear',
        //                 x: 0,
        //                 y: 0.25,
        //                 // r: 0.5,
        //                 x2: 0,
        //                 y2: 0,
        //                 colorStops: [{
        //                     offset: 0, color: 'gray' // 0% 处的颜色
        //                 }, {
        //                     // offset: 1, color: '#52D5F2' // 100% 处的颜色
        //                     offset: 1, color: 'red' // 100% 处的颜色
        //                 }],
        //                 global: false 
        //             }
        //         }
        //     },
        //     pointer: {
        //         // 指针
        //         show: false,
        //     },
        //     axisLabel: {
        //         // 刻度值
        //         show:false,
        //     },
        //     axisTick: {
        //         show:false,
        //     },
        //     axisLine: {
        //       lineStyle:{
        //           width:4,
        //           color: [[1, '#153839']],
        //       }
        //     }
        // },
        {
            type:'pie',
            radius: ['62%', '70%'],
            startAngle: 220,
            endAngle: -40,
            color:['cyan','blue','transparent'],
            label: {
                show: false
            },
            data:[
                {value: 120, name: '搜索引擎'},
                {value: 140, name: '直接访问'},
                {value: 100, name: '邮件营销'},
            ],
        },
        {
            type: 'gauge',
            radius: '58%',
            startAngle: 220,
            endAngle: -40,
            splitNumber: 25,
            splitLine: {
                length: 5,
                lineStyle: {
                    width: 5,
                    color: '#4dcbe78f',
                    type:'dotted',
                }
            },
            pointer: {
                // 指针
                show: false,
            },
            axisLabel: {
                // 刻度值
                show:false,
            },
            axisTick: {
                show:false,
            },
            axisLine: {
               lineStyle:{
                   width:4,
                   color:[[1,'#3300ee11']],
               }
            },
            detail: {
                valueAnimation: true,
                borderRadius: 8,
                formatter: function(name) {
                    return `{a|在线率} \n\n {b|${name}} \n\n %`
                },
                rich:{
                    a: {
                        color:'#49C3DF',
                        fontSize: 50,
                        lineHeight: 20,
                        padding:[0,0,200,0],
                    },
                    b: {
                        color: '#49C3DF',
                        height: 40,
                        fontSize: 130,
                        padding:[0,0,30,0],
                        fontWeight: 'bolder',
                    },
                }
            },
            data: [{
                // name:'在线率',
                value: 86
            }]
        },
    ],
};