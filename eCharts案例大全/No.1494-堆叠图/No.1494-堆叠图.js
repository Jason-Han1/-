const list1 = [30, 150, 140, 100];
const list2 = [25, 80, 70, 30];
const icon2 = [55, 230, 210, 130];
const list3 = [30, 30, 40, 50];
const icon3 = [85, 260, 250, 180];
option = {
    backgroundColor: '#021132',
    calculable: true,
    legend: {
        top: 20,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            color: '#fff',
        },
    },
    xAxis: {
        type: 'category',
        data: ['张三', '李四', '王五', '陈六'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: 'gray',
                opacity: 1,
            },
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 20,
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: [
        {
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.5,
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 20,
                },
            },
        },
    ],
    series: [
        {
            //三个最低下的圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [14, 6],
            symbolOffset: [0, 3],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var a = params.name.slice(0, 2);
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#347DFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#347DFF', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: [0.5, 0.5, 0.5, 0.5],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [14, 6],
            symbolOffset: [0, -4],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var a = params.name.slice(0, 2);

                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#26AEED', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#024E8E', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            symbolPosition: 'end',
            data: list1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [14, 6],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var a = params.name.slice(0, 2);

                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#ED9926', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#8E6402', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            symbolPosition: 'end',
            data: icon2,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [14, 6],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var a = params.name.slice(0, 2);

                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#31DCC9', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#108477', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            symbolPosition: 'end',
            data: icon3,
        },
        {
            name: '人员信息',
            type: 'bar',
            stack: '1',
            data: list1,
            // 设置柱子的宽度
            barWidth: 14,
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: '#347DFF',
                },
            },
        },
        {
            name: '人员信息2',
            type: 'bar',
            stack: '1',
            data: list2,
            // 设置柱子的宽度
            barWidth: 60,
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: '#FFC14B',
                },
            },
        },
        {
            name: '人员信息3',
            type: 'bar',
            stack: '1',
            data: list3,
            // 设置柱子的宽度
            barWidth: 60,
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: '#31DCC9',
                },
            },
        },
    ],
};
