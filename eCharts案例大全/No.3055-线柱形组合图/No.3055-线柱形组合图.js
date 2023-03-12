let dateArr = ['06/18', '06/18', '06/18', '06/18', '06/18', '06/18'];
let lineData = [4.2, 3.5, 2.9, 7.8, 5, 3];
let sportCount = [4, 3, 2, 8, 3, 5];
let sportTime = [3, 2, 3, 5, 4, 3];
option = {
    backgroundColor: '#03173C',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
            },
        },
    },

    xAxis: {
        data: dateArr,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#284269',
                width: 2,
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff', //X轴文字颜色
                fontSize: 16,
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#284269',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'value',
            nameTextStyle: {
                color: '#ebf8ac',
                fontSize: 16,
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
                show: false,
            },
        },
    ],
    series: [
        {
            name: '作业完成率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            showSymbol: false,
            lineStyle: {
                color: '#FF7D1D',
                width: 2,
                shadowColor: '#FF7D1D',
                shadowBlur: 4,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(255, 125, 29, .5)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(255, 125, 29, 0)',
                    },
                ]),
            },
            data: lineData,
        },
        {
            name: '人均跳绳',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#39ADFF',
                },
            },
            data: sportCount,
        },
        {
            name: '人均用时',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#47E0E0',
                },
            },
            data: sportTime,
        },
    ],
};
