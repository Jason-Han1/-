let chartData = [
    {
        AQI: [87, 115, 56, 54, 87, 15, 45, 36, 45, 84, 51, 54],
    },
    {
        SO2: [54, 76, 23, 43, 65, 87, 67, 45, 45, 84, 45, 34],
    },
    {
        NO2: [87, 53, 56, 54, 113, 15, 87, 23, 45, 84, 34, 54],
    },
    {
        CO: [87, 133, 56, 54, 87, 34, 45, 36, 45, 84, 51, 54],
    },
    {
        O3: [87, 87, 56, 65, 34, 45, 65, 36, 45, 84, 51, 54],
    },
    {
        PM10: [87, 78, 56, 54, 87, 34, 45, 36, 97, 84, 67, 54],
    },
    {
        O2: [87, 98, 56, 54, 87, 43, 45, 36, 45, 84, 88, 45],
    },
];
let colorArr = [
    'rgb(0,228,0)',
    '#ead656',
    '#fe7c4b',
    '#23b899',
    '#9c6cff',
    '#008ca1',
    '#dca111',
    '#00d2ec',
    '#004aa0',
    '#5e42d2',
    '#387dff',
    '#ead656',
];
let yarrlength = 0; // 展现多少条数据（临时写死）
let series = [];
let xarr = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
let yarrx = ['AQI', 'SO2', 'NO2', 'CO', 'O3', 'PM10', 'O2'];

yarrlength = chartData.length;
let stationArr = [];
for (var i = 0; i < yarrlength; i++) {
    stationArr.push({ avgval: [] });
}
for (var j = 0; j < yarrlength; j++) {
    for (let key in chartData[j]) {
        stationArr[j].avgval = chartData[j][key];
    }
}
for (var k = 0; k < yarrlength; k++) {
    series.push({
        name: yarrx[k],
        type: 'line',
        symbolSize: 8,
        data: stationArr[k].avgval,
        smooth: true,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, // 变化度
                // 三种由深及浅的颜色
                [
                    {
                        offset: 0,
                        color: colorArr[k],
                    },
                    {
                        offset: 0.8,
                        color: 'rgba(255,255,255,0.1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0,0.1)',
                    },
                ]
            ),
            type: 'linear',
            global: false,
        },
    });
}
let selectedObj = {};

series.forEach((item, index) => {
    if (index === 0) {
        selectedObj[item.name] = true;
    } else {
        selectedObj[item.name] = false;
    }
});

// let min = undefined,
// 	max = undefined,
// 	splitNumber = undefined;

option = {
    backgroundColor:"#313131",
    title: {},
    legend: {
        type: 'scroll',
        right: '60',
        selectedMode: 'single',
        bottom: '3%',
        left: 'center',
        inactiveColor: '#666',
        textStyle: {
            color: '#aaa',
        },
        selected: selectedObj,
    },
    tooltip: {
        trigger: 'axis',
        show: true,
        //	seriesIndex: 0
    },

    visualMap: [
        {
            top: 10,
            right: 10,
            pieces: [
                {
                    gt: 0,
                    lte: 50,
                    color: 'rgb(0,228,0)',
                },
                {
                    gt: 50,
                    lte: 100,
                    color: 'rgb(25,255,0)',
                },
                {
                    gt: 100,
                    lte: 150,
                    color: 'rgb(255,126,0)',
                },
                {
                    gt: 150,
                    lte: 200,
                    color: 'rgb(255,0,0)',
                },
                {
                    gt: 200,
                    lte: 300,
                    color: 'rgb(153,0,76)',
                },
                {
                    gt: 300,
                    color: 'rgb(126,0,35)',
                },
            ],
            outOfRange: {
                color: '#999',
            },
            show: false,
            seriesIndex: 0,
        },
    ],

    grid: {
        left: 40,
        right: 40,
        bottom: '15%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: xarr,
        axisTick: {
            show: false,
        },
        axisLine: {
            color: 'rgba(255,255,255,0.6)',
        },
        axisLabel: {
            margin: 30,
            color: 'rgba(255,255,255,0.6)',
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0.1)',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            color: 'rgba(255,255,255,0.6)',
        },
        axisLabel: {
            margin: 30,
            color: 'rgba(255,255,255,0.6)',
        },
        // min: min,
        // max: max,
        // splitNumber: splitNumber,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.1)',
            },
        },
    },
    color: colorArr,
};
option.series = series;
