option = {
    series: [
        {
            type: 'scatter',
            data: [{
                value: [0, 0], // 位置
                label: { // 富文本内容
                    normal: { // 文本块样式定义
                        show: true,
                        formatter: [
                            '默认文字样式',
                            '{a|文字描边宽度与颜色}',
                            '{b|带背景色边界圆角}',
                            '{c|带有色阴影且阴影在x、y轴偏移}'
                        ].join('\n'),
                        backgroundColor: '#ddd', // 文本块背景色
                        borderColor: '#444', // 描边颜色
                        borderWidth: 4, // 描边宽度
                        borderRadius: 10, // 描边半径
                        padding: 15, // 描边扩充空间
                        color: '#000', // 默认字体颜色
                        fontSize: 20, // 默认字体大小 
                        shadowBlur: 50, // 阴影模糊等级
                        shadowColor: '#666', // 阴影颜色
                        shadowOffsetX: 3, // 阴影x轴偏移 
                        shadowOffsetY: 3, // 阴影y轴偏移
                        lineHeight: 30, // 行高
                        rich: { // 文本片段样式定义
                            a: { // 样式a
                                fontSize: 30, // 字体大小
                                textBorderColor: '#00F', // 文字描边颜色
                                textBorderWidth: 4, // 文字描边宽度
                                color: '#ff0' // 文字颜色
                            },
                            b: {
                                backgroundColor: '#F0F', // 文字背景色
                                color: '#000', // 文字颜色
                                fontSize: 15, // 文字大小
                                borderRadius: 10, // 文字边角半径
                                padding: 6 // 文字边界扩充
                            },
                            c: {
                                backgroundColor: '#04f', 
                                padding: 4, // 文字边界扩充
                                color: '#FFF', // 文字颜色
                                shadowBlur: 5, // 阴影模糊等级
                                shadowColor: '#0F0', // 阴影颜色
                                shadowOffsetX: 8, // 阴影x轴偏移
                                shadowOffsetY: 8 // 阴影y轴偏移
                            }
                        }
                    }
                }
            }]
        }
    ],
    xAxis: { // 不显示x轴
        axisLabel: {show: false},
        axisLine: {show: false},
        splitLine: {show: false},
        axisTick: {show: false},
        min: -1,
        max: 1
    },
    yAxis: { // 不显示y轴
        axisLabel: {show: false},
        axisLine: {show: false},
        splitLine: {show: false},
        axisTick: {show: false},
        min: -1,
        max: 1
    }
};