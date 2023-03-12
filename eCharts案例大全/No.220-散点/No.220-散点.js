const dataBJ = [
    [1, 55, 9, 56, '良'],
    [2, 25, 11, 21, '优'],
    [3, 56, 7, 63, '良'],
    [4, 33, 7, 29, '优'],
    [5, 42, 24, 44, '优'],
    [6, 82, 58, 90, '良'],
    [7, 74, 49, 77, '良'],
    [8, 78, 55, 80, '良'],
    [9, 267, 216, 280, '重度污染'],
    [10, 185, 127, 216, '中度污染'],
    [11, 39, 19, 38, '优'],
    [12, 41, 11, 40, '优'],
    [13, 64, 38, 74, '良'],
    [14, 108, 79, 120, '轻度污染'],
    [15, 108, 63, 116, '轻度污染'],
    [16, 33, 6, 29, '优'],
    [17, 94, 66, 110, '良'],
    [18, 186, 142, 192, '中度污染'],
    [19, 57, 31, 54, '良'],
    [20, 22, 8, 17, '优'],
    [21, 39, 15, 36, '优'],
    [22, 94, 69, 114, '良'],
    [23, 99, 73, 110, '良'],
    [24, 31, 12, 30, '优'],
    [25, 42, 27, 43, '优'],
    [26, 154, 117, 157, '中度污染'],
    [27, 234, 185, 230, '重度污染'],
    [28, 160, 120, 186, '中度污染'],
    [29, 134, 96, 165, '轻度污染'],
    [30, 52, 24, 60, '良'],
    [31, 46, 5, 49, '优'],
];

const schema = [
    { name: 'date', index: 0, text: '日' },
    { name: 'AQIindex', index: 1, text: 'AQI指数' },
    { name: 'PM25', index: 2, text: 'PM2.5' },
    { name: 'co2', index: 3, text: '二氧化碳' },
];
const itemStyle = {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.3)',
};
option = {
    backgroundColor: '#132A7F',
    color: ['#dd4444', '#fec42c', '#80F1BE'],
    legend: {
        show: false,
    },
    grid: {
        left: '10%',
        right: '20%',
        top: '10%',
        bottom: '10%',
    },
    tooltip: {
        backgroundColor: '#1B2D56',
        borderColor: '#2BD8FB',
        textStyle: {
            color: '#fff',
        },
        formatter: function (param) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px;">'
                                    + param.seriesName + ' ' + value[0] + '日：'
                                    + value[4]
                                    + '</div>'
                                    + schema[1].text + '：' + value[1] + '<br>'
                                    + schema[2].text + '：' + value[2] + '<br>'
                                    + schema[3].text + '：' + value[3] + '<br>';
        },
    },
    xAxis: {
        type: 'value',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 16,
        },
        max: 31,
        splitLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
    },
    yAxis: {
        type: 'value',
        // name: 'AQI指数',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            fontSize: 16,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            // itemWidth: 30,
            itemHeight: 55,
            calculable: true,
            precision: 0.1,
            text: ['PM2.5'],
            textStyle: {
                color: '#fff',
            },
            // textGap: 30,
            inRange: {
                symbolSize: [10, 70],
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,0.4)'],
            },
            controller: {
                inRange: {
                    color: ['#c23531'],
                },
                outOfRange: {
                    color: ['#999'],
                },
            },
        },
        {
            left: 'right',
            top: '50%',
            dimension: 3,
            min: 0,
            max: 100,
            calculable: true,
            itemHeight: 55,
            text: ['二氧化碳'],
            textStyle: {
                color: '#fff',
            },
            // textGap: 30,
            inRange: {
                colorLightness: [0.9, 0.5],
            },
            outOfRange: {
                color: ['rgba(255,255,255,0.4)'],
            },
            controller: {
                inRange: {
                    color: ['#c23531'],
                },
                outOfRange: {
                    color: ['#999'],
                },
            },
        },
    ],
    series: [
        {
            name: '东钱湖',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ,
        },
    ],
};
myChart.setOption(option);
