option = {
    tooltip: {
        showContent: true,
        trigger: 'axis',
        backgroundColor: 'rgba(8,36,68,.7)',
        color: '#fff',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        top: '0%',
        right: '10',
        icon: 'rect',
        itemWidth: 13,
        itemHeight: 13,
        textStyle: {
            color: 'rgba(250,250,250,0.6)',
            fontSize: 16,
        },
    },
    grid: {
        left: '30%',
        right: '20%',
        top: '10%',
        bottom: '0%',
        // width: 250,
    },
    xAxis: [
        {
            splitLine: {
                show: false,
            },
            type: 'value',
            show: false,
        },
    ],
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                //y轴
                show: false,
            },
            type: 'category',
            axisTick: {
                show: false,
            },
            inverse: true,
            data: [
                '武汉市',
                '黄冈市',
                '鄂州市',
                '发挥科技示范市',
                '武阿斯顿发发汉市',
                '黄答复冈市',
                '鄂州发生市',
                '黄石市',
                '武啊汉市',
                '黄是冈市',
                '鄂州是市',
                '黄石市',
                '武汉是市',
                '黄的冈市',
                '鄂州市',
                '黄都石市',
            ],
            axisLabel: {
                color: '#A7D6F4',
                fontSize: 14,
                margin: 20,
                formatter: function (value) {
                    if (value.length > 5) {
                        return value.substring(0, 5) + '...';
                    } else {
                        return value;
                    }
                },
            },
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#A7D6F4',
                    fontSize: '14',
                },
            },
            // data: value,
            data: [900, 380, 360, 340, 320, 300, 280, 260, 400, 380, 360, 340, 320, 300, 280, 260],
        },
    ],
    series: [
        {
            name: '作业总面积（万亩）',
            type: 'bar',
            barWidth: 8, // 柱子宽度
            showBackground: true,
            MaxSize: 0,
            backgroundStyle: {
                color: '#0c3151',
            },
            label: {
                show: false,
                // color: '#A7D6F4',
                // fontSize: 14,
                // distance: 20, // 距离
                // formatter: '{c} ', // 这里是数据展示的时候显示的数据
                // align: "center",
                // position: [290, 0]
            }, // 柱子上方的数值
            itemStyle: {
                barBorderRadius: [0, 4, 4, 0], // 圆角（左上、右上、右下、左下）
                color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [
                        {
                            offset: 0,
                            color: '#159dd2',
                        },
                        {
                            offset: 0.5,
                            color: '#2db6ce',
                        },
                        {
                            offset: 1,
                            color: '#48d0ca',
                        },
                    ],
                    false
                ), // 渐变
            },
            data: [900, 380, 360, 340, 320, 300, 280, 260, 400, 380, 360, 340, 320, 300, 280, 260],
        },
    ],
};
