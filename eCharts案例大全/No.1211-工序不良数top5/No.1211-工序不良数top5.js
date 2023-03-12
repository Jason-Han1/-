option = {
    backgroundColor: 'black',
    title: {
        text: '工序不良数top5',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 28,
        },
        top: '5%',
        left: 'center',
    },
    // title: [{
    //     text: '95%',
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: 24
    //     },
    //     itemGap: 20,
    //     left: '17%',
    //     top: '40%'
    // }, {
    //     text: '总体完成度',
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: 28,
    //         fontWeight: 'normal'
    //     },
    //     itemGap: 20,
    //     left: '12%',
    //     top: '50%'
    // }],
    grid: [
        {
            top: '15%',
            bottom: '5%',
            // width: '50%',
            left: '6%',
            containLabel: false,
        },
    ],
    angleAxis: {
        polarIndex: 0,
        min: 0,
        max: 100,
        show: false,
        boundaryGap: ['60%', '60%'],
        startAngle: 90,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    polar: [
        {
            center: ['20%', '50%'], //中心点位置
            radius: ['60%', '75%'],
        },
    ],
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: ['工序A', '工序B', '工序C', '工序D', '工序E'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '20',
                },
                formatter: function (value) {
                    return value + '%';
                },
            },
            data: [80.5, 30, 20, 11, 8],
        },
    ],
    series: [
        {
            name: '完成率',
            type: 'bar',
            zlevel: 1,
            silent: false,
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 24,
                    },
                    formatter: function (a, b) {
                        return a.name;
                    },
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#14d88e',
                },
            },
            barWidth: 20,
            data: [80.5, 30, 20, 11, 8],
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: '#f3f3f7',
                    barBorderRadius: 30,
                },
            },
        },
        // {
        //     type: 'bar',
        //     z: 10,
        //     name: "完成度",
        //     data: [30],
        //     showBackground: false,
        //     backgroundStyle: {
        //         borderWidth: 10,
        //         width: 10
        //     },
        //     coordinateSystem: 'polar',
        //     roundCap: true,
        //     barWidth: 25, //大的占比环
        //     itemStyle: {
        //         normal: {
        //             opacity: 1,
        //             color: "#14d88e"
        //         }
        //     },
        // },
        // {
        //     type: 'pie',
        //     name: '内层细圆环',
        //     radius: ['60%', '75%'],
        //     center: ['20%', '50%'], //中心点位置
        //     startAngle: 90,
        //     hoverAnimation: false,
        //     clockWise: true,
        //     silent: true,
        //     itemStyle: {
        //         normal: {
        //             color: '#f3f3f7',
        //             shadowBlur: 0,
        //             shadowColor: '#66666a',
        //         }
        //     },
        //     tooltip: {
        //         show: false,
        //     },
        //     label: {
        //         show: false
        //     },
        //     data: [100]
        // }
    ],
};
