var data = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 10));
}
var path ='path://M676.2,197.5V183c2.2-11.8,13.2-14.1,13.2-14.1c17.8-2.9,21.1,11.8,21.1,11.8c3.1,8.4,6.2,11.4,6.2,11.4c15.6,13.3,22.8-5.4,22.8-5.4v10.8H676.2z';
var path1 ='path://M684.4,214.2v-3h26.3c16.3,1,18.2-7,18.2-7c2.6-9.1,11.6-10,11.6-10c8.4-0.5,7.2,9.1,7.2,9.1v10.8H684.4z';
var xData2 = ['A', 'B', 'C', 'D', 'E'];
var data1 = [100, 100, 100, 100, 100];
// var data2 = [46, 32, 65, 35, 53];
var data3 = [0.01, 0.01, 0.01, 0.01, 0.01];
var data4 = [20, 20, 20, 20, 20];
option = {
    backgroundColor: '#b2b6c1',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 100,
        bottom: 100,
    },
    xAxis: {
        show: false,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'rgba(65, 49,28, .9)',
                fontSize: 30,
                fontFamily: 'FZYaoti',
                fontWeight: 100,
            },
            margin: 20,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 4,
            },
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {
        show: false,
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255,255, .9)',
                width: 4,
            },
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#42321c',
                fontSize: 20,
                fontFamily: 'FZYaoti',
            },
            margin: 20,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 2,
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [70, 36],
            symbolOffset: [0, -34],
            z: 41,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                            offset: 0,
                            color: '#ffc365',
                        },
                        {
                            offset: 1,
                            color: '#fe6e07',
                        },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#00fac3',
                            },
                            {
                                offset: 1,
                                color: '#02ae89',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#66cefd',
                            },
                            {
                                offset: 1,
                                color: '#079be5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#ff73c2',
                            },
                            {
                                offset: 1,
                                color: '#fd0881',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#c832f7',
                            },
                            {
                                offset: 1,
                                color: '#942895',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path1,
            symbolSize: [70, 22],
            symbolOffset: [0, -21],
            z: 40,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                            offset: 0,
                            color: '#ffc365',
                        },
                        {
                            offset: 1,
                            color: '#fe6e07',
                        },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#00fac3',
                            },
                            {
                                offset: 1,
                                color: '#02ae89',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#66cefd',
                            },
                            {
                                offset: 1,
                                color: '#079be5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#ff73c2',
                            },
                            {
                                offset: 1,
                                color: '#fd0881',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#c832f7',
                            },
                            {
                                offset: 1,
                                color: '#942895',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data,
        },
        {
            name: '',
            type: 'bar',
            barWidth: 70,
            barGap: '-100%',
            z: 10,
            label: {
                show: true,
                formatter: '{c}%',
                position: 'bottom',
                distance: 25,
                color: '#333',
                fontSize: 18,
            },
            itemStyle: {
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                            offset: 0,
                            color: '#ffc365',
                        },
                        {
                            offset: 1,
                            color: '#fe6e07',
                        },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#00fac3',
                            },
                            {
                                offset: 1,
                                color: '#02ae89',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#66cefd',
                            },
                            {
                                offset: 1,
                                color: '#079be5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#ff73c2',
                            },
                            {
                                offset: 1,
                                color: '#fd0881',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#c832f7',
                            },
                            {
                                offset: 1,
                                color: '#942895',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            data: data,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [80, 20],
            symbolOffset: [0, -10],
            z: 62,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                            offset: 0,
                            color: '#ffc365',
                        },
                        {
                            offset: 1,
                            color: '#fe6e07',
                        },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#00fac3',
                            },
                            {
                                offset: 1,
                                color: '#02ae89',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#66cefd',
                            },
                            {
                                offset: 1,
                                color: '#079be5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ff73c2',
                            },
                            {
                                offset: 1,
                                color: '#fd0881',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#c832f7',
                            },
                            {
                                offset: 1,
                                color: '#942895',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
                borderColor:'#fff',
                borderWidth:2,
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [80, 30],
            symbolOffset: [0, 0],
            z: 60,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#fe6e07',
                            },
                            {
                                offset: 0.85,
                                color: '#fe6e07',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#02ae89',
                            },
                            {
                                offset: 0.85,
                                color: '#02ae89',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#079be5',
                            },
                            {
                                offset: 0.85,
                                color: '#079be5',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#fd0881',
                            },
                            {
                                offset: 0.85,
                                color: '#fd0881',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#942895',
                            },
                            {
                                offset: 0.85,
                                color: '#942895',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [80, 20],
            symbolOffset: [0, 20],
            z: 52,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#fe6e07',
                            },
                            {
                                offset: 0.85,
                                color: '#fe6e07',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#02ae89',
                            },
                            {
                                offset: 0.85,
                                color: '#02ae89',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#079be5',
                            },
                            {
                                offset: 0.85,
                                color: '#079be5',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#fd0881',
                            },
                            {
                                offset: 0.85,
                                color: '#fd0881',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.8,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.8,
                                color: '#942895',
                            },
                            {
                                offset: 0.85,
                                color: '#942895',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
                borderColor: 'rgba(0,0,0,.3)',
                borderWidth: 2,
                shadowBlur: 0,
                shadowColor: 'rgba(0, 0, 0, .1)',
                shadowOffsetY: 1,
                shadowOffsetX: 0,
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            name: '',
            type: 'bar',
            barWidth: 70,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#959aad',
                        },
                        {
                            offset: 0.15,
                            color: '#b0b3c0',
                        },
                        {
                            offset: 0.3,
                            color: '#bbbfca',
                        },
                        {
                            offset: 0.5,
                            color: '#dadde4',
                        },
                        {
                            offset: 0.7,
                            color: '#dadde4',
                        },
                        {
                            offset: 0.85,
                            color: '#c3c7d1',
                        },
                        {
                            offset: 1,
                            color: '#9ba0b5',
                        },
                    ],
                    global: false,
                },
            },
            data: data1,
        },
        {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [8, '100%'],
            symbolOffset: [20, 11],
            z: 50,
            symbolPosition: 'end',
            itemStyle: {
                color:'rgba(255,255,255,.3)',
            },
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [68, 20],
            symbolOffset: [0, 12],
            z: 40,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                            offset: 0,
                            color: '#ffc365',
                        },
                        {
                            offset: 1,
                            color: '#fe6e07',
                        },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#00fac3',
                            },
                            {
                                offset: 1,
                                color: '#02ae89',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#66cefd',
                            },
                            {
                                offset: 1,
                                color: '#079be5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ff73c2',
                            },
                            {
                                offset: 1,
                                color: '#fd0881',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#c832f7',
                            },
                            {
                                offset: 1,
                                color: '#942895',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            data: [1, 1, 1, 1, 1],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 25],
            symbolOffset: [0, 12],
            z: 3,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ffc664',
                            },
                            {
                                offset: 0.3,
                                color: '#ff831f',
                            },
                            {
                                offset: 0.5,
                                color: '#ff831f',
                            },
                            {
                                offset: 0.7,
                                color: '#ff831f',
                            },
                            {
                                offset: 1,
                                color: '#ffc664',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#0fae8b',
                            },
                            {
                                offset: 0.3,
                                color: '#01c49a',
                            },
                            {
                                offset: 0.5,
                                color: '#01c49a',
                            },
                            {
                                offset: 0.7,
                                color: '#01c49a',
                            },
                            {
                                offset: 1,
                                color: '#0efbc7',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#229adf',
                            },
                            {
                                offset: 0.3,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 0.5,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 0.7,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 1,
                                color: '#6ad1fc',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#fa1181',
                            },
                            {
                                offset: 0.3,
                                color: '#fd359c',
                            },
                            {
                                offset: 0.5,
                                color: '#fd359c',
                            },
                            {
                                offset: 0.7,
                                color: '#fd359c',
                            },
                            {
                                offset: 1,
                                color: '#fe7bc7',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#932792',
                            },
                            {
                                offset: 0.3,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 0.5,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 0.7,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 1,
                                color: '#c382de',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            data: [1, 1, 1, 1, 1],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [80, 30],
            symbolOffset: [0, -15],
            z: 1,
            itemStyle: {
                opacity: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fff',
                        },
                        {
                            offset: 1,
                            color: '#d4d7da',
                        },
                    ],
                    global: false,
                },
                borderColor:'#fff',
                borderWidth:2,
            },
            symbolPosition: 'end',
            data: data3,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [80, 40],
            symbolOffset: [0, 40],
            z: -1,
            label: {
                show: true,
                formatter: '{c}%',
                position: 'top',
                distance: -20,
                color: '#fff',
                fontFamily: 'FZYaoti',
                fontWeight: 100,
                fontSize: 20,
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.75,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.75,
                                color: '#fff',
                            },
                            {
                                offset: 0.85,
                                color: '#fff',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                    ],
                    global: false,
                },
            },
            data: data4,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [80, 30],
            symbolOffset: [0, 25],
            z: -2,
            itemStyle: {
                opacity: 1,
                shadowBlur: 5,
                shadowColor: 'rgba(90, 96, 108, .3)',
                shadowOffsetY: 2,
                shadowOffsetX: 15,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                                offset: 0,
                                color: '#d4d8db',
                            },
                            {
                                offset: 0.3,
                                color: '#e1e4e7',
                            },
                            {
                                offset: 0.75,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 0.75,
                                color: '#fff',
                            },
                            {
                                offset: 0.85,
                                color: '#fff',
                            },
                            {
                                offset: 0.85,
                                color: '#f3f4f6',
                            },
                            {
                                offset: 1,
                                color: '#fcfcfc',
                            },
                    ],
                    global: false,
                },
            },
            symbolPosition: 'end',
            data: data3,
        },
    ],
};
function run () {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() <= 100) {
            data[i] = Math.round(Math.random() * 60);
        }
        else {
            data[i] = Math.round(Math.random() * 80);
        }
    }
    myChart.setOption(option);
}

setTimeout(function() {
    run();
}, 0);
setInterval(function () {
    run();
}, 3000);