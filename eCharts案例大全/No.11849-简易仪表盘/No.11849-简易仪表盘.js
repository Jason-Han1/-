var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#87F3ED'
    },

    {
        offset: 0.62,
        color: 'yellow'
    },

    {
        offset: 1,
        color: '#FF0000'
    }
]);

var option = {
    series: [{
        type: 'gauge',
        radius: '50%', //大小
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                width: 10, //粗细
                color: [
                    [1, axislineColor]
                ],
            }
        },
        axisTick: {
            show: false
        },
        splitLine: { // 分隔线
            show: false
        },
        axisLabel: {
            show: false
        },
        detail: { //百分比颜色
            offsetCenter: [0, 100], //字体百分比位置
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#007FFF',
                fontSize: 20,
                fontWeight: 500
            },
            formatter: function(value) {
                return value + '%';
            },
        },
        itemStyle: { //指针颜色
            normal: {
                color: "#8492AA",
            }
        },
        data: [{
            value: 10,
            name: ''
        }]
    }]
};
myChart.setOption(option);