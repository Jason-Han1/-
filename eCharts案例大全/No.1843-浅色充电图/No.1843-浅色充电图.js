let nameList = ['a', 'b', 'c', 'd'];
let valueList = [100, 200, 300, 400];
let total = 400; // 数据总数
var category = nameList.map((item, index) => {
    return {
        value: valueList[index],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                1,
                0,
                0,
                1,
                [
                    {
                        offset: 0,
                        color: 'rgba(81, 193, 156, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(234, 177, 100, 1)',
                    },
                ],
                false
            ),
        },
    };
});
var totalList = [];
var totalBorderList = [];
nameList.map((item, index) => {
    totalList.push({
        value: total,
        itemStyle: {
            color: 'rgba(51, 147, 236, 0.29)',
        },
    });
    totalBorderList.push({
        value: total,
        itemStyle: {
            borderColor: 'rgba(51, 147, 236, 0.29)',
            color: 'transparent',
        },
    });
});
var datas = [];
category.forEach((value) => {
    datas.push(value.value);
});
option = {
    backgroundColor: 'rgb(231,238,249)',
    xAxis: {
        max: total,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    grid: {
        left: '5%',
        top: '15%', // 设置条形图的边距
        right: '15%',
        bottom: '5%',
    },
    yAxis: [
        {
            type: 'category',
            inverse: false,
            data: nameList,
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
    ],
    series: [
        {
            // 内
            type: 'bar',
            barWidth: 16,
            barGap: '20%',
            silent: true,
            label: {
                normal: {
                    formatter: (item) => {
                        return `${item['name']}：${item['value']} `;
                    },
                    textStyle: {
                        color: 'rgba(105, 120, 136, 1)',
                        fontSize: 14,
                    },
                    position: [0, '-25px'],
                    show: true,
                },
            },
            data: category,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(81, 193, 156, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(234, 177, 100, 1)',
                            },
                        ],
                        false
                    ),
                },
            },
            animationEasing: 'elasticOut',
        },

        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgb(231,238,249)',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 8,
            symbol: 'rect',
            symbolClip: false,
            symbolSize: [4, 17],
            symbolPosition: 'start',
            symbolOffset: [1, -2],
            symbolBoundingData: total,
            data: [total, total, total, total],
            z: 2,
            animationEasing: 'elasticOut',
        },
        {
            // label
            type: 'pictorialBar',
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: 'none',
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        console.log(params);
                        var text;
                        text = `${((params['data'] * 100) / total).toFixed(2)}%`;
                        return text;
                    },
                    position: 'right',
                    offset: [0, -3],
                    distance: 10, // 向右偏移位置
                    show: true,
                    color: 'rgba(42, 82, 200, 1)',
                },
            },
            data: datas,
            z: 0,
        },
        {
            name: '外框',
            type: 'bar',
            barGap: '-130%', // 设置外框粗细
            data: totalBorderList,
            barWidth: 26,
            itemStyle: {
                normal: {
                    // barBorderRadius: [5, 5, 5, 5],
                    borderWidth: 1, // 边框宽度
                    borderColor: 'rgb(51, 147, 236)', // 边框色
                    color: 'rgb(231,238,249)'
                },
            },
            z: 0,
        },
        {
            type: 'scatter',
            name: '条形',
            symbol: 'roundRect',
            symbolSize: [4, 12],
            symbolOffset: [3, -3],
            symbolKeepAspect: true,
            data: totalList,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: 'rgba(51, 147, 236, 0.29)',
                },
            },
        },
    ],
};
