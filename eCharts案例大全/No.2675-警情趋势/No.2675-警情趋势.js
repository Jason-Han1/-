var xLabel = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
    option = {
        backgroundColor: '#0f375f',
        tooltip: {
            trigger: 'axis',
            //  type: 'effectScatter',
            // showEffectOn: 'render',
            // rippleEffect: {
            //     period: 10,
            //     scale: 4,
            //     brushType: 'fill'
            // },
            // hoverAnimation: true,
            // itemStyle: {
            //     normal: {
            //         color: 'rgba(217,247,249,1)',
            //         shadowBlur: 10,
            //         shadowColor: '#333'
            //     }
            // },
        },

        xAxis: {
            data: xLabel,
            axisLine: {
                lineStyle: {
                    color: '#11417a',
                    type: 'dashed',
                },
            },
            splitLine: {
                //   show: true,
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#11417a',
                    type: 'dashed',
                    // opacity: 0.5,
                },
            },
            axisTick: {
                show: false, //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 14,
                textStyle: {
                    color: '#fff', //X轴文字颜色
                },
            },
        },
        yAxis: [
            {
                type: 'value',
                gridIndex: 0,
                // min: 0,
                // max: 100,
                interval: 50,
                // splitNumber: 4,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2C4B86',
                        // type:"s"
                        width: 1,
                    },
                },

                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#11417a'],
                        type: 'dashed',
                        // opacity: 0.5,
                    },
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#1EF4FF', //X轴文字颜色
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#11417a'],
                        type: 'dashed',
                        // opacity: 0.5,
                    },
                },
                axisLabel: {
                    show: true,
                    margin: 14,
                    fontSize: 14,
                    textStyle: {
                        color: '#1EF4FF', //X轴文字颜色
                    },
                },
            },
        ],
        series: [
            {
                name: '课时',
                type: 'line',
                data: [23, 60, 20, 36, 23, 85],
                lineStyle: {
                    normal: {
                        width: 8,
                        color: '#FFA031',
                        shadowColor: 'rgba(255,160,50, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: -8,
                    },
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff',
                    },
                },
                showAllSymbol: true,

                symbol: 'circle',
                symbolSize: 15,

                itemStyle: {
                    color: '#FFA031',
                    borderColor: '#FFA031',
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                },
                // emphasis: {
                //     scale: true,
                //     label: {
                //         borderColor: 'red',
                //     },
                // },

                smooth: true,
            },
        ],
    };
