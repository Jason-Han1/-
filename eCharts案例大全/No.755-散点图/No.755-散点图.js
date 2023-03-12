var reslult = [
    {
        name: '电力',
        value: 120,
        color: '#0097FB',
        position: [50,90],
        fontSize: '12',
        number: '2',
    },
    {
        name: '水利',
        value: 130,
        color: '#EA6270',
        position: [30, 70],
        fontSize: '14',
        number: '4',
    },
    {
        name: '批发',
        value: 130,
        color: '#8EF999',
        position: [50,70],
        number: '2',
        fontSize: '12',
    },
    {
        name: '制造',
        value: 130,
        color: '#FF9E49',
        position: [70, 70],
        number: '4',
        fontSize: '18',
    },
    {
        name: '房产',
        value: 150,
        color: '#FDFA4E',
        position: [20, 45],
        fontSize: '13',
        number: '3',
    },
    {
        name: '交通',
        value: 150,
        color: '#FF4848',
        position: [40, 45],
        fontSize: '18',
        number: '2',
    },
    {
        name: '服务',
        value: 150,
        color: '#00FFFF',
        position: [60, 45],
        number: '4',
        fontSize: '11',
    },
    {
        name: '教育',
        value: 150,
        color: '#601986',
        position: [80, 45],
        fontSize: '11',
        number: '2',
    },
];
var data = [];
// 渲染数据，并写入chart
reslult.map((item) => {
    data.push({
        name: item.name,
        value: item.position,
        symbolSize: item.value,
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                        offset: 0.2,
                        color: 'rgba(27, 54, 72, 0.3)',
                    },
                    {
                        offset: 1,
                        color: item.color,
                    },
                ]),
                opacity: 1,
                borderWidth: 1,
                borderColor: item.color,
            },
        },
    });
});
var series = [];
reslult.map((item, index) => {
    series.push({
        name: item.name,
        type: 'scatter',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '16',
                },
            },
        },
        data: data,
    });
});

option = {
    // backgroundColor: 'rgba(36, 130, 160, 0.5)',
    legend: {
        orient: 'rect',
        top: '1%',
        left: 'left',
        icon: 'roundRect',
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 10,
        data: ['电力', '水利', '批发', '制造', '房产', '交通', '服务', '教育'],
        textStyle: {
            color: 'rgba(255, 255, 255, .6)',
            fontSize: 14,
        },
        legendHoverLink:false
    },
    grid: {
        top: 10,
        left: 100,
        bottom: 10,
    },
    xAxis: [
        {
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5,
        },
    ],
    yAxis: [
        {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30,
        },
    ],

    series: series,
};

