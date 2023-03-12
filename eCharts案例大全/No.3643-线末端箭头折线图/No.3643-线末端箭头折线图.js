categoryData = ['1月', '2月', '3月', '4月', '5月', '6月'];
chartdata = [
    [1311, 21111, 1111, 2111, 22221, 22222],
    [1111, 11111, 1111, 1111, 22222, 2222],
    [1111, 11111, 1111, 1111, 22222, 2222]
];
backgroundColor = 'rgba(0,0,0,1)';

let bgdata = [];

for (let i = 0; i < chartdata[1].length; i++) {
    if (Number(chartdata[1][i]) > Number(chartdata[2][i])) {
        bgdata.push(chartdata[1][i]);
    } else {
        bgdata.push(chartdata[2][i]);
    }
}

option = {
    backgroundColor: backgroundColor,
    grid: {
        top: '5%',
        bottom: '15%', //也可设置left和right设置距离来控制图表的大小
        left: '13%',
        right: '13%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: false,
            },
        },
        // formatter: (params) => {
        //     return (
        //         params[2].seriesName +
        //         ' ' +
        //         params[2].data +
        //         '<br/>' +
        //         params[1].seriesName +
        //         ' ' +
        //         params[1].data +
        //         '<br/>' +
        //         params[0].seriesName +
        //         ' ' +
        //         params[0].data
        //     );
        // },
        textStyle: {
            align: 'left',
        },
    },
    xAxis: {
        data: categoryData,
        interval: 0,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '',
            nameTextStyle: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1f4255',
                },
            },
            axisLabel: {
                show: true,
                formatter: (val) => {
                    return val + '';
                },
                textStyle: {
                    color: '#fff',
                },
            },
        },
        {
            type: 'value',
            name: '',
            show: true,
            nameTextStyle: {
                color: '#ebf8ac',
            },
            position: 'right',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1f4255',
                    width: 1,
                },
            },
            axisLabel: {
                show: true,
                formatter: (val) => {
                    return val;
                },
                textStyle: {
                    color: '#fff',
                },
            },
        },
    ],
    dataZoom: [
        {
            show: false,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '110%',
            handleStyle: {
                color: '#5B3AAE',
            },
            textStyle: {
                color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
        },
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
        },
    ],
    series: [
        {
            name: '余额',
            type: 'line',
            yAxisIndex: 1,
            // smooth: true, //平滑曲线显示
            symbol: (e, params) => {
                // console.log(params);
                if (params.dataIndex == chartdata[0].length - 1) {
                    return 'triangle';
                } else {
                    return 'circle';
                }
            }, //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            symbolRotate: -90,
            // showSymbol: false,
            itemStyle: {
                //折线拐点标志的样式
                // color: ,
                color: (params) => {
                    // console.log(params);
                    if (params.dataIndex == chartdata[0].length - 1) {
                        return '#fff';
                    } else {
                        return 'rgb(22,255,227)';
                    }
                },
            },
            lineStyle: {
                width: 2,
                color: '#fff',
                // shadowColor: "#fff",
                // shadowBlur: 5,
                // shadowOffsetX: 0,
                // shadowOffsetY: 4,
                opacity: 0.8,
            },
            z: 5,
            data: chartdata[0],
        },
        // {
        //     name: '收入',
        //     type: 'bar',
        //     barWidth: 10,
        //     barMinHeight: 10,
        //     itemStyle: {
        //         normal: {
        //             color: 'rgb(3,130,250)',
        //         },
        //     },
        //     emphasis: {
        //         show: true,
        //         itemStyle: {
        //             color: '#10e5ff',
        //         },
        //     },
        //     data: chartdata[1],
        // },
        // {
        //     name: '支出',
        //     type: 'bar',
        //     barWidth: 10,
        //     barMinHeight: 10,
        //     itemStyle: {
        //         normal: {
        //             color: 'rgb(246,125,20)',
        //         },
        //     },
        //     emphasis: {
        //         show: true,
        //         itemStyle: {
        //             color: '#e5bc7e',
        //         },
        //     },
        //     data: chartdata[2],
        // },
    ],
};
