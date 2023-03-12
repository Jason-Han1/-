var xData = ['东城', '西城', '朝阳', '丰台', '石景山', '海淀', '门头沟', '通州', '大兴', '昌平', '顺义', '房山', '怀柔', '平谷', '延庆', '密云', '经开'];
var data0 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var data1 = [0, 30, 23, 15, 13, 32, 20, 10, 10, 20, 32, 35, 30, 20, 25, 30, 20]; //上衣
var data4 = [67, 56, 55, 49, 47, 25, 20, 15, 15, 10, 20, 26, 20, 20, 21, 22, 23]; //裤子

var data3 = [];
var data5 = [];
for (let i = 0; i < data1.length; i++) {
    data3.push(data1[i] + data4[i]);
}
for (let i = 0; i < data1.length; i++) {
    data5.push(data1[i]);
}

dom = 350;
barWidth = dom / 20;

option = {
    backgroundColor: '#000E1A', //背景色
    tooltip: {
        trigger: 'axis',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        textStyle: {
            color: 'white', //设置文字颜色
            fontSize: 12
        },
        borderWidth: 1,
        padding: 5,
        formatter: function (parms) {
            var str =
                '区域：' +
                parms[0].axisValue +
                '</br>' +
                parms[0].marker +
                '农业：' +
                parms[0].value +
                '</br>' +
                parms[1].marker +
                '非农业：' +
                parms[1].value;
            return str;
        },
    },
    textStyle: {
        color: '#C9C9C9',
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        selectedMode: false,
        right: '5',
        top: '5',
        itemWidth: 10,
        itemHeight: 6,
        textStyle: {
            color: '#ffffff',
            fontSize: 12,
        }
    },
    grid: {
        containLabel: true,
        left: '5',
        top: '5',
        bottom: '5',
        right: '5',
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#FFF',
            },
            fontSize: 12,
            formatter: function(value) {
                return value.split('').join('\n');
            }
        },
    },
    yAxis: [
        {
            type: 'value',
            max: 120,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
        {
            show: false
        },
    ],
    series: [
        {
            type: 'bar',
            name: '农业',
            type: 'bar',
            data: data1,
            stack: 'zs',
            barWidth: barWidth,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(251,217,31,0.5)',
                        },
                        {
                            offset: 1,
                            color: '#fbd91f',
                        },
                    ],
                },
            },
        },

        {
            name: '非农业',
            type: 'bar',
            data: data4,
            stack: 'zs',
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0,158,255,0.5)',
                        },
                        {
                            offset: 1,
                            color: '#009BFF',
                        },
                    ],
                },
            },
        },

        {
            data: data0,
            type: 'pictorialBar',
            barWidth: barWidth,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: '#fbd91f',
                },
            },
        },
        {
            data: data1,
            type: 'pictorialBar',
            barWidth: barWidth,
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            zlevel: 2,
        },
        {
            data: data1,
            type: 'pictorialBar',
            barWidth: barWidth,
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            zlevel: 2,
        },
        {
            data: data5,
            type: 'pictorialBar',
            barWidth: barWidth,
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [0, barWidth * 0.5],
            zlevel: 2,
        },
        {
            data: data5,
            type: 'pictorialBar',
            barWidth: barWidth,
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: '#fbd91f',
                },
            },
        },
        {
            data: data3,
            type: 'pictorialBar',
            barWidth: barWidth,
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: '#009BFF',
                },
            },
        },
    ],
};
