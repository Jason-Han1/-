var getmax=[5];
var getvalue=[3.2];
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#2E64EF'
    },
    {
        offset: 1,
        color: '#6D9BFF'
    }
]);
option = {
    series: [{
            center: [50, 80], //仪表的位置
            type: "gauge", //统计图类型为仪表
            radius: '97%', //统计图的半径大小
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 0, //开始刻度的角度
            endAngle: 180, //结束刻度的角度
            axisLine: { //设置默认刻度盘上的刻度不显示，重新定义刻度盘
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, "rgba(255,255,255,0)"]
                    ]
                }
            }, //仪表盘轴线
            axisTick: {
                show: true,
                splitNumber: 0, //刻度的段落数
                lineStyle: {
                    color: '#fff',
                    width: 0 //刻度的宽度
                },
                length: 0 //刻度的长度
            }, //刻度样式
            splitLine: { //文字和刻度的偏移量
                show: true,
                length: -120, //便宜的长度
                lineStyle: {
                    color: "#fff",
                }
            },
        },
        {
        radius: '90%',
        center: ["50%", "50%"],
        min: 0,
        max: getmax,
        startAngle: 180,
        endAngle: 0,
        type: 'gauge',
        axisLabel: {
            show: false
        },
        detail: {
            show:true,
            //formatter: '1\n性格指数',
            formatter:[
                '{value}',
                '{name|性格指数}'
                ].join('\n'),
            rich: {
                name: {
                  fontSize: 16,
                  lineHeight: 30,
                  color: '#666666'
                }
              },
            color: '#4E81F7',
            fontSize: 36,
            fontWeight:'bolder',
            offsetCenter: [-0, -30]
        },

        axisLine: {
            lineStyle: {
                width: 30,
                color: [
                    [getvalue / getmax, axislineColor],
                    [1, '#DCDCDC']
                ]
            }
        },
        pointer: {
            show: false,
        },
        itemStyle: {
            color: '#DCDCDC'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [{
            value: getvalue
        }]
    }]
};