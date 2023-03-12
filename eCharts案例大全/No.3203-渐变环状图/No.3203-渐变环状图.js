var seriesData = [
    {
        name: '农业银行',
        value: '100000',
    },
    {
        name: '建设银行',
        value: '40000',
    },
    {
        name: '招商银行',
        value: '53000',
    },
    {
        name: '光大银行',
        value: '40000',
    },
    {
        name: '工商银行',
        value: '40000',
    },
    {
        name: '中国银行',
        value: '40000',
    },
];
const borderColorList = [
    'rgba(255, 255, 255, 1)',
    'rgba(239, 93, 105, 1)',
    'rgba(239, 169, 93, 1)',
    'rgba(138, 107, 228, 1)',
    'rgba(124, 219, 95, 1)',
    'rgba(54, 160, 210, 1)',
];
var colorList = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(87, 87, 87, 1)',
        },
        {
            offset: 1,
            color: 'rgba(255, 255, 255, 1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(187, 61, 67, 1)',
        },
        {
            offset: 1,
            color: 'rgba(239, 93, 105, 1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(187, 126, 61, 1)',
        },
        {
            offset: 1,
            color: 'rgba(239, 169, 93, 1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(98, 66, 179, 1)',
        },
        {
            offset: 1,
            color: 'rgba(138, 107, 228, 1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(90, 176, 51, 1)',
        },
        {
            offset: 1,
            color: 'rgba(124, 219, 95, 1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(0, 95, 149, 1)',
        },
        {
            offset: 1,
            color: 'rgba(54, 160, 210, 1)',
        },
    ]),
];
seriesData.forEach((item, index) => {
    item.itemStyle = {
        normal: {
            borderWidth: 2,
            borderColor: borderColorList[index],
        },
    };
});
option = {
    backgroundColor: 'rgba(19, 52, 89, .5)',
    tooltip: {
        backgroundColor: 'rgba(9, 24, 48, 0.5)',
        borderColor: 'rgba(75, 253, 238, 0.4)',
        textStyle: {
            color: '#CFE3FC',
        },
        borderWidth: 1,
        padding: 5,
        formatter: function (parms) {
            let str = `${parms.data.name}<br/>数量<br><span>${parms.data.value}</span>元<br/>占比<br/><span class='echarts-tooltip-bigfont'>${parms.percent}</span>%`;
            return str;
        },
    },

    series: [
        {
            type: 'pie',
            radius: ['34%', '70%'],
            center: ['50%', '50%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
            },
            labelLine: {
                show: false,
                normal: {
                    show: false,
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            data: seriesData,
        },
    ],
};
