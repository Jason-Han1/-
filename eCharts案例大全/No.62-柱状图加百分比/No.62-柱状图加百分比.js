option = {
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '8%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
            },
        },
        formatter(params) {
            var data = '';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName == '随访率') {
                    data += params[i].seriesName + ':  ' + params[i].value + '%';
                } else {
                    data += params[i].seriesName + ':  ' + params[i].value + '<br/>';
                }
            }
            return data;
        },
    },
    legend: {
        data: ['随访量', '随访率'],
        top: '5%',
        textStyle: {
            color: '#747474',
        },
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#393939', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '(人数)',
            nameTextStyle: {
                color: '#393939',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eeeeee',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#393939',
                },
            },
        },
        {
            type: 'value',
            name: '(%)',
            nameTextStyle: {
                color: '#393939',
                padding: [0, 0, 0, 40], // 四个数字分别为上右下左与原位置距离
            },
            position: 'right',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#393939',
                },
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)'],
                },
            },
        },
    ],
    series: [
        {
            name: '随访量',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#fdcb6c',
                },
            },
            data: [280, 210, 180, 170, 150, 145, 160, 130, 120, 120, 120, 120],
        },
        {
            name: '随访率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 4, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#f3454b',
                borderWidth: '2',
                borderColor: '#f3454b',
            },
            lineStyle: {
                color: '#f3454b',
            },
            data: [88, 30, 35, 22, 40, 52, 75, 60, 53, 58, 50, 56],
        },
    ],
};
