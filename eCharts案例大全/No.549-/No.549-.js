let total = [2008, 2008, 2010];

option = {
     backgroundColor: '#041540',
    tooltip: {
        //提示框组件
        // trigger: 'axis',
        formatter: function (params) {
            return params.name + '总人数' + total[params.dataIndex] + '人';
        },
        backgroundColor: '#005ED8', //通过设置rgba调节背景颜色与透明度
    },
    title: {
        text: '分数',
        x: '36',
        y: '35',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#fff',
        },
    },
    grid: {
        left: '8%',
        right: '4%',
        bottom: '6%',
        top: '20%',
        padding: '0 0 10 0',
        containLabel: true,
    },
    color: ['#26D3D4', '#426DF9', '#CBB735', '#E65B1E'],
    legend: {
        //图例组件，颜色和名字
        left: 'center',
        top: 10,
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        icon: 'circle',
        data: [
            {
                name: '优秀(≥90)',
            },
            {
                name: '良好(≥80＜90)',
            },
            {
                name: '合格(≥70＜80)',
            },
            {
                name: '不合格(＜60)',
            },
        ],
        textStyle: {
            color: '#FFFFFF',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
    },
    xAxis: {
        data: ['党史知识1500题', '党史知识测试第一组第三次', '百日测试'],
        axisLine: {
            show: true, //隐藏X轴轴线
            textStyle: {
                color: '#393952', //X轴文字颜色
            },
        },
        axisTick: {
            show: false, //隐藏X轴轴线
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 12,
            textStyle: {
                color: '#fff', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            // interval: 25,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#393952',
                },
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 12,
                textStyle: {
                    color: '#909090',
                },
            },
        },
    ],
    series: [
        {
            name: '优秀(≥90)',
            type: 'bar',
            data: [120, 100, 99],
            barWidth: 8,
            barGap: 0, //柱间距离
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FFFFFF',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                //图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#27D6D7', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'transparent', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
        },
        {
            name: '良好(≥80＜90)',
            type: 'bar',
            data: [853, 750, 680],
            barWidth: 8,
            barGap: 0.2, //柱间距离
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FFFFFF',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                //图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#4470FF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'transparent', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
        },
        {
            name: '合格(≥70＜80)',
            type: 'bar',
            data: [922, 858, 963],
            barWidth: 8,
            barGap: 0.2, //柱间距离
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FFFFFF',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                //图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#CBB735', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'transparent', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
        },
        {
            name: '不合格(＜60)',
            type: 'bar',
            data: [113, 300, 268],
            barWidth: 8,
            barGap: 0.8, //柱间距离
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FFFFFF',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                //图形样式
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#E65B1E', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'transparent', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
        },
    ],
};
