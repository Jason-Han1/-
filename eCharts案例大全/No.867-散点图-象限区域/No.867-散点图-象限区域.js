// 散点数据
let marksData = [
    {
        name: '长江电力有限公司',
        value: [65, 50],
        // 需要特殊处理数据，看坐标点属于哪个markArea区域获取对应color色值
        // 同时如果要处理tooltip的边框颜色，就需要单独设置tooltip
        color: '#FFCCCC',
        itemStyle: {
            color: '#FFCCCC',
            borderColor: '#FFCCCC',
            opacity: 1,
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: '#FFCCCC',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '水泥有限公司',
        value: [60, 42],
        color: '#FFCCCC',
        itemStyle: {
            color: '#FFCCCC',
            opacity: 1,
            borderColor: '#FFCCCC',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: '#FFCCCC',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '开心麻花有限公司',
        value: [34, 51],
        color: 'rgba(191, 120, 58, 1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, 1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '欢乐喜剧人剧场',
        value: [25, 64],
        color: 'rgba(191, 120, 58, .1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '水力水电股份公司',
        value: [42, 20],
        color: 'rgba(191, 120, 58, .1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '测试企业',
        value: [65, 15],
        color: 'rgba(191, 120, 58, .1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '文化企业',
        value: [68, 34],
        color: 'rgba(191, 120, 58, .1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '美术企业',
        value: [25, 65],
        color: 'rgba(191, 120, 58, .1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '化工企业',
        value: [45, 56],
        color: 'rgba(191, 120, 58, .1)',
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '零食副业公司',
        value: [35, 47],
        itemStyle: {
            color: 'rgba(191, 120, 58, .5)',
            borderColor: 'rgba(191, 120, 58, .5)',
            borderWidth: 1.5,
        },
        color: 'rgba(191, 120, 58, .1)',
        tooltip: {
            borderColor: 'rgba(191, 120, 58, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    },
    {
        name: '零食副业公司1',
        value: [25, 27],
        itemStyle: {
            color: 'rgba(56, 180, 139, .5)',
            borderColor: 'rgba(56, 180, 139, .5)',
            borderWidth: 1.5,
        },
        color: 'rgba(56, 180, 139, .1)',
        tooltip: {
            borderColor: 'rgba(56, 180, 139, .1)',
            borderWidth: 2,
            formatter: '{b0}<br/>{c0}<br/>',
        },
    }
];
// 中心线
centerLine = [
    {
        name: '最大最小平均线',
        xAxis: 40,
    },
    {
        name: '区域平均线',
        yAxis: 40,
    },
];
// 中心点
centerMark = [
    {
        value: '中心点',
        coord: [40, 40],
    },
];

option = {
    tooltip: {
        trigger: 'item',
        confine: true,
        backgroundColor: '#fff',

        textStyle: {
            color: '#000',
            fontSize: 12,
        },
        // formatter: (params) => {
        //     let str = `<span style="font-size: 16px;"> ${params.name} </span>`;
        //     let label = '';
        //     label +=
        //         `<span  style="display: inline-block;width: 10px;height: 10px;background-color: ${params.data.color};border-radius: 10px;margin-right: 6px"></span>` +
        //         '碳排放量：' +
        //         params.value[0] + `<span style="font-size: 10px;margin-left: 8px;">万吨</span>`
        //         '<br/>' +
        //         `<span  style="display: inline-block;width: 10px;height: 10px;background-color: ${params.data.color};border-radius: 10px;margin-right: 6px"></span>` +
        //         '排放强度：' +
        //         params.value[1];
        //     return str + '<br/>' + `<div style='color: #606266;margin-top: 8px;'>${label}</div>`;
        // },
    },
    grid: {
        left: 50,
        right: '8%',
        bottom: '4%',
        top: '6%',
        containLabel: true,
    },
    xAxis: {
        name: '碳排放量',
        scale: true,
        axisLine: {
            symbol: 'none',
            lineStyle: {
                color: '#ddd',
                width: 3,
            },
        },
        axisLabel: {
            color: '#666',
        },
        splitLine: {
            show: true,
        },
    },
    yAxis: {
        name: '排放强度',
        scale: true,
        axisLine: {
            symbol: 'none',
            lineStyle: {
                color: '#ddd',
                width: 3,
            },
        },
        axisLabel: {
            color: '#666',
        },
        splitLine: {
            show: true,
        },
    },
    series: [
        {
            type: 'scatter',
            data: marksData,
            label: {
                show: false,
                position: 'bottom',
                formatter: '{b}',
            },
            // itemStyle: {
            //     color: '#fff',
            //     borderColor: '#409eff',
            //     borderWidth: 1.5,
            // },
            // 各象限区域
            markArea: {
                silent: true,
                label: {
                    distance: 16,
                    color: '#606266',
                    fontSize: 14,
                },
                data: [
                    [
                        {
                            name: '高排低效',
                            xAxis: 50, // x 轴开始位置
                            yAxis: 70, // y 轴结束位置(直接取最大值)
                            itemStyle: {
                                color: '#FFCCCC',
                                opacity: 0.3,
                            },
                            label: {
                                position: 'insideTopRight',
                            },
                        },
                        {
                            yAxis: 40, // y轴开始位置
                        },
                    ],
                    [
                        {
                            name: '低排低效',
                            yAxis: 70, // y 轴结束位置(直接取最大值)
                            itemStyle: {
                                color: 'rgba(191, 120, 58, .1)',
                            },
                            label: {
                                position: 'insideTopLeft',
                            },
                        },
                        {
                            xAxis: 50, // x 轴结束位置
                            yAxis: 40, // y轴开始位置
                        },
                    ],
                    [
                        {
                            name: '低排高效',
                            yAxis: 40, // y 轴结束位置
                            itemStyle: {
                                color: 'rgba(56, 180, 139, .1)',
                            },
                            label: {
                                position: 'insideBottomLeft',
                            },
                        },
                        {
                            xAxis: 30, // x 轴结束位置
                            yAxis: 10, // y轴开始位置
                        },
                    ],
                    // 第四象限
                    [
                        {
                            name: '高排高效',
                            xAxis: 30, // x 轴开始位置
                            yAxis: 40, // y 轴结束位置
                            itemStyle: {
                                color: 'rgba(191, 120, 58, .1)',
                            },
                            label: {
                                position: 'insideBottomRight',
                            },
                        },
                        {
                            yAxis: 10, // y轴开始位置
                        },
                    ],
                ],
            },
            // 中心点交集象限轴
            markLine: {
                silent: true, // 是否不响应鼠标事件
                precision: 2, // 精度
                symbol: 'none',
                lineStyle: {
                    type: 'solid',
                    width: 3,
                    color: '#409eff',
                },
                label: {
                    color: '#fff',
                    backgroundColor: '#409eff',
                    lineHeight: 24,
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 500,
                    padding: [0, 12],
                    position: 'end',
                    formatter: '{b}',
                },
                data: centerLine,
            },
        },
    ],
};
