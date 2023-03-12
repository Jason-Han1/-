let nameList = [
    '本科生占全日制在校生总数的比例（%）',
    '体质测试达标率（%）',
    '应届本科生就业率（%）',
    '应届本科生学位授予率（%）',
    '应届本科生毕业率（%）',
];
let valueList = [612.5, 548.7, 300.2, 300, 400];
let colorList = ['#FFC949', '#FB6A66', '#867DFF', '#06CA70', '#008AFF'];
let total = 1000; // 数据总数
console.log(nameList, valueList, colorList, total);
let emue = ['yellow', 'red', 'purple', 'green', 'blue'];
var category = nameList.map((item, index) => {
    return {
        value: valueList[index],
        itemStyle: {
            color: colorList[index],
        },
    };
});
var totalList = [];
var totalBorderList = [];
nameList.map((item, index) => {
    totalList.push({
        value: total,
        itemStyle: {
            color: colorList[index],
        },
    });
    totalBorderList.push({
        value: total,
        itemStyle: {
            borderColor: colorList[index],
            color: 'transparent',
        },
    });
});
var datas = [];
category.forEach((value) => {
    datas.push(value.value);
});
console.log(datas);
option = {
    backgroundColor:'#020b3f',
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
                        console.log(item);
                        return `{${emue[item['dataIndex']]}|${item['name']}}`;
                    },
                    textStyle: {
                        color: '#008AFF',
                        fontSize: 14,
                    },
                    position: [0, '-25px'],
                    show: true,
                    rich: {
                        green: {
                            color: '#06CA70',
                        },
                        blue: {
                            color: '#008AFF',
                        },
                        purple: {
                            color: '#867DFF',
                        },
                        red: {
                            color: '#FB6A66',
                        },
                        yellow: {
                            color: '#FFC949',
                        },
                    },
                },
            },
            data: category,
            z: 1,
            animationEasing: 'elasticOut',
        },

        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#020b3f',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 1,
            symbol: 'rect',
            symbolClip: false,
            symbolSize: [1,17],
            symbolPosition: 'start',
            symbolOffset: [3, -2],
            symbolBoundingData: this.total,
            data: [total, total, total, total, total],
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
                        text = `{${emue[params['dataIndex']]}|${((params['data'] * 100) / total).toFixed(2)}%}`;
                        return text;
                    },
                    rich: {
                        green: {
                            color: '#06CA70',
                        },
                        blue: {
                            color: '#008AFF',
                        },
                        purple: {
                            color: '#867DFF',
                        },
                        red: {
                            color: '#FB6A66',
                        },
                        yellow: {
                            color: '#FFC949',
                        },
                    },
                    position: 'right',
                    offset: [0, -3],
                    distance: 10, // 向右偏移位置
                    show: true,
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
        },
    ],
};
