var xData2 = ['南越天辰弃土场', '重庆东站弃土场', '五星村弃土场'];
var data1 = [250, 100, 130];
var data2 = [400, 400, 400];
var barWidth = 30;
option = {
    backgroundColor: '#fff',
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    grid: {
        left: 100,
        bottom: 100,
    },

    xAxis: {
        type: 'category',
        data: xData2,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        offset: 20,
        axisTick: {
            show: false,

            alignWithLabel: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        axisLabel: {
            fontSize: 10,
        },
    },
    yAxis: {
        min: 0,
        name: '块',
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#dddddd',
            },
        },
        axisTick: {
            show: true,
        },
        axisLabel: {
            fontSize: 16,
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            // 上半截柱子
            name: '2019',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: '#eaf3fc',
                opacity: 0.7,
            },
            tooltip: {
                show: false,
            },
            data: data2,
        },
        {
            //下半截柱子
            name: '2020',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: {
                //lenged文本
                opacity: 0.7,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#2787c9', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1ebaeb', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: data1,
        },

        {
            //上半截柱子顶部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                color: '#eaf3fc',
                opacity: 1,
            },
            tooltip: {
                show: false,
            },
            label: {
                show: false,
            },
            data: data2,
        },
        {
            //下半截柱子顶部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            symbolOffset: [0, -10],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: '#15b7ed',
            },
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            //下半截柱子底部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 5],
            symbolOffset: [0, 0],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: '#1c7de2',
            },
            tooltip: {
                show: false,
            },
            data: [1, 1, 1, 1, 1],
        },
        {
            type: 'line',
            smooth: 'true',
            symbol: 'none',
            tooltip: {
                show: true,
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(10,219,250,.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(10,219,250, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: data1,
        },
    ],
};
