var option = {
    backgroundColor: '#ffffff',
    tooltip: {
        //提示框组件
        trigger: 'axis',

        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985',
            },
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
    },
    legend: {
        icon: 'circle',
        data: ['实施统计', '计划实施统计'],
    },

    xAxis: [
        {
            type: 'category',
            //	boundaryGap: true,//坐标轴两边留白
            data: ['深基坑', '高支模', '脚手架', '起重机械', '拆除工程', '暗挖工程', '其他'],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                textStyle: {
                    color: '#000000',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false,
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: '#000000',
                    opacity: 0.2,
                },
            },
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
        },
    ],
    series: [
        {
            name: '实施统计',
            type: 'bar',
            data: [320, 386, 428, 354, 227, 186, 337],
            barWidth: 8,
            barGap: 0, //柱间距离
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000000',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#0299e8',
                            },
                            {
                                offset: 1,
                                color: '#00fdfb',
                            },
                        ],
                        false
                    ),
                    barBorderRadius: [50, 50, 0, 0],
                    borderWidth: 0,
                },
            },
        },
        {
            name: '计划实施统计',
            type: 'bar',
            data: [24, 15, 10, 24, 7, 5, 24],
            barWidth: 8,
            barGap: 0, //柱间距离
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000000',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#e49400',
                            },
                            {
                                offset: 1,
                                color: '#ffeb3f',
                            },
                        ],
                        false
                    ),
                    barBorderRadius: [50, 50, 0, 0],
                    borderWidth: 0,
                },
            },
        },
    ],
};
