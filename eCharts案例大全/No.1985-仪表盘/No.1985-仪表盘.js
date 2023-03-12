var value = '4';
var max = 5;
var option = {
    // 这个title整体是中间文字   因为echarts中的文字啥的样式不好调  我们一般写在外边
    // title: {
    //     show: true,
    //     text: '全校师生比',
    //     left: '46%',
    //     bottom: '50%',
    //     textAlign: 'center',
    //     textStyle: {
    //         fontWeight: '600',
    //         fontSize: '16',
    //         color: '#fff',
    //         textAlign: 'center',
    //     },
    //     backgroundColor: {
    //         x: 0,
    //         y: 0,
    //         x2: 1,
    //         y2: 0,
    //         colorStops: [
    //             {
    //                 offset: 0,
    //                 color: 'rgba(83, 172, 255, 1)',
    //             },
    //             {
    //                 offset: 1,
    //                 color: 'rgba(24, 144, 255, 1)',
    //             },
    //         ],
    //     },
    //     padding: [10, 45, 7, 45],
    //     borderRadius: 13,
    // },
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 6.666,
        startAngle: 225,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    polar: {
        radius: '100%',    // 外环大小
    },
    series: [
        {
            type: 'bar',
            data: [, , value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: '警告事件',
            roundCap: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                    offset: 0,
                    color: '#5284DE',
                },
                {
                    offset: 1,
                    color: '#5284DE',
                },
            ]),
            barGap: '-100%', // 不同系列的柱间距离，为百分比 如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。这在用柱子做背景的时候有用。
        },
        {
            type: 'bar',
            data: [, , max],
            z: 0,
            // silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: 'C',
            roundCap: true,
            color: '#F1F3F5',
            barGap: '-100%',
        },
        {
            type: 'gauge',
            radius: '80%',  // 刻度大小
            splitNumber: 4,
            max: 5,
            detail: {
                show: false,
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0, '#DE585D'],
                        [1, '#DE585D'],
                    ],
                    width: 25,
                    opacity: 0, //刻度背景宽度
                },
            },
            data: [
                {
                    name: '',
                    value: value,
                },
            ],
            splitLine: {
                length: 0, //长刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: 'rgba(0,0,0,0)',
                }, //刻度节点线
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#c4c6cc',
                    width: 5,
                },
                length: 10,
                splitNumber: 10,
            },
            axisLabel: {
                show: false,
                color: '#333',
                fontSize: 18,
            },
            pointer: {
                show: false,
                length: '70%',
                itemStyle: {
                    color: '#DE585D',
                },
            },
        },
    ],
    tooltip: {
        show: false,
    },
};
