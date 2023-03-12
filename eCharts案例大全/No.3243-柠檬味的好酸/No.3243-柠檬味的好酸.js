option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        {
            offset: 0,
            color: '#023431',
        },
        {
            offset: 1,
            color: '#011726',
        },
    ]),
    grid: {
        top: '5%',
        left: '3%',
        right: '3%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        data: ['某某项1', '某某项2', '某某项3', '某某项4', '某某项5', '某某项6', '某某项7'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        // splitLine: { // 分隔线
        //     show: true, // 默认显示，属性show控制显示与否
        //     // onGap: null,
        //     lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        //         color: ['#ccc'],
        //         width: 1,
        //         type: 'solid'
        //     }
        // },
        axisLabel: {
            textStyle: {
                color: '#b9f2f4',
                backgroundColor: '#013443',
                padding: 10,
                borderColor: 'rgba(0, 185, 211, .9)',
                borderWidth: '1',
            },
        },
    },
    yAxis: {
        show: false,
    },
    series: [
        {
            name: '柱图',
            type: 'bar',
            // barWidth: '10%',
            data: [502.84, 502.84, 502.84, 502.84, 502.84, 502.84, 502.84],
            tooltip: {
                show: false,
            },
            barGap: '-50%',
            itemStyle: {
                normal: {
                    color: '#013f4b',
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: {
                            //数值样式
                            color: 'aqua',
                            fontSize: 15,
                        },
                        formatter: function (params) {
                            //核心部分 formatter 可以为字符串也可以是回调
                            switch (params.name) {
                                case '某某项1':
                                    return 14 + '%';
                                    break;
                                case '某某项2':
                                    return 24 + '%';
                                    break;
                                case '某某项3':
                                    return 34 + '%';
                                    break;
                                case '某某项4':
                                    return 44 + '%';
                                    break;
                                case '某某项5':
                                    return 54 + '%';
                                    break;
                                case '某某项6':
                                    return 64 + '万';
                                    break;
                                case '某某项7':
                                    return 74 + '%';
                            }
                            // if (params.value) { //如果当前值存在则拼接
                            //     return params.value + '%'
                            // } else { //否则返回个空
                            //     return '';
                            // }
                        },
                    },
                },
            },
        },
        {
            name: '外圈点',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: '#1766a7',
                    shadowColor: 'rgba(9, 64, 96, .9)',
                    shadowBlur: 0,
                    // shadowOffsetY: 5,
                    // shadowOffsetX: 5,
                },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     textStyle: {
            //         color: '#6c50f3',
            //     }
            // },
            itemStyle: {
                color: '#083b45',
                borderColor: '#45c9b2',
                borderWidth: 2,
                // shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                // shadowOffsetY: 2,
                // shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 223.69],
        },
        {
            name: '内部点',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: '#1766a7',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    // shadowOffsetY: 5,
                    // shadowOffsetX: 5,
                },
            },
            itemStyle: {
                color: '#45c9b2',
                borderWidth: 0,
                shadowBlur: 0,
            },
            tooltip: {
                show: false,
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 223.69],
        },
        // {
        //     name: '',
        //     type: 'bar',
        //     barWidth: '2',
        //     data: [502.84, 502.84, 502.84, 502.84, 502.84, 502.84, 502.84],
        //     type: 'bar',
        //     itemStyle: {
        //         normal: {
        //             color: 'rgba(9,64,96,0.9)'
        //         }
        //     },
        //     barGap: '-50%',
        //     // barCategoryGap: '40%',
        //     // animation: false
        // },
    ],
};
