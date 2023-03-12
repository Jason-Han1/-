var uploadedDataURL = '/asset/get/s/data-1635932884853-xSfEKuZsV.json';

myChart.showLoading('default', {
    text: '统计中，请稍候...',
    maskColor: '#022B5D',
    textColor: '#fff',
});

// const colorList = [
//     'rgba(0, 138, 255, ',
//     'rgba(240, 175, 57, ',
//     'rgba(223, 98, 56, ',
//     'rgba(0, 155, 109, ',
//     'rgba(164, 213, 102, ',
//     'rgba(147, 118, 248, ',
// ];

const colorList = [
    'rgba(0, 224, 255,',
    'rgba(253, 248, 64,',
    'rgba(0, 255, 198,',
    'rgba(255, 96, 0,',
];

const barColorList = [
    ['#008AFF', '#00E0FF'],
    ['#F0AF39', '#FDF840'],
    ['#00E8E0', '#00FFC6'],
];

const yAxisTemplate = {
    name: '',
    nameLocation: 'end',
    nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12,
        verticalAlign: 'top',
        align: 'right',
        padding: [-10, 0, -10, 0],
    },
    type: 'value',
    splitLine: {
        show: true,
        lineStyle: {
            color: 'rgba(255,255,255,0.1)',
        },
    },
    axisLabel: {
        margin: 10,
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    axisTick: {
        show: false,
        alignWithLabel: false,
    },
    axisLine: {
        show: false,
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
        },
    },
};

$.getJSON(uploadedDataURL, function (uploadedData) {
    const chartOption = uploadedData[0];
    const chartData = uploadedData[1];
    const chartDataByZBDM = {},
        chartOptionByZBDM = {};
    const xAxisData = [];
    let firstZBDM = '';
    chartData.forEach(function (item, i) {
        if (i === 0 || item.ZBDM === firstZBDM) {
            xAxisData.push(item.WD_X);
            firstZBDM = item.ZBDM;
        }
        if (chartDataByZBDM[item.ZBDM]) {
            chartDataByZBDM[item.ZBDM].push(item);
        } else {
            chartDataByZBDM[item.ZBDM] = [item];
        }
    });
    chartOption.forEach(function (item) {
        chartOptionByZBDM[item.ZBDM] = item;
    });

    var index = 0,
        series = [],
        yAxis = [],
        seriesType = {
            bar: 'bar',
            line: 'line',
            area: 'bar',
        };
    for (let key in chartDataByZBDM) {
        var zbzs = chartDataByZBDM[key];
        var ops = chartOptionByZBDM[key];
        var zbzByWD_X = {};
        zbzs.forEach(function (item) {
            zbzByWD_X[item.WD_X] = item;
        });
        var yAxisIndex = 0;
        yAxisTemplate.name = zbzs[0].JLDW || ops.JLDW;
        if (ops.ZBZ_Y == '1' && !yAxis[1]) {
            yAxis[1] = yAxisTemplate;
            yAxisIndex = 1;
        } else if (ops.ZBZ_Y != '1' && !yAxis[0]) {
            yAxis[0] = yAxisTemplate;
        }

        const seriesTemplate = {
            yAxisIndex: yAxisIndex,
            //color: colorList[index] + '1.0)',
            smooth: true,
            lineStyle: {
                color: colorList[index] + '1.0)',
            },
            symbol: 'none',
            label: {
                normal: {
                    show: false,
                },
            },
            areaStyle: {
                color: (function () {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: colorList[index] + '0.5)',
                            },
                            {
                                offset: 1,
                                color: colorList[index] + '0)',
                            },
                        ],
                        false
                    );
                })(),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
            },
            name: zbzs[0].ZBMC,
            type: seriesType[ops.XSLX],
            barWidth: 10,
            itemStyle: {
                barBorderRadius: 5,
                color: (function () {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: barColorList[index][0],
                            },
                            {
                                offset: 1,
                                color: barColorList[index][1],
                            },
                        ],
                        false
                    );
                })(),
            },
            data: xAxisData.map(function (x) {
                var item = zbzByWD_X[x];
                return {
                    legend: item.ZBMC,
                    name: item.WD_X,
                    value: item.ZBZ,
                };
            }),
        };

        if (ops.XSLX !== 'area') {
            delete seriesTemplate.areaStyle;
        }

        series.push(seriesTemplate);
        index++;
    }

    option = {
        backgroundColor: '#000',
        series: series,
        xAxis: [
            {
                data: xAxisData,
                type: 'category',
                axisLabel: {
                    fontSize: 14,
                    color: 'rgba(255, 255, 255, 0.5)',
                },
                axisTick: {
                    show: false,
                    alignWithLabel: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    },
                },
            },
        ],
        yAxis: yAxis,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(2, 30, 114, 1)',
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontSize: 16,
            },
            axisPointer: {
                show: true,
                snap: false,
                type: 'cross',
                label: {
                    show: false,
                },
                lineStyle: {
                    type: 'dashed',
                    color: '#2FD1FF',
                    width: 1,
                },
                crossStyle: {
                    opacity: 0,
                },
            },
        },
        grid: [
            {
                left: '5%',
                top: '10%',
                right: '5%',
                bottom: '5%',
                show: true,
                containLabel: true,
                borderWidth: 0,
            },
        ],
    };

    myChart.hideLoading();
    myChart.setOption(option);
});
