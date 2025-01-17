var data1 = [50, 60, 70, 40, 70];
var data2 = [100, 100, 100, 100, 100];
var path = 'path://M-258.2,313c-1.63-.74-3.33-1.48-5.1-2.2q-2.93-1.2-5.7-2.2c1.84-.85,3.75-1.78,5.7-2.8,1.78-.93,3.48-1.87,5.1-2.8,3.73,1.9,7.07,3.7,10.8,5.6C-251.13,310-254.47,311.57-258.2,313Z';
var myColor = ['#fbd601', '#a7e238', '#75d57e','#5eccc3', '#43a2e2'];
option = {
    backgroundColor: '#f4f4f4',
    grid: {
        left: 100,
        bottom: 100
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            textStyle: {
                color: function(param, index) {
                    return myColor[index]
                },
                fontSize: 16,
                fontFamily: 'FZYaoti',
                fontWeight: 100,
            },
            margin: 20,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#6e6e6e',
                width: 1,
            }
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false
        },
        data: ['2017', '2018', '2019', '2020', '2021', ]
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#6e6e6e',
                width: 1,
            }
        },
        axisLabel: {
            interval: 0,
            formatter: '{value}%',
            textStyle: {
                color: '#42321c',
                fontFamily: 'FZYaoti',
            },
            margin: 20,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            lineStyle: {
                color: '#6e6e6e',
                width: 1,
                height: 5,
            }
        },
    },
    series: [
        {
            "type": "pictorialBar",
            symbol: path,
            "symbolSize": [58, 26],
            "symbolOffset": [5, -15],
            "z": 1,
            "symbolPosition": "end",
            itemStyle: {
                color: '#f4f4f4',
                opacity: 1,
                borderColor: '#727272',
            },
            "data": data2
        },
        {
            name: '2019',
            type: 'bar',
            barWidth: 60,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderColor: '#727272',
                opacity: 1,
            },
            data: data2
        },
        {
            "type": "pictorialBar",
            symbol: 'rect',
            "symbolSize": [1, '100%'],
            "symbolOffset": [5, 11],
            z: 10,
            "symbolPosition": "end",
            itemStyle: {
                color: '#727272',
            },
            "data": data2
        },
        {
            type: "pictorialBar",
            symbol: path,
            symbolSize: [60, 26],
            symbolOffset: [5, 12],
            z: 1,
            itemStyle: {
                color: '#f4f4f4',
                opacity: 1,
                borderColor: '#727272',
            },
            "data": [1, 1, 1, 1, 1]
        },
        {
            type: "pictorialBar",
            symbol: path,
            symbolSize: [55, 26],
            symbolOffset: [5, 12],
            z: 0,
            itemStyle: {
                color: '#f4f4f4',
                opacity: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 3
            },
            "data": [1, 1, 1, 1, 1]
        },
        {
            "name": "",
            "type": "pictorialBar",
            symbol: path,
            symbolSize: [40, 20],
            symbolOffset: [5, -11],
            z: 5,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        '#fbd601', '#a7e238', '#75d57e',
                        '#5eccc3', '#43a2e2'
                    ];
                    return colorList[params.dataIndex]
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
        {
            type: 'bar',
            barWidth: 40,
            barGap: '-83%',
            stack: '广告',
            z: 5,
            label: {
                show: true,
                formatter: "{c}%",
                position: ['6','-35'],
                distance: 5,
                color: '#42321c',
                fontFamily: 'FZYaoti',
                fontWeight: 100,
                textShadowColor: 'rgba(255, 255, 255, .6)',
                fontSize: 16,
                textShadowBlur: '0',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                color: function(params) {
                    var colorList = [
                        '#fbd601', '#a7e238', '#75d57e',
                        '#5eccc3', '#43a2e2'
                    ];
                    return colorList[params.dataIndex]
                },
            },
            data: data1
        },
        {
            type: "pictorialBar",
            symbol: path,
            symbolSize: [40, 20],
            symbolOffset: [5, 8],
            z: 5,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        '#fbd601', '#a7e238', '#75d57e',
                        '#5eccc3', '#43a2e2'
                    ];
                    return colorList[params.dataIndex]
                },
            },
            "data": [1, 1, 1, 1, 1]
        },
    ]
};