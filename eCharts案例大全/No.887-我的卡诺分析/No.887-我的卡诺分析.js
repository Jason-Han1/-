// 散点数据
let marksData_ = [
    [0, 0],
    [ 21.05,47.37],
    [ 5.56,44.44],
    [ 31.58,42.11],
    [ 10.53,52.63],
    [ 50,72.22],
    [ 26.32,68.42],
    [ 22.22,61.11],
    [ 31.58,73.68],
    [ 26.32,52.63],
    [ 11.11,66.67],
    [ 15.79,52.63],
    [ 15.79,31.58],
    [ 21.05,31.58],
    [ 26.32,42.11]
];
let marksData=[]
marksData=marksData_.map((item,index)=>{
    let point={
        name:"功能"+(index+1),
        value:item
    }
    return point
    // item.name=
})
// 中心线
centerLine = [
    {
        name: 'y',
        xAxis: 21,
    },
    {
        name: 'x',
        yAxis: 49,
    },
];
// 中心点
centerMark = [
    {
        value: '中心点',
        coord: [21, 49],
    },
];

option = {
    tooltip: {
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1,
            },
            label: {
                backgroundColor: '#555',
            },
        },
    },
    grid: {
        left: 50,
        right: 50,
        bottom: '4%',
        top: '36%',
        containLabel: true,
    },
    xAxis: {
        scale: true,
        axisLine: {
            lineStyle: {
                color: '#ddd',
            },
        },
        axisLabel: {
            color: '#666',
        },
        splitLine: {
            lineStyle: {
                color: '#eee',
            },
        },
    },
    yAxis: {
        scale: true,
        axisLine: {
            lineStyle: {
                color: '#ddd',
            },
        },
        axisLabel: {
            color: '#666',
        },
        splitLine: {
            lineStyle: {
                color: '#eee',
            },
        },
    },
    series: [
        {
            type: 'scatter',
            data: marksData,
            label: {
                show: true,
                position: 'bottom',
                formatter: '{b}',
            },
            itemStyle: {
                shadowBlur: 2,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 1,
                color: function (e) {
                    let randomColor =
                        'rgba(' +
                        Math.floor(Math.random() * 240) +
                        ',' +
                        Math.floor(Math.random() * 240) +
                        ',' +
                        Math.floor(Math.random() * 240) +
                        ',' +
                        '.8' +
                        ')';
                    return randomColor.substring();
                },
            },
            // 各象限区域
            markArea: {
                silent: true,
                data: [
                    // 第一象限
                    [
                        {
                            name: '第一象限',
                            xAxis: 21, // x 轴开始位置
                            yAxis: 80, // y 轴结束位置(直接取最大值)
                            itemStyle: {
                                color: 'rgba(56, 180, 139, .1)',
                            },
                            label: {
                                position: 'inside',
                                color: 'rgba(0, 0, 0, .1)',
                                fontSize: 22,
                            },
                        },
                        {
                            yAxis: 49, // y轴开始位置
                        },
                    ],
                    // 第二象限
                    [
                        {
                            name: '第二象限',
                            yAxis: 80, // y 轴结束位置(直接取最大值)
                            itemStyle: {
                                color: 'rgba(68, 97, 123, .1)',
                            },
                            label: {
                                position: 'inside',
                                color: 'rgba(0, 0, 0, .1)',
                                fontSize: 22,
                            },
                        },
                        {
                            xAxis: 21, // x 轴结束位置
                            yAxis: 49, // y轴开始位置
                        },
                    ],
                    // 第三象限
                    [
                        {
                            name: '第三象限',
                            yAxis: 49, // y 轴结束位置
                            itemStyle: {
                                color: 'rgba(191, 120, 58, .1)',
                            },
                            label: {
                                position: 'inside',
                                color: 'rgba(0, 0, 0, .1)',
                                fontSize: 22,
                            },
                        },
                        {
                            xAxis: 21, // x 轴结束位置
                            yAxis: 0, // y轴开始位置
                        },
                    ],
                    // 第四象限
                    [
                        {
                            name: '第四象限',
                            xAxis: 21, // x 轴开始位置
                            yAxis: 49, // y 轴结束位置
                            itemStyle: {
                                color: 'rgba(116, 83, 153, .1)',
                            },
                            label: {
                                position: 'inside',
                                color: 'rgba(0, 0, 0, .1)',
                                fontSize: 22,
                            },
                        },
                        {
                            yAxis: 0, // y轴开始位置
                        },
                    ],
                ],
            },
            // 中心点交集象限轴
            markLine: {
                silent: true, // 是否不响应鼠标事件
                precision: 2, // 精度
                lineStyle: {
                    type: 'solid',
                    color: '#00aca6',
                },
                label: {
                    color: '#00aca6',
                    position: 'end',
                    formatter: '{b}',
                },
                data: centerLine,
            },
            // 中心点
            // markPoint: {
            //     symbol: 'roundRect',
            //     symbolSize: 15,
            //     itemStyle: {
            //         color: 'rgba(234, 85, 6, .8)',
            //     },
            //     label: {
            //         position: 'top',
            //     },
            //     data: centerMark,
            // },
        },
    ],
};
