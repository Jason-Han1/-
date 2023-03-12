var data1 = [50, 60, 70, 40, 70];
var data2 = [100, 100, 100, 100, 100];
var path = 'path://M-258.2,313c-1.63-.74-3.33-1.48-5.1-2.2q-2.93-1.2-5.7-2.2c1.84-.85,3.75-1.78,5.7-2.8,1.78-.93,3.48-1.87,5.1-2.8,3.73,1.9,7.07,3.7,10.8,5.6C-251.13,310-254.47,311.57-258.2,313Z';
var myColor = ['#fbd601', '#a7e238', '#75d57e','#5eccc3', '#43a2e2'];
option = {
    backgroundColor: '',
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
            name:'border-t',
            "type": "pictorialBar",
            symbol: 'diamond',
            "symbolSize": [40, 24],
            "symbolOffset": [0, -12],
            "z": 1,
            "symbolPosition": "end",
            itemStyle: {
                color: 'transparent',
                opacity: 1,
                borderColor: '#f99',
            },
            "data": data2
        },
        {
            name:'border-bar',
            type: 'bar',
            barWidth: 40,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderColor: '#f99',
                opacity: 1,
                borderWidth:1
            },
            data: data2
        },
        {
            name:"border-c",
            "type": "pictorialBar",
            symbol: 'rect',
            "symbolSize": [1, '100%'],
            "symbolOffset": [0, 11],
            z: 10,
            "symbolPosition": "end",
            itemStyle: {
                color: '#f99',
            },
            "data": data2
        },
        {
            name:'border-b',
            type: "pictorialBar",
            symbol: 'diamond',
            "symbolSize": [40, 24],
            "symbolOffset": [0, 12],
            z: 1,
            itemStyle: {
                color: 'transparent',
                opacity: 1,
                borderColor: '#f99',
            },
            "data": [1, 1, 1, 1, 1]
        },

        // {
        //     "name": "",
        //     "type": "pictorialBar",
        //     symbol: path,
        //     symbolSize: [40, 20],
        //     symbolOffset: [5, -11],
        //     z: 5,
        //     itemStyle: {
        //         opacity: 1,
        //         color: function(params) {
        //             var colorList = [
        //                 '#fbd601', '#a7e238', '#75d57e',
        //                 '#5eccc3', '#43a2e2'
        //             ];
        //             return colorList[params.dataIndex]
        //         },
        //     },
        //     "symbolPosition": "end",
        //     "data": data1
        // },
        // {
        //     type: 'bar',
        //     barWidth: 40,
        //     barGap: '-100%',
        //     stack: '广告',
        //     z: 5,
        //     label: {
        //         show: true,
        //         formatter: "{c}%",
        //         position: ['6','-35'],
        //         distance: 5,
        //         color: '#42321c',
        //         fontFamily: 'FZYaoti',
        //         fontWeight: 100,
        //         textShadowColor: 'rgba(255, 255, 255, .6)',
        //         fontSize: 16,
        //         textShadowBlur: '0',
        //         textShadowOffsetX: 1,
        //         textShadowOffsetY: 1,
        //     },
        //     itemStyle: {
        //         color: function(params) {
        //             var colorList = [
        //                 '#fbd601', '#a7e238', '#75d57e',
        //                 '#5eccc3', '#43a2e2'
        //             ];
        //             return colorList[params.dataIndex]
        //         },
        //     },
        //     data: data1
        // },
        // {
        //     type: "pictorialBar",
        //     symbol: path,
        //     symbolSize: [40, 20],
        //     symbolOffset: [5, 8],
        //     z: 5,
        //     itemStyle: {
        //         opacity: 1,
        //         color: function(params) {
        //             var colorList = [
        //                 '#fbd601', '#a7e238', '#75d57e',
        //                 '#5eccc3', '#43a2e2'
        //             ];
        //             return colorList[params.dataIndex]
        //         },
        //     },
        //     "data": [1, 1, 1, 1, 1]
        // },
    ]
};