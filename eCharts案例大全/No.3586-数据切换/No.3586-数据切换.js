// Generate data
var category = [
    '0:00',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
];
var dottedBase = [];
var lineData = [
    18092,
    20728,
    24045,
    28348,
    32808,
    36097,
    39867,
    44715,
    48444,
    50415,
    56061,
    62677,
    59521,
    67560,
    18092,
    20728,
    24045,
    28348,
];
var barData = [
    4600,
    5000,
    5500,
    6500,
    7500,
    8500,
    9900,
    12500,
    14000,
    21500,
    23200,
    24450,
    25250,
    33300,
    4600,
    5000,
    5500,
    4555,
];
var rateData = [
    1832,
    2028,
    2445,
    2838,
    3288,
    3607,
    3967,
    4415,
    4844,
    5045,
    5061,
    6677,
    5521,
    6560,
    1092,
    2028,
    2045,
    2348,
];
var rateData1 = [460, 500, 550, 1500, 750, 850, 900, 1200, 1400, 2150, 2320, 2445, 2550, 330, 460, 500, 550, 455];

// option
option = {
    title: {
        text: '数据切换',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#B4B4B4',
            fontSize: 16,
            fontWeight: 'normal',
        },
    },
    backgroundColor: '#191E40',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC',
            },
        },
    },
    toolbox: {
        feature: {
            dataView: {
                show: false,
                readOnly: false,
                //         	optionToContent : function(opt) {
                //         	console.log(opt)
                //         	}
            },
            // myTool1: {
            //     show: true,
            //     title: '折线图',
            //     icon:
            //         'path://M512 981.333333c-209.866667 0-396.693333-126.026667-466.293333-314.08a35.52 35.52 0 0 1 23.626666-44.426666 38.613333 38.613333 0 0 1 48 20.693333c58.666667 158.933333 217.013333 265.493333 394.666667 265.6s336-106.666667 394.666667-266.133333a37.6 37.6 0 0 1 28.853333-23.626667 38.986667 38.986667 0 0 1 35.786667 11.946667 34.773333 34.773333 0 0 1 7.146666 35.36c-69.386667 188.373333-256.48 314.666667-466.453333 314.666666z m431.36-574.08a37.92 37.92 0 0 1-35.946667-24.266666C849.386667 222.56 690.613333 114.88 512 114.72S174.72 222.346667 116.746667 382.773333A38.72 38.72 0 0 1 69.333333 403.733333a35.786667 35.786667 0 0 1-24.106666-44.373333C113.333333 169.866667 301.013333 42.666667 512 42.666667s398.666667 127.306667 467.146667 316.96a34.56 34.56 0 0 1-4.906667 32.64 38.933333 38.933333 0 0 1-30.88 14.986666z',
            //     onclick: (val) => {
            //         // const chart = echarts.init((this.$refs as any).faultTree);
            //         // 还原
            //         chart.clear();
            //         chart.setOption(option);
            //         // 传值
            //         this.$emit('init');
            //         barData=[];
            //         console.log('click', val);
            //     },
            // },
            magicType: {
                show: true,
                type: ['line', 'bar'],
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: false,
            },
        },
    },
    legend: {
        data: ['商品浏览量', '商品访问数'],
        textStyle: {
            color: '#B4B4B4',
        },
        top: '7%',
    },
    grid: {
        x: '12%',
        width: '82%',
        y: '12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                },
            },

            axisLabel: {
                formatter: '{value} ',
            },
        },
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                },
            },
            axisLabel: {
                formatter: '{value} ',
            },
        },
    ],

    series: [
        {
            name: '商品浏览量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#956FD4',
                        },
                        {
                            offset: 1,
                            color: '#3EACE5',
                        },
                    ]),
                },
            },
            data: barData,
        },
        {
            name: '商品访问数',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#00ca95',
                },
            },
            data: rateData1,
        },
    ],
};
