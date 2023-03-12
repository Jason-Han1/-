function random(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let xData = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        
    ],
    yData = [],
    barData = [];

for (let i = 0; i < xData.length; i++) {
    let value = 10
    yData.push(value);
    barData.push(value);
}

option = {
    backgroundColor: '#fff',
    grid: {
        top: '10%',
        left: '5%',
        bottom: '5%',
        right: '5%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
    },
    animation: false,
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
            },
        },
        offset: 5,
        axisTick: {
            show: false,

            alignWithLabel: true,
            lineStyle: {
                color: '#333',
            },
        },
        axisLabel: {
            fontSize: 10,
        },
        data: xData,
    },
    yAxis: {
        name: 't',
        type: 'value',
        min: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#333',
            },
        },
        axisTick: {
            show: true,
        },
        axisLabel: {
            fontSize: 16,
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            name: '上部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: ["55%", 5],
            symbolOffset: [0, "-50%"],
            symbolPosition: 'end',
            z: 12,
            label: {
                normal: {
                    show: false,
                },
            },
            color: '#11F812',
            data: yData,
        },
        {
            name: '设备数量',
            type: 'bar',
            barWidth: '40%',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: '#24cd1b',
                        },
                        {
                            offset: 1,
                            color: '#6df261',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
            data: yData,
        },

        {
            name: '底部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize:  ["55%", -5],
            symbolOffset: [0, 0],
            z: 12,
            color: '#0DAE11',
            data: barData,
        },
    ],
};
