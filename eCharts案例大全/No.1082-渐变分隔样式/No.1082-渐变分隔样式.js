

var ellegalCard = {
    nameList: ['张三'],
    valueList: [60],
    colorList: ['#0742B9'],
    colorList1: ['#1BDFFC'],
    emue: ['yellow', 'red', 'purple', 'green', 'blue'],
    total: 100,
};
var category = ellegalCard.nameList.map((item, index) => {
    return {
        value: ellegalCard.valueList[index],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                    offset: 0,
                    color: ellegalCard.colorList[index],
                },
                {
                    offset: 1,
                    color: ellegalCard.colorList1[index],
                },
            ]),
        },
    };
});
var totalList = [];
var totalBorderList = [];
ellegalCard.nameList.map((item, index) => {
    totalList.push({
        value: ellegalCard.total,
        itemStyle: {
            color: ellegalCard.colorList[index],
        },
    });
    totalBorderList.push({
        value: ellegalCard.total,
        itemStyle: {
            borderColor: '#051C48',
            color: '#051C48',
        },
    });
});
var datas = [];
category.forEach((value) => {
    datas.push(value.value);
});
option = {
    xAxis: {
        max: ellegalCard.total,
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
        left: '2%',
        top: '0%', // 设置条形图的边距
        right: '25%',
        bottom: '0%',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            data: ellegalCard.nameList,
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
            barWidth: 12,
            barGap: '20%',
            silent: true,
            label: {
                normal: {
                    formatter: (item) => {
                        return item.name;
                    },
                    textStyle: {
                        color: '#ccc',
                        fontSize: 14,
                    },
                    position: [0, '-20px'],
                    show: true,
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
                    color: '#051C48',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 5, //蓝色宽度
            symbol: 'rect',
            symbolClip: false,
            symbolSize: [4, 18],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            symbolBoundingData: ellegalCard.total,
            data: [ellegalCard.total, ellegalCard.total, ellegalCard.total, ellegalCard.total, ellegalCard.total],
            z: 2,
            animationEasing: 'elasticOut',
        },
        {
            // label
            type: 'pictorialBar',
            symbolBoundingData: ellegalCard.total,
            itemStyle: {
                normal: {
                    color: 'none',
                },
            },
            label: {
                normal: {
                    color: '#ACEAF1',
                    fontSize: 12,
                    formatter: (params) => {
                        console.log(params)
                        var text;
                        text = `{${ellegalCard.emue[3]}|${(params['data'])}}`;
                        return text + '  /  ' + ellegalCard.total + '次';
                    },
                    rich: {
                        yellow: {
                            color: '#0A56C2',
                            fontSize: 24,
                            fontWeight: 700,
                        },
                        red: {
                            color: '#0ABCAF',
                            fontSize: 24,
                            fontWeight: 700,
                        },
                        purple: {
                            color: '#FBA957',
                            fontSize: 24,
                            fontWeight: 700,
                        },
                        green: {
                            color: '#9FE1F4',
                            fontSize: 24,
                            fontWeight: 700,
                        },
                        blue: {
                            color: '#F8F29A',
                            fontSize: 24,
                            fontWeight: 700,
                        },
                    },
                    position: 'right',
                    offset: [0, -3],
                    distance: 10, // 向右偏移位置
                    show: true,
                },
            },
            data: datas,
            z: 4,
        },

        {
            name: '外框',
            type: 'bar',
            barGap: '-130%', // 设置外框粗细
            data: totalBorderList,
            barWidth: 20,
            itemStyle: {
                color: '#ccc',
                normal: {
                    barBorderRadius: [5, 5, 5, 5],
                    borderWidth: 1, // 边框宽度
                },
            },
            z: 0,
        },
    ],
};
