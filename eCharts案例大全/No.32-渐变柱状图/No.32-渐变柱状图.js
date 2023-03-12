var data1 = [30, 20, 30, 20, 20, 90];
var option = {
    backgroundColor:"#000",
    grid: {
        x: 60,
        y: 30,
        x2: 20,
        y2: 42,
    },
    dataZoom: [
        {
            show: true,
            height: 10,
            xAxisIndex: [0],
            bottom: 0,
            start: 20,
            end: 100,
            handleSize: '100%',
            handleStyle: {
                color: 'rgba(98, 255, 255, 0.7)',
            },
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
            fillerColor: 'rgba(98, 255, 255, 0.7)',
            borderColor: '#005DFF',
            backgroundColor: '#001E45',
            showDataShadow: true,
            brushSelect: false,
        },
        {
            type: 'inside',
            disabled: false,
        },
    ],
    xAxis: {
        fontSize: 16,
        data: ['杭州市', '宁波市', '绍兴市', '湖州市', '温州市'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#44A0B7',
            },
        },
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: '#fff',
            },
        },
    },
    yAxis: {
        name: '单位户',
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#44A0B7',
            },
        },
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        //数据的柱状图
        {
            name: '',
            type: 'bar',
            barWidth: 14,
            barGap: '-100%',
            fontSize: 16,
            itemStyle: {
                //lenged文本
                opacity: 1, //这个是 透明度
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(120, 249, 83, 1) ', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(62, 142, 12, 1)', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: data1,
        },

        //数据顶部的样式
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [14, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: 'rgba(98, 209, 56, 1)', // 100% 处的颜色
            },
            symbolPosition: 'end',
            data: data1,
        },

        //阴影的顶部
        {
            name: '', //头部
            type: 'pictorialBar',
            symbolSize: [14, 10],
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                color: 'rgba(19, 74, 0, 1)',
                opacity: 1,
            },
            data: [100, 100, 100, 100, 100, 100],
        },
        //后面的背景
        {
            name: '2019',
            type: 'bar',
            barWidth: 14,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: 'rgba(19, 74, 0, 1)',
                opacity: 0.7,
            },

            data: [100, 100, 100, 100, 100, 100],
        },
    ],
};
