var plantCap = [
    {
        name: '温州',
        value: '53%',
    },
    {
        name: '市级',
        value: '46%',
    },
    {
        name: '洞头',
        value: '5T',
    },
    {
        name: '瑞安',
        value: '95M',
    },
    {
        name: '乐清',
        value: '57%',
    },
    {
        name: '苍南',
        value: '43%',
    },
    {
        name: '平阳',
        value: '43%',
    },
    {
        name: '永嘉',
        value: '43%',
    },
    {
        name: '文成',
        value: '43%',
    },
    {
        name: '龙港',
        value: '43%',
    },
];
var datalist = [
    {
        offset: [220, 160],
        symbolSize: 134,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(229, 137, 29, 0.3)',
            },
            {
                offset: 1,
                color: 'rgba(229, 137, 29, 1)',
            },
        ]),
        borderColor: 'rgba(229, 137, 29, 1)'
    },
    {
        offset: [60 + 50, 195 + 50],
        symbolSize: 100,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(236, 166, 56, 0.3)',
            },
            {
                offset: 1,
                color: 'rgba(236, 166, 56, 1)',
            },
        ]),
        borderColor: 'rgba(236, 166, 56, 1)'
    },
    {
        offset: [166 + 48, 156 + 78 + 48],
        symbolSize: 96,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(186, 199, 224, 0.3)',
            },
            {
                offset: 1,
                color: 'rgba(186, 199, 224, 1)',
            },
        ]),
        borderColor: 'rgba(186, 199, 224, 1)',
    },
    {
        offset: [274 + 43, 136 + 78 + 43],
        symbolSize: 86,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
    {
        offset: [324 + 43, 52 + 78 + 43],
        symbolSize: 86,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
    {
        offset: [297 + 40, 44 + 40],
        symbolSize: 80,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
    {
        offset: [217 + 39, 0 + 39],
        symbolSize: 78,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
    {
        offset: [128 + 33, 10 + 33],
        symbolSize: 66,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
    {
        offset: [56 + 32, 50 + 32],
        symbolSize: 64,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
    {
        offset: [51 + 30, 51 + 78 + 30],
        symbolSize: 60,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
                offset: 0,
                color: 'rgba(70, 155, 240, 0)',
            },
            {
                offset: 1,
                color: 'rgba(70, 155, 240, 1)',
            },
        ]),
        borderColor: 'rgba(70, 155, 240, 1)',
    },
];

var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.value + '\n' + item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            textStyle: {
                fontSize: 14,
            },
        },
        itemStyle: {
            color: itemToStyle.color,
            opacity: itemToStyle.opacity,
            borderColor: itemToStyle.borderColor
        },
    });
}
option = {
    grid: {
        show: false,
        top: 10,
        bottom: 10,
    },

    xAxis: [
        {
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 440,
            nameLocation: 'middle',
            nameGap: 5,
        },
    ],

    yAxis: [
        {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 320,
            nameLocation: 'middle',
            nameGap: 30,
        },
    ],
    series: [
        {
            type: 'effectScatter', //scatter
            symbol: 'circle',
            symbolSize: 120,
            showEffectOn: 'emphasis',
            rippleEffect: {
                scale: 1.5
            },
            label: {
                show: true,
                formatter: '{b}',
                color: 'rgba(208, 221, 244, 1)',
                lineHeight: 15,
                textStyle: {
                    fontSize: '30',
                },
            },
            itemStyle: {
                borderWidth: '2',
                borderType: 'solid',
                borderColor: '#00ffff',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 30,
            },
            data: datas,
        },
    ],
};
