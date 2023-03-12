const datas = [10, 23, 55, 67];
function max(datas) {
    var max = datas[0];
    for (var i = 0; i < datas.length; i++) {
        if (max < datas[i]) {
            max = datas[i];
        }
    }
    return max;
}
// 背景xdata  渐变色柱状图   间隔色 两种  你可以设置多种
var bgData = [];
for (var i = 0; i < datas.length; i++) {
    bgData.push(max(datas) + 40);
}
getSymbolData = (datas) => {
    let arr = [];
    for (var i = 0; i < datas.length; i++) {
        arr.push({
            value: datas[i],
            symbolPosition: 'end',
        });
    }
    return arr;
};
option = {
    backgroundColor: '#000F32',
    grid: {
        left: '8%',
        right: '10%',
        top: '20%',
        bottom: '15%',
    },
    xAxis: [
        {
            axisLine: {
                show: false, //you边线条
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#fff',
                fontSize: 20,
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu'],
        },
        {
            data: datas,
            axisLine: {
                show: false, //背景线条
                lineStyle: {
                    color: '#CED5E1',
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            position: 'left',
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false, //左边线条
            },
            axisLabel: {
                //左轴汉字
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: datas,
            label: {
                show: true,
                position: 'top', // 汉字位于上方
                padding: 40, // 汉字距离柱状图间距
                color: '#fff',
                fontSize: 18,
                fontWeight: 800,
            },
            itemStyle: {
                color: '#1F77D7',
            },
            barWidth: 32,
        },
        {
            type: 'pictorialBar',
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbEAAAANCAYAAAAnr1ALAAABSGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8rAzSDOwMfAziCamFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisHb8qr8le3yLzZ+qz0pe3KwQx1aMArpTU4mQg/QeIM5ILikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8gWSM5IBJrB+ALI1klCEk9HYkPtBQG+oNSU3EwF3/y8zJL8IgIOJhWUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRgZMjCAwhyi+vMNcFgyinEgxLLuMjCY/WBgYGZEiKWVMjDs6WFg4N+AEFNtYWDgqWFgOFBTkFiUCHcA4zeW4jRjIwibezsDA+u0//8/hzMwsGsyMPy9/v//7+3///9dBjT/FlDvNwA3y2SUjZ9/AwAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABsaADAAQAAAABAAAADQAAAABzNoRLAAAB50lEQVR4Ae2aSW6DQBBFGZ3hFjlM7n+bDGZwKByLTff/UiMLFo+FbVXxa3jdUF50XX183qrU1bQp62arhb+9bPelfjVdynq3dUbbvTxHe3nLxw1P+5r3O23/ntf2Jq+K7bQyr+AY1UqtqbkXsXvBMfKqvaPWftX28Zm+6iZtf1jVfnfaW/oRuodWvuUO5Z6HR3Xp73lK28PqtOM1r1W+UI2/O7TfQivihuq6Qzv85PMOX3lfeFS/Km5oB1Gz006Ch9OOot/R7KtJ7Q1RU/Sr9uRk8qo9O88RPXmZJzupwQgBCEAAAhA4BQGG2CmWgSIgAAEIQKCEAEOshBoaCEAAAhA4BQGG2CmWgSIgAAEIQKCEAEOshBoaCEAAAhA4BYHlmGCdKSRn/7/dndjKRF3NMrR0qqiLz2hr41fRpdbFFX7hWsuRJ9+cWPjd+sl+Fajwif9Gsp9Fuievii1QuG4qFTfEqmantckLb7B5BRDVT2E5m0zktTVvUU7z66k1q6OrjoDg7N6TMrR4tldd/hShfz+L2HWehVDJTnBCAAIQgAAEDifAEDt8CSgAAhCAAARKCTDESsmhgwAEIACBwwkwxA5fAgqAAAQgAIFSAgyxUnLoIAABCEDgcAIMscOXgAIgAAEIQKCUwB+4QE6bbmu1dgAAAABJRU5ErkJggg==',
            symbolSize: [85, 3],
            symbolOffset: [1, -2],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            data: getSymbolData(datas),
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            data: bgData,
            itemStyle: {
                normal: {
                    // barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 1,
                            color: '#082858',
                        },
                        {
                            offset: 0.5,
                            color: '#000F32',
                        },
                        {
                            offset: 0.4,
                            color: '#000F32',
                        },
                        {
                            offset: 0.1,
                            color: '#082858',
                        },
                    ]),
                },
            },
            z: 1,
        },
    ],
};
