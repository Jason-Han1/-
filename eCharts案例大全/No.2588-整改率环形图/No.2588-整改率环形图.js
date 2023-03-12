let max = 100;
let value = 32;

let rate = Math.round((value * 100) / max);
option = {
    backgroundColor: '#333',
    title: [
        {
            text: '{a|整改率}\n{b|' + rate + '%}',
            show: true,
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 40,
                        color: 'rgba(255,255,255,.4)',
                        padding: [0, 0,25, 0],
                    },
                    b: {
                        fontSize:40,
                        color: '#00b6fd',
                        fontFamily: 'alibabaPuhuiM',
                    },
                },
            },
        },
    ],
    polar: {
        center: ['50%', '50%'],
        radius: ['60%', '75%'],
    },
    angleAxis: {
        max: max,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            roundCap: true,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(19, 84, 146, .4)',
            },
            data: [value],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#005DCF',
                        },
                        {
                            offset: 1,
                            color: '#00CCFF',
                        },
                    ]),
                },
            },
        },
        {
            name: '',
            type: 'gauge',
            radius: '54%',
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(0, 182, 253, 0)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(0, 182, 253, .2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0, 182, 253, .4)',
                                },
                            ]),
                        ],
                    ],
                    width: 1,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [],
            pointer: {
                show: false,
            },
        },
    ],
};
