option = {
    baseOption: {
        backgroundColor: '#0e2147',
        timeline: {
            show: false,
        },
        color: ['#f14f75', '#2c7efa'],
        title: {
            //   text:'大北京景点帅哥美女统计',
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            //subtext: '作者:',
        },
        legend: {
            data: ['女', '男'],
            bottom: 8,
            left: 'center',
            itemHeight: 5,
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            //formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow',
            },
        },

        grid: [
            {
                show: false,
                left: '2%',
                top: 60,
                bottom: 60,
                containLabel: true,
                width: '45%',
            },
            {
                show: false,
                left: '50.5%',
                top: 60,
                bottom: 60,
                width: '0',
            },
            {
                show: false,
                right: '2%',
                top: 60,
                bottom: 60,
                containLabel: true,
                width: '45%',
            },
        ],

        xAxis: [
            {
                max: function (value) {
                    return value.max * 2 - 20;
                },
                type: 'value',
                triggerEvent: true,
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                max: function (value) {
                    return value.max * 2 - 20;
                },
                gridIndex: 2,
                type: 'value',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    margin: 8,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                },
                data: ['80岁+', '70-80岁', '60-70岁', '45-60岁', '30-45岁', '18-30岁', '0-18岁'],
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12,
                    },
                },
                data: ['80岁+', '70-80岁', '60-70岁', '45-60岁', '30-45岁', '18-30岁', '0-18岁'].map(function (value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center',
                        },
                    };
                }),
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: ['80岁+', '70-80岁', '60-70岁', '45-60岁', '30-45岁', '18-30岁', '0-18岁'],
            },
        ],
        series: [
            {
                name: '女',
                type: 'bar',
                stack: 'one',
                barGap: 15,
                barWidth: 30,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        textStyle: {
                            color: '#fff',

                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#f14f75',
                        opacity: 1,
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: [389, 259, 262, 324, 232, 176, 196],
            },

            {
                name: '男',
                stack: 'right',
                type: 'bar',
                barGap: 15,
                barWidth: 30,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#2c7efa',
                        opacity: 1,
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: [389, 259, 262, 324, 232, 176, 196],
            },
        ],
    },
};
