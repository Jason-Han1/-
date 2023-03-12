var myData = ['one', 'two', 'three', 'four', 'five', 'six'];
var data1 = [1, 2, 3, 40, 5, 6];
var data2 = [1, 2, 3, 4, 5, 6];
var data3 = [1, 2, 30, 4, 5, 6];
var data4 = [1, 2, 3, 60, 5, 6];
var data5 = [1, 2, 3, 20, 5, 6];
var data6 = [1, 2, 3, 60, 5, 6];
var option = {
    backgroundColor: '#080b30',
    baseOption: {
        backgroundColor: '#080b30',
        timeline: {
            show: false,
            top: 0,
            data: [],
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderColor: 'rgba(0,0,0,0.6)',
            textStyle: {
                color: '#fff',
            },
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        legend: {
            top: '5%',
            itemWidth: 30,
            itemHeight: 12,
            textStyle: {
                color: '#ffffff',
                fontSize: 16,
            },
            data: ['拌和盘数', '合格盘数', '一级预警数', '二级预警数', '三级预警数', '未闭合数'],
        },
        grid: [
            {
                left: '5%',
                top: '10%',
                bottom: '20%',
                width: '38%',
            },
            {
                show: false,
                left: '50.5%',
                top: '10%',
                bottom: '20%',
            },
            // right
            {
                show: false,
                right: '5%',
                top: '10%',
                bottom: '20%',
                width: '38%',
            },
        ],
        xAxis: [
            {
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'bottom',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white',
                        fontSize: '16',
                    },
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#B5B5B5'],
                        type: 'dashed',
                        opacity: 0.5,
                    },
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'bottom',
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: 'white',
                        fontSize: '16',
                    },
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#B5B5B5'],
                        type: 'dashed',
                        opacity: 0.5,
                    },
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
                },
                data: myData,
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
                        fontSize: 20,
                    },
                },
                data: myData.map(function (value) {
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
                data: myData,
            },
        ],
        series: [],
    },
    options: [
        {
            series: [
                {
                    name: '拌和盘数',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#8D9ECC',
                        },
                    },
                    data: data1,
                },
                {
                    name: '合格盘数',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#1BCC98',
                        },
                    },
                    data: data2,
                },
                {
                    name: '一级预警数',
                    stack: 'yj',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#5EA1FF',
                        },
                    },
                    data: data3,
                },
                {
                    name: '二级预警数',
                    stack: 'yj',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#FFD355',
                        },
                    },
                    data: data4,
                },
                {
                    name: '三级预警数',
                    stack: 'yj',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#E56E82',
                        },
                    },
                    data: data5,
                },
                {
                    name: '未闭合数',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#9B1C1C',
                        },
                    },
                    data: data6,
                },
            ],
        },
    ],
};
