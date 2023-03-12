var fontColor = '#fff';
let noramlSize = 16;
var datas = {
    value: 186,
    ringColor: [
        {
            offset: 0,
            color: '#8867F1', // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#4C2BBB', // 100% 处的颜色
        },
    ],
};
option = {
    backgroundColor: '#000E1A',
    title: {
        text: '新增党员',
        subtext: datas.value + '人',
        x: 'center',
        y: 'center',
        textStyle: {
            fontFamily: 'Adobe Heiti Std',
            fontWeight: 'normal',
            color: '#fff',
            fontSize: 14,
        },
        subtextStyle: {
            fontSize: 17,
            color: '#E7C441',
        },
    },
    //  color: ['#282c40'],
    legend: {
        show: false,
    },
    color: ['#282c40', '#29aa82', '#f1b144'],
    tooltip: {
        show: false,
        trigger: 'item',
    },
    series: [
        {
            name: '高管党员',
            type: 'pie',
            clockWise: true,
            radius: ['40%', '45%'],
            itemStyle: {
                // borderRadius: 20,
                label: {
                    show: true,
                },
            },
            hoverAnimation: false,
            data: [
                {
                    value: 12,
                    label: {
                        show: true,
                        formatter: '{a|{a}}\n{hr|}\n{c|{c}人}',
                        rich: {
                            a: {
                                fontSize: 14,
                                fontFamily: 'PingFang SC',
                                fontWeight: 400,
                                color: '#fff',
                                padding: 10,
                                lineHeight: 40,
                                textAlign: 'center',
                            },
                            hr: {
                                borderColor: '#4681ec',
                                width: '100%',
                                borderWidth: 2,
                                height: 0,
                            },
                            c: {
                                fontSize: 14,
                                fontFamily: 'Source Han Sans CN',
                                color: '#E7B943',
                                fontWeight: 400,
                                lineHeight: 30,
                                align: 'center',
                            },
                        },
                    },
                    itemStyle: {
                        // borderRadius: 100,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            // 完成的圆环的颜色
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#8867F1', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#4C2BBB', // 100% 处的颜色
                                },
                            ],
                        },
                    },
                    labelLine: {
                        length: 0,
                        length2: 0,
                        lineStyle: {
                            color: '#0099EA',
                        },
                    },
                },
                {
                    name: '',
                    value: 88,
                    label: {
                        show: false,
                        formatter: '{a|{a}}\n{hr|}\n{c|{c}人}',
                        rich: {
                            a: {
                                fontSize: 14,
                                fontFamily: 'PingFang SC',
                                fontWeight: 400,
                                color: '#fff',
                                padding: 10,
                                lineHeight: 40,
                                textAlign: 'center',
                            },
                            hr: {
                                borderColor: '#4681ec',
                                width: '100%',
                                borderWidth: 2,
                                height: 0,
                            },
                            c: {
                                fontSize: 14,
                                fontFamily: 'Source Han Sans CN',
                                color: '#E7B943',
                                fontWeight: 400,
                                lineHeight: 30,
                                align: 'center',
                            },
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            radius: ['50%', '58%'],
            center: ['50%', '50%'],
            data: [
                {
                    name: '新发展党员',
                    value: '106',
                    itemStyle: {
                        // borderRadius: 20,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            // 完成的圆环的颜色
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#5E89E1', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#2682D0', // 100% 处的颜色
                                },
                            ],
                        },
                    },
                    labelLine: {
                        length: 0,
                        length2: 0,
                        lineStyle: {
                            color: '#0099EA',
                        },
                    },
                    label: {
                        show: true,
                        formatter: '{a|{a}}\n{hr|}\n{c|{c}人}',
                        rich: {
                            a: {
                                fontSize: 14,
                                fontFamily: 'PingFang SC',
                                fontWeight: 400,
                                color: '#fff',
                                padding: 10,
                                lineHeight: 40,
                                textAlign: 'center',
                            },
                            hr: {
                                borderColor: '#4681ec',
                                width: '100%',
                                borderWidth: 2,
                                height: 0,
                            },
                            c: {
                                fontSize: 14,
                                fontFamily: 'Source Han Sans CN',
                                color: '#E7B943',
                                fontWeight: 400,
                                lineHeight: 30,
                                align: 'center',
                            },
                        },
                    },
                },
                {
                    name: '新招录党员',
                    value: '120',
                    itemStyle: {
                        // borderRadius: 20,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            // 完成的圆环的颜色
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#32CFEC', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#33BAD4', // 100% 处的颜色
                                },
                            ],
                        },
                    },
                    labelLine: {
                        length: 0,
                        length2: 0,
                        lineStyle: {
                            color: '#0099EA',
                        },
                    },
                    label: {
                        show: true,
                        formatter: '{a|{a}}\n{hr|}\n{c|{c}人}',
                        rich: {
                            a: {
                                fontSize: 14,
                                fontFamily: 'PingFang SC',
                                fontWeight: 400,
                                color: '#fff',
                                padding: 10,
                                lineHeight: 40,
                                textAlign: 'center',
                            },
                            hr: {
                                borderColor: '#4681ec',
                                width: '100%',
                                borderWidth: 2,
                                height: 0,
                            },
                            c: {
                                fontSize: 14,
                                fontFamily: 'Source Han Sans CN',
                                color: '#E7B943',
                                fontWeight: 400,
                                lineHeight: 30,
                                align: 'center',
                            },
                        },
                    },
                },
            ],
        },
    ],
};
