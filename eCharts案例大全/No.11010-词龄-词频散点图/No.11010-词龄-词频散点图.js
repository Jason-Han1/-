const textStyle = {
    color: '#262626',
    fontFamily: "'PingFang SC','Microsoft Yahei', 'Helvetica Neue', Helvetica, Tahoma, Arial, 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif",
};

const scatterData = [
    [10, 100, '手机'],
    [8, 283, '流畅'],
    [13, 2455, '屏幕'],
    [9, 334, '服务'],
    [11, 334, '小米'],
    [14, 212, '性价比'],
    [6, 789, '漂亮'],
    [4, 21, '电池'],
    [12, 447, '不错'],
    [7, 973, '外观'],
    [5, 331, '系统'],
];

option = {
    textStyle,
    title: {
        text: '词龄-词频散点图',
        textStyle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
    },
    grid: {
        left: '8%',
        top: '8%',
        bottom: '8%',
        right: '8%',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#BFBFBF',
            },
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            formatter: value => value === 0 ? '' : `${value}天`
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#BFBFBF',
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },

    },
    tooltip: {
        textStyle,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderWidth: 1,
        borderColor: '#ccc',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        formatter: params => {
            const {
                value,
                marker
            } = params;
            return [
                `${marker} ${value[2]}`,
                `词龄：${value[0]}`,
                `词频：${value[1]}`,
            ].join('<br>');
        },
    },
    series: {
        type: 'scatter',
        symbol: 'diamond',
        itemStyle: {
            color: '#0074B8',
        },
        data: scatterData
    },
};