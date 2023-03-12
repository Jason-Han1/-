option = {
    backgroundColor: '#001037',
    grid: {
        top: '10%',
        left: '5%',
        right: '2%',
        bottom: '14%',
    },
    tooltip: {
        show: false,
    },
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            lineStyle: {
                color: 'transparent', //底部边框颜色
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff', //底部文字颜色
                fontSize: 12,
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)', //网格线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'transparent', //左边框颜色
                },
            },
            axisLabel: {
                show: true,
                fontSize: 12,
                textStyle: {
                    color: '#ADD6FF', //左文字颜色
                },
            },
        },
    ],
    series: [
        {
            name: '毕业学员',
            type: 'bar',
            barWidth: 30,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(21,136,209,0.1)',
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            // color: '#00FFE3',//渐变1
                            color: 'rgba(21,136,209,1)', //渐变1
                        },
                        {
                            offset: 1,
                            // color: '#4693EC',//渐变2
                            color: 'rgba(21,136,209,1)', //渐变2
                        },
                    ]),
                },
            },
            data: [20, 80, 100, 40, 34, 90, 60, 20, 80, 100, 40, 34],
            z: 0,
            zlevel: 0,
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 14,
            //     color: '#fff', //柱状顶部文字颜色
            //     formatter: function (params) {
            //         return '20%';
            //     },
            // },
        },
        {
            type: 'pictorialBar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: 'rgba(0,63,119,1)', //数据的间隔颜色
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolSize: [30, 4],
            symbolPosition: 'end',
            symbolOffset: [0, 0],
            data: [20, 80, 100, 40, 34, 90, 60, 20, 80, 100, 40, 34],
            z: 1,
            zlevel: 0,
        },
        {
            type: 'pictorialBar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: 'transparent', //数据的间隔颜色
                },
            },
            // symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolSize: [30, 4],

            // symbolPosition: 'start',
            // symbolOffset: [0, 0],
            data: [20, 80, 100, 40, 34, 90, 60, 20, 80, 100, 40, 34],
            z: 1,
            zlevel: 0,
            label: {
                show: true,
                position: 'top',
                fontSize: 14,
                color: '#fff', //柱状顶部文字颜色
                formatter: function (params) {
                    return '20%';
                },
            },
        },
        // {
        //     name: '毕业学员',
        //     type: 'bar',
        //     barGap: '-125%',
        //     data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        //     barWidth: 30,
        //     itemStyle: {
        //         normal: {
        //             color: 'transparent',
        //             barBorderColor: 'transparent',//柱状外边框颜色
        //             barBorderWidth: 1,
        //             label: {
        //                 show: false,
        //                 position: 'top',
        //             },
        //         },
        //     },
        //     z: 2,
        // },
    ],
};
