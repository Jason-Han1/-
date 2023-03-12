const cC = (rC) => {
    const opacity = [0.9, 0.8, 0.4, 0.3, 0.2, 0.3, 0.4, 0.8, 0.9];
    let cS = [];
    for (let i = 0; i < 9; i++) {
        cS.push({
            offset: i / 8,
            color: 'rgba(' + rC + ',' + opacity[i] + ')'
        })
    }
    return cS;
};
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0,
        color: '#efe'
    }, {
        offset: 0.5,
        color: '#efe'
    }, {
        offset: 1,
        color: '#eee'
    }]),
    xAxis: {
        axisLabel: {
            interval: 0,
            color: '#000',
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    yAxis: {},
    series: [{
        data: [220, 182, 191, 234, 290, 330, 310],
        type: 'bar',
        barWidth: 50,
        itemStyle: {
            barBorderRadius: 100,
            shadowColor: 'rgba(0,0,0,.3)',
            shadowBlur: 10,
            shadowOffsetY: 5,
            shadowOffsetX: 3,
            borderColor:'#0ff',
            borderWidth:'1',
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: cC('0,255,255')
            }
        }
    }]
};