var data = [];
for (let i = 0; i < 7; ++i) {
    data.push(Math.round(Math.random() * 10));
}

// var data1 = [50, 70, 60, 45, 70, 65, 75];
var path =
    'path://M354.8-29.3c19.6,0,38.5,7.5,52.1,20.7c28.7,27.8,28.7,71.9,0,99.7c0,0-36.9,23.8-52.1,49.9c-21-27.7-52.1-49.9-52.1-49.9c-28.7-27.8-28.7-71.9,0-99.7C316.4-21.8,335.2-29.3,354.8-29.3L354.8-29.3z';
var path1 =
    'path://M562.7,89.7V94c19.4,4.9,33.4,18.1,33.4,33.6s-13.9,28.7-33.4,33.6v4.3c22.7-5.1,39.1-20.1,39.1-37.9S585.3,94.7,562.7,89.7z';
var path2 =
    'path://M-42.1,189.5h-2.3c0-3.9,1.3-5.9,2.5-7.7c1.1-1.7,2.1-3.2,2.1-6.4s-1-4.6-2.1-6.4c-1.2-1.8-2.5-3.8-2.5-7.7	s1.3-5.9,2.5-7.7c1.1-1.7,2.1-3.2,2.1-6.4c0-3.2-1-4.6-2.1-6.4c-1.2-1.8-2.5-3.8-2.5-7.7s1.3-5.9,2.5-7.7c1.1-1.7,2.1-3.2,2.1-6.4	h2.3c0,3.9-1.3,5.9-2.5,7.7c-1.1,1.7-2.1,3.2-2.1,6.4c0,3.2,1,4.6,2.1,6.4c1.2,1.8,2.5,3.8,2.5,7.7s-1.3,5.9-2.5,7.7c-1.1,1.7-2.1,3.2-2.1,6.4c0,3.2,1,4.6,2.1,6.4c1.2,1.8,2.5,3.8,2.5,7.7s-1.3,5.9-2.5,7.7C-41.1,184.8-42.1,186.3-42.1,189.5z';

var myColor = ['#eb710f', '#01c49a', '#2eb0ee', '#fd359c', '#aa2cbd', '#b2d301', '#fea503'];
option = {
    title: [
        {
            text: 'TIMELINE',
            x: 'center',
            y: '20',
            textStyle: {
                fontSize: '30',
                fontWeight: '100',
                color: '#4c4c4c',
                textAlign: 'center',
                textShadowColor: '#6F6F6F',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
        },
        {
            text: 'INFOGRAPHIC',
            x: 'center',
            y: '55',
            textStyle: {
                fontSize: '30',
                fontWeight: '300',
                color: '#4c4c4c',
                textAlign: 'center',
                textShadowColor: '#6F6F6F',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
        },
    ],
    tooltip: {
        show: false,
        trigger: 'item',
    },
    grid: {
        top: 200,
        left: 50,
        right: 50,
        bottom: 50,
    },
    xAxis: {
        // boundaryGap: false,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: function (param, index) {
                    return myColor[index];
                },
                fontSize: 16,
                fontFamily: 'FZYaoti',
                fontWeight: 100,
            },
            margin: 20,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#4c4c4c',
                width: 4,
            },
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['2010', '2020', '2030', '2040', '2050', '2060', '2070'],
    },
    yAxis: { show: false },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbol: path2,
            symbolPosition: 'end',
            // symbolOffset: ['0', '-6'],
            symbolSize: [8, '20'],
            z: 5,
            itemStyle: {
                color: function (cor) {
                    var color = ['#eb710f', '#01c49a', '#2eb0ee', '#fd359c', '#aa2cbd', '#b2d301', '#fea503'];
                    return color[cor.dataIndex];
                },
            },
            data: data,
        },
        {
            name: '',
            type: 'bar',
            z: 3,
            barWidth: 2,
            itemStyle: {
                color: function (cor) {
                    var color = ['#eb710f', '#01c49a', '#2eb0ee', '#fd359c', '#aa2cbd', '#b2d301', '#fea503'];
                    return color[cor.dataIndex];
                },
            },
            data: data,
        },
        {
            type: 'pictorialBar',
            name: 'pictorial element',
            symbolPosition: 'end',
            symbolOffset: ['0', '-6'],
            symbolSize: [25, 18],
            z: 2,
            itemStyle: {
                color: '#4c4c4c',
                opacity: 1,
                shadowColor: '#f7f7f7',
                shadowBlur: 0,
                shadowOffsetY: 0,
                shadowOffsetX: 2,
            },
            data: [1, 1, 1, 1, 1, 1, 1],
        },
        {
            type: 'pictorialBar',
            symbol: path1,
            symbolPosition: 'end',
            symbolOffset: ['11', '-7'],
            symbolSize: [10, 20],
            z: 1,
            itemStyle: {
                color: '#4c4c4c',
                opacity: 1,
            },
            data: [1, 1, 1, 1, 1, 1, 1],
        },
        {
            type: 'pictorialBar',
            name: 'pictorial element',
            symbolPosition: 'end',
            symbolOffset: ['0', '-5'],
            symbolSize: [10, 10],
            z: 5,
            itemStyle: {
                opacity: 1,
                shadowColor: '#000',
                shadowBlur: 10,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.5,
                                color: '#01c49a',
                            },
                            {
                                offset: 1,
                                color: '#01c49a',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.5,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 1,
                                color: '#2eb0ee',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.5,
                                color: '#fd359c',
                            },
                            {
                                offset: 1,
                                color: '#fd359c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.5,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 1,
                                color: '#aa2cbd',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.5,
                                color: '#b2d301',
                            },
                            {
                                offset: 1,
                                color: '#738900',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.5,
                                color: '#fea503',
                            },
                            {
                                offset: 1,
                                color: '#A56B01',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            data: [1, 1, 1, 1, 1, 1, 1],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [80, 100],
            symbolOffset: [0, -96],
            z: 5,
            label: {
                show: true,
                formatter: '{c}\nstep',
                position: 'top',
                distance: -60,
                color: '#fff',
                fontFamily: 'FZYaoti',
                fontWeight: 600,
                fontSize: 20,
                textShadowColor: '#6F6F6F',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                shadowColor: 'rgba(0,0,0,.1)',
                shadowBlur: 10,
                shadowOffsetY: 5,
                shadowOffsetX: 0,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.5,
                                color: '#01c49a',
                            },
                            {
                                offset: 1,
                                color: '#01c49a',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.5,
                                color: '#2eb0ee',
                            },
                            {
                                offset: 1,
                                color: '#2eb0ee',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.5,
                                color: '#fd359c',
                            },
                            {
                                offset: 1,
                                color: '#fd359c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.5,
                                color: '#aa2cbd',
                            },
                            {
                                offset: 1,
                                color: '#aa2cbd',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.5,
                                color: '#b2d301',
                            },
                            {
                                offset: 1,
                                color: '#738900',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.5,
                                color: '#fea503',
                            },
                            {
                                offset: 1,
                                color: '#A56B01',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
            },
            symbolPosition: 'end',
            data: data,
        },
    ],
};
function run () {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 10) {
            data[i] += Math.round(Math.random() * 200);
        }
        else {
            data[i] += Math.round(Math.random() * 100);
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
const backImg = "/asset/get/s/data-1622796959507-HTopachtJ.png"
myChart._dom.style.backgroundImage = "url('" + backImg + "')";