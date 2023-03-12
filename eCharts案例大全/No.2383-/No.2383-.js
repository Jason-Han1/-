option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var relVal = params[0].name + '<br/>';
            relVal += params[0].seriesName + ':' + Math.abs(params[0].value) + '<br/>';
            relVal += params[1].seriesName + ':' + Math.abs(params[1].value) + '<br/>';
            relVal += params[2].seriesName + ':' + Math.abs(params[2].value) + '<br/>';
            return relVal; //负数取绝对值变正数
        },
    },
    legend: {
        data: ['支出', '收入'],
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         mark: {
    //             show: true,
    //         },
    //         dataView: {
    //             show: true,
    //             readOnly: false,
    //         },
    //         magicType: {
    //             show: true,
    //             type: ['line', 'bar'],
    //         },
    //         restore: {
    //             show: true,
    //         },
    //         saveAsImage: {
    //             show: true,
    //         },
    //     },
    // },
    calculable: true,
    xAxis: [
        {
            type: 'value',
             splitLine: {
                show: true
            },
            axisLabel: {
                formatter: function (value) {
                    if (value < 0) {
                        return -value;
                    } else {
                        return value;
                    }
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
    ],
    series: [
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                    },
                    barBorderRadius: 10 //圆角大小
                },
            },
            data: [320, 302, 341, 374, 390, 450, 420],
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderRadius: 10, //圆角大小
                    label: {
                        show: true,
                        position: 'left',
                        formatter: function (data) {
                            if (data.value < 0) {
                                return Math.abs(data.value);
                            }
                        },
                    },
                },
            },
            data: [-120, -132, -101, -134, -190, -230, -210],
        },
    ],
};
