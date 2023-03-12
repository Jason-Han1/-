let cur_chart_data = [
    {
        name: '80分以下',
        value: 2,
        unit: '家',
    },
    {
        name: '80-90分',
        value: 12,
        unit: '家',
    },
    {
        name: '90分以上',
        value: 14,
        unit: '家',
    },
];

let dashedPic =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC',
    color = ['#FFC438', '#01CBCF', '#128DFE', '#009DFF'],
    arrName = [],
    arrValue = [],
    sum = 0,
    pieSeries = [],
    lineYAxis = [],
    chartData;

chartData = cur_chart_data;

// 数据处理
chartData &&
    chartData.forEach((v, i) => {
        arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
    });

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '评价',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [90 - i * 25 + '%', 75 - i * 25 + '%'],
        center: ['30%', '50%'],
        label: {
            show: false,
        },
        data: [
            { value: v.value, name: v.name },
            {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false,
        hoverAnimation: false,
        radius: [90 - i * 25 + '%', 75 - i * 25 + '%'],
        center: ['30%', '50%'],
        label: {
            show: false,
        },
        data: [
            {
                value: 7.5,
                itemStyle: {
                    color: '#E3F0FF',
                },
            },
            {
                value: 2.5,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    });
    v.percent = ((v.value / sum) * 100).toFixed(1) + '%';
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5],
                },
            },
        },
    });
});

option = {
    grid: {
        top: '10%',
        bottom: '54%',
        left: '30%',
        containLabel: false,
    },
    backgroundColor: '#fff',
    color: color,
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                top: '30%',
                padding: [0, 0, 20, 0],
                formatter: function (params) {
                    let item = chartData[params];
                    // console.log(item)
                    return '{line|}{circle|●}{name|' + item.name + '}{value|' + item.value + '家}';
                },
                interval: 0,
                inside: true,
                textStyle: {
                    color: '#333',
                    fontSize: 14,
                    rich: {
                        line: {
                            width: 30,
                            height: 10,
                            backgroundColor: { image: dashedPic },
                        },
                        name: {
                            color: '#666',
                            fontSize: 12,
                        },
                        value: {
                            color: '#333',
                            fontSize: 12,
                            fontWeight: 'bold',
                            padding: [0, 0, 0, 4],
                        },
                    },
                },
                show: true,
            },
            data: lineYAxis,
        },
    ],
    xAxis: [
        {
            show: false,
        },
    ],
    title: {
        text: '今天天气不错',
        textStyle: {
            label: {
                normal: {
                    show: true,
                    formatter: ['The whole box is a {term|Text Block}, with'].join('\n'),
                    backgroundColor: '#eee',
                    // borderColor: '#333',
                    borderColor: 'rgb(199,86,83)',
                    borderWidth: 2,
                    borderRadius: 5,
                    padding: 10,
                    color: '#000',
                    fontSize: 14,
                    shadowBlur: 3,
                    shadowColor: '#888',
                    shadowOffsetX: 0,
                    shadowOffsetY: 3,
                    lineHeight: 30,
                    rich: {
                        term: {
                            fontSize: 18,
                            color: 'rgb(199,86,83)',
                        },
                    },
                },
            },
        },
    },
    series: pieSeries,
};
