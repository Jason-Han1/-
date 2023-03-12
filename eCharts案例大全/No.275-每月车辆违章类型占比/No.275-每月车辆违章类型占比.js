var xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
var tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40];
var tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30];
option = {
    backgroundColor: '#fff',
    title: {
        text: '每月车辆违章类型占比',
        x: 'center',
        top: '15px',
        textStyle: {
            color: '#333333',
            fontWeight: 500,
            fontSize: 18,
        },
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderColor: 'rgba(0,0,0,0)',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                params[0].marker +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                '<br/>' +
                params[1].marker +
                params[1].seriesName +
                ' : ' +
                params[1].value +
                '%' +
                '<br/>' +
                params[2].marker +
                params[2].seriesName +
                ' : ' +
                params[2].value +
                '%'
            );
        },
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: false,
                color: '#aaa',
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#aaa',
                width: 100,
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: xData,
        },
    ],

    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed', //虚线
                    color: '#00BFF3',
                    opacity: 0.23,
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#aaa',
                },
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            position: 'right',
            axisLabel: {
                formatter: '{value}%', //使图变成百分比形式
            },
            splitLine: {
                //网格线显不显示
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '违章次数',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 15,
            // barGap: "10%",
            data: tq.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        normal: {
                            barBorderRadius: item > 0 ? [15, 15, 0, 0] : [0, 0, 15, 15], //左上角参数1, 右上角参数2, 右下角参数3, 左下角参数4
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: item > 0 ? '#956FD4' : '#64ccff',
                                },
                                {
                                    offset: 1,
                                    color: item > 0 ? '#64ccff' : '#956FD4',
                                },
                            ]),
                        },
                    },
                };
            }),
        },
        {
            name: '环比上月',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: '#A582EA',
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#A582EA',
                },
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#A582EA',
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(145, 118, 215,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(145, 118, 215,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: tq1, //data.values
        },
        {
            name: '同比上月',
            type: 'line',
            yAxisIndex: 1,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: '#64ccff',
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#64ccff',
                },
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#64ccff',
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(102, 200, 253,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(81,150,164,0)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: tq2, //data.values
        },
    ],
};
