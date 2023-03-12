var mouth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var Yd = [123, 555, 67, 7, 33, 545, 642, 111, 444, 20, 45, 33];

option = {
    backgroundColor: '#000',
    title: {
        text: '多功能echarts',
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '17%',
        top: '17%',
    },
    legend: {
        data: ['总盈亏', '例均盈亏'],
        right: 10,
        itemWidth: 18,
        textStyle: {
            color: 'rgba(255,255,255,.8)',
        },
    },
    tooltip: {
        trigger: 'axis',
        config: true,
        axisPointer: {
            type: 'shadow',
            crossStyle: {
                color: '#999',
            },
        },
        fontSize: 12,
    },
    xAxis: {
        data: mouth,
        type: 'category',
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
        },
    },
    yAxis: [
        {
            type: 'value',
            nameTextStyle: {
                color: 'rgba(255,255,255,.8)',
            },
            splitNumber: 5,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.3',
                    type: 'dashed',
                },
            },
            name: '万元',
            axisLabel: {
                color: 'rgba(255,255,255,.9)',
                formatter: (a) => {
                    return isFinite(a) ? (+a / 10000).toFixed(2) : '';
                },
            },
        },
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.3',
                    type: 'dashed',
                },
            },
            nameTextStyle: {
                color: '#fff',
            },
            axisLabel: {
                color: 'rgba(255,255,255,.9)',
            },
            name: '元',
        },
    ],
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            maxValueSpan: 6, // 设置展示最大数量
            textStyle: {
                color: 'transparent',
            },
            filterMode: 'filter',
            start: 0,
            end: 100,
            backgroundColor: '#666',
        },
    ],
    series: [
        {
            name: '总盈亏',
            type: 'bar',
            barMaxWidth: 26,
            itemStyle: {
                normal: {
                    barBorderRadius: [16, 16, 0, 0],
                },
                borderColor: '#3BA1FF',
                color: '#3BA1FF'
            },
            data: [220000, 182000, 190000, 234000, 290000, 330000, 310000, 100000, 123444, 45555, 44455, 123456],
        },
        {
            name: '例均盈亏',
            type: 'scatter',
            yAxisIndex: 1,
            smooth: true,
            symbol: 'circle',
            itemStyle: {
                borderColor: '#2fc25b',
                borderWidth: 1,
                color: '#2fc25b',
            },
            markLine: {
                itemStyle: {
                    borderColor: 'yellow',
                    borderWidth: 2,
                    color: 'yellow',
                },
                label: {
                    color: 'yellow',
                    show: true,
                    position: 'middle',
                    formatter: (params) => {
                        return '平均值:' + params.value;
                    },
                },
                lineStyle: 'yellow',
                data: [{ yAxis: 168, name: '平均值', valueIndex: 1 }],
            },
            data: Yd,
        },
    ],
};
