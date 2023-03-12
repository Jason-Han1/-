var value = 80;
var color = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#41D7F3",
        },
        {
            offset: 1,
            color: "#41D7F3",
        }
    ]
);
option = {
   backgroundColor: '#012248',
    series: [{
             type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: [
                        [0, '#0060ea'],
                        [0.2, '#0060ea'],
                        [0.6, '#01bffb'],
                        [0.8, '#01bffb'],
                        [1, '#007eef'],
                    ],
                },
            },
            pointer: {
                // show:false,
                width: 4,
                length: '70%'
            },
             itemStyle: {
                // 表盘指针的颜色
                color: "#52dd8c",
            },
            axisTick: {
                show: false,
                length: 12,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                },
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: 'auto',
                    width: 5,
                },
            },
            axisLabel: {
                color: '#fff', // 刻度颜色
                fontSize: 15,
                distance: -5, // 刻度位置
                center: ['50%', '52%'],
            },

            detail: {
                show: false,
            },
            data: [
                {
                    value: 70,
                },
            ],
            markPoint: {
                // symbol:'circle',
                // symbolSize:15,
                // itemStyle: {
                //     color: "#fff"
                // },
                data: [{
                    x: "50%",
                    y: "50%",
                    symbol: 'circle',
                    symbolSize: 55,
                    itemStyle: {
                        color: "#0264eb"
                    },
                }, ]
            },
        },
        
    ]

}