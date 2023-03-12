let config = {
    color: ['#00FF94', '#00FFEE'],
    data: [
        {
            name: '',
            value: 77,
        },
        {
            name: '',
            value: 23,
        },
    ],
    title: {
        subtext: '公园基础设施提升',
    },
};
let num = config.data[0].value;
let unit = '%';
let title = '进度';
option = {
    backgroundColor: '#0a1723',
    color: [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: config.color[0],
                },
                {
                    offset: 1,
                    color: config.color[1],
                },
            ],
            global: false,
        },
        '#252f54',
    ],
    title: Object.assign(
        {
            text: '{a|' + num + '}{b|' + unit + '}\n{c|' + title + '}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 46,
                        color: '#fff',
                        fontWeight: '500',
                        margin: '0 5px 0 0',
                    },
                    b: {
                        fontSize: 14,
                        color: '#fff',
                        padding: [0, 0, -10, 0],
                        fontWeight: '500',
                    },
                    c: {
                        fontSize: 24,
                        color: 'rgba(255,255,255,.7)',
                        padding: [5, 0],
                    },
                },
            },
            subtext: '',
            top: '44%',
            left: '49%',
            textAlign: 'center',
            itemGap: 280,
            subtextStyle: {
                color: '#fff',
                fontSize: 36,
                align: 'center',
            },
        },
        config.title
    ),
    series: [
        //环形
        {
            name: '',
            type: 'pie',
            radius: ['45%', '55%'],
            center: ['50%', '50%'],
            // hoverAnimation: false,//4.x版本使用取消悬浮放大
            emphasis: {
                //5.x版本使用取消悬浮放大
                scale: false,
                label: {
                    show: false /* 5.x版本是label.emphasis */,
                },
            },
            // label: { 4.x版本是label.emphasis
            //     // normal: {
            //         show: false,
            //     // },
            //     emphasis: {
            //         show: false,
            //     },
            // },
            zlevel: 1,
            labelLine: {
                // normal: {/* 5.x版本中去掉了normal */
                show: false,
                // },
            },
            data: config.data,
        },
        //环形分割线
        {
            name: '分割线',
            type: 'gauge',
            radius: '58%', //配合splitLine里的length一起调
            clockwise: true,
            startAngle: '90',
            center: ['50%', '50%'],
            endAngle: '-269.9999',
            splitNumber: 14,
            zlevel: 2,
            detail: {
                offsetCenter: [10, 20],
                formatter: ' ',
            },
            axisLine: {
                lineStyle: {
                    width: 0,
                    opacity: 0,
                },
            },
            axisTick: {
                show: false,
            },
            markArea: {
                itemStyle: {
                    color: '#0f0',
                },
            },
            splitLine: {
                show: true,
                length: 48, //配合radius一起调
                padding: [0, 0, 0],
                lineStyle: {
                    color: '#121d43',
                    width: 5,
                },
            },
            axisLabel: {
                show: false,
            },
        },
    ],
};
