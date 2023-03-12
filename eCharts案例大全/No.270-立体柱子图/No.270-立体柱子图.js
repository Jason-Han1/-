state = {
    dataList: [200, 182, 191, 234, 290, 330, 310],
    dataArray: [],
    dataArray2: [],
};
(color1 = ['#FF3333', '#FF7744', '#FFCC22', '#33FF33', '#33CCFF', '#7744FF', '#E93EFF']),
    (color2 = ['#FF8888', '#FFA488', '#FFDD55', '#66FF66', '#77DDFF', '#9F88FF', '#E38EFF']),
    (color3 = ['#FFCCCC', '#FFC8B4', '#FFEE99', '#99FF99', '#CCEEFF', '#CCBBFF', '#F0BBFF']);

(aar = []), (aar2 = []);

barWidth = 30;
state.dataList.map((item, index) => {
    let obj = {
        value: item,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                    {
                        offset: 0,
                        color: color1[index], // 0% 处的颜色
                    },
                    {
                        offset: 0.6,
                        color: color2[index], // 60% 处的颜色
                    },
                    {
                        offset: 1,
                        color: color3[index], // 100% 处的颜色
                    },
                ],
                false
            ),
        },
    };
    aar.push(Object.assign({}, obj));
});
state.dataList.map((item, index) => {
    let obj = {
        value: item,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                    {
                        offset: 0,
                        color: color1[index], // 0% 处的颜色
                    },
                    {
                        offset: 0.6,
                        color: color2[index], // 60% 处的颜色
                    },
                    {
                        offset: 1,
                        color: color3[index], // 100% 处的颜色
                    },
                ],
                false
            ),
            borderWidth: 1,
            borderColor: color1[index],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 1,
        },
    };
    aar2.push(Object.assign({}, obj));
});
state.dataArray = aar;
state.dataArray2 = aar2;
console.log(state);
option = {
    backgroundColor: '#010d3a',
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            show: true,
            margin: 25,
            rotate: 40,
            color: 'white',
            fontSize: 16,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
                width: 2,
            },
        },
    },
    tooltip: {
        show: true,
        orient: 'vertical',
        formatter: '{b0}: {c0}',
    },
    series: [
        {
            type: 'bar',
            barWidth: barWidth,
            z: 1,
            data: state.dataArray,
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'start',
            data: state.dataArray,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, 10],
            silent: true,
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: state.dataArray,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.3],
            silent: true,
        },
    ],
};
