var xData = (function () {
    var data = [];
    for (var i = 2; i < 8; i++) {
        data.push(i + '月');
    }
    return data;
})();

option = {
    backgroundColor: '#344b58',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
            },
        },
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: '#fff',
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 18,
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
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
                interval: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 20,
                formatter: (m) => {
                    return Math.abs(m);
                },
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '女',
            type: 'bar',
            barWidth: 20,
            gridIndex: 0,
            yAxisIndex: 0,
            label: {
                show: true,
                position: 'top',
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(35, 157, 250, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(35, 157, 250, 0)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: [709, 1917, 2455, 2610, 1719, 1433],
        },

        {
            name: '男',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            gridIndex: 0,
            yAxisIndex: 0,
            label: {
                show: true,
                position: 'bottom',
                formatter: (m) => {
                    return Math.abs(m.value);
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: 'rgba(35, 250, 187, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 0,
                                color: 'rgba(35, 250, 187, 0)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    barBorderRadius: 0,
                },
            },
            data: [-327, -1776, -507, -1200, -800, -482],
        },
        {
            name: '男',
            type: 'line',
            barWidth: 20,
            barGap: '-100%',
            gridIndex: 0,
            yAxisIndex: 0,
            label: {
                show: true,
                position: 'bottom',
                formatter: (m) => {
                    return Math.abs(m.value);
                },
            },
            data: [327, -776, -507, -1200, -800, -482],
        },
    ],
};
