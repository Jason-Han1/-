var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#5CD1A7',
    },
    {
        offset: 0.35,
        color: '#FFE469',
    },

    {
        offset: 0.65,
        color: '#FFAC1E',
    },
    {
        offset: 1,
        color: '#FA5E5E',
    },
]);
option = {
    series: [
        {
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 30,
                    color: [[1, axislineColor]],
                },
            },
            pointer: {
                icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z', // 箭头图标
                length: '12%',
                width: 20,
                offsetCenter: [0, '-55%'], // 箭头位置
                itemStyle: {
                    color: '#3A85FF', // 箭头颜色
                },
            },
            axisTick: {
                show: false,
              
            },
            splitLine: {
                show: false,
             
            },
            axisLabel: {
                show: false,
            },

            detail: {
                show: false,
            },
            data: [
                {
                    value: 70,
                },
            ],
        }, // 内部圆圈
        {
            type: 'gauge',
            radius: '45%', // 位置
            center: ['50%', '52%'],
            min: 0,
            max: 100,
            startAngle: 360,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 50, // 宽度
                    color: [
                        [
                            1,
                           '#E5EBF4'
                        ],
                    ], // 颜色
                },
            },
            axisTick: {
                // 刻度
                show: false,
            },
            splitLine: {
                // 分割线
                show: false,
            },
            axisLabel: {
                // 刻度标签
                show: false,
            },
            pointer: {
                // 仪表盘指针
                show: false,
            },
            detail: {
                fontSize: 50,
                offsetCenter: [0, 0],
                valueAnimation: true,
                formatter: function (value) {
                    return value + '\n\n {icon|km/h}';
                },
                color: 'black',
                rich:{
                    icon:{
                        fontSize:30,
                         color: 'black',
                    }
                },
            },
            data: [
                {
                    value: 70,
                },
            ],
        },
    ],
};
