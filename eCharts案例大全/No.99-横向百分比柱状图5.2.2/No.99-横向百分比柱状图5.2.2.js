const datas = [110, 100, 90, 60, 30];
const indicator = ['办公区', '公共区', '接待区', '配套服务', '设备设施'];
const MAX = Math.max(...datas) + 10;

option = {
    yAxis: [
        {
            inverse: true,
            data: indicator,
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
    ],
    xAxis: {
        max: MAX,
        show: false,
    },
    series: [
        {
            // 最右侧文字
            type: 'bar',
            barGap: '-100%',
            silent: true,
            itemStyle: {
                borderRadius: 10,
                color: 'rgba(255, 255, 254, 0.2)',
            },
            barWidth: 10,
            data: datas.map((d) => {
                return {
                    realValue: d / 8 + '%',
                    value: MAX,
                    max: MAX,
                };
            }),
            label: {
                show: true,
                position: 'right',
                distance: 20,
                fontSize: 14,
                color: '#fff',
                formatter(params) {
                    return `${params.data.realValue}`;
                },
            },
        },
        {
            type: 'bar',
            data,
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
                color: 'red',
                borderRadius: 30,
            },
            label: {
                show: true,
                position: [0, -20],
                distance: 0,
                fontSize: 14,
                formatter(params) {
                    return `{name|${params.name}}   {val|${params.value}}`;
                },
                rich: {
                    name: {
                        color: '#fff',
                    },
                    val: {
                        color: '#2BFFE6',
                    },
                },
            },
            itemStyle: {
                borderRadius: 30,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    ['#F5A623', '#2BFFE6'].map((color, offset) => ({
                        color,
                        offset,
                    }))
                ),
            },
        },
    ],
};
