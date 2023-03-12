var data = 30;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%',
    },
    title: {
        text: data + "%",
        subtext: '副标题',
        left: 'center',
        top: '42%', //top待调整
        textStyle: {
            color: '#07796C',
            fontSize: 88,
            fontFamily: 'DINAlternate-Bold',
        },
        subtextStyle: {
            color: '#AAA9A9',
            fontSize: 42,
            fontFamily: 'PingFangSC-Regular',
            top: '50%',
        },
        itemGap: -4, //主副标题间距
    },
    legend: {
        show: false,
        data: ['Baidu'],
    },
    series: [
        {
            name: '内圈',
            type: 'pie',
            selectedMode: 'single',
            //center: ["50%","60%"],
            radius: ['58%', '65%'],
            label: {
                position: 'center',
                fontSize: 14,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            // color: "rgba(225,243,252,0.25)",
                            color: 'rgba(234,242,254,1)',
                        },
                    },
                },
            ],
        },
        {
            name: '外圈',
            type: 'pie',
            //center: ["50%","60%"],

            radius: ['65%', '85%'],
            labelLine: {
                length: 30,
            },
            label: {
                show: false,
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center',
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0,
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33,
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4,
                    },
                },
            },
            data: [
                {
                    value: data,
                    name: '数据',
                    itemStyle: {
                        normal: {
                            // color: [
                            //         [
                            //             0,
                            //             new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            //                 offset: 0.2,
                            //                 color: "rgba(13,44,67,0.35)"
                            //             },
                            //             {
                            //                 offset: 0.5,
                            //                 color: "rgba(13,44,67,0.7)"
                            //             },
                            //             ])
                            //         ],
                            //         [0.5, 'rgba(85, 255, 0, 1)'],
                            //         [1, 'rgba(85, 255, 0, 1)']
                            //     ]
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(33,196,170,0.35)',
                                },
                                {
                                    offset: 0.2,
                                    color: 'rgba(33,196,170,0.35)',
                                },
                                {
                                    offset: 0.48,
                                    color: 'rgba(33,196,170,0.55)',
                                },
                                {
                                    offset: 0.98,
                                    color: 'rgba(33,196,170,0.75)',
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 1,
                    name: 'Direct',
                    itemStyle: {
                        normal: {
                            color: 'rgb(20,169,145)',
                            borderWidth: 1,
                            //borderCap: "square",
                            //borderJoin: "round",
                            borderColor: 'rgb(20,169,145)',
                        },
                    },
                },
                {
                    value: 100 - data,
                    name: '其余',
                    itemStyle: {
                        normal: {
                            color: '#fff',
                        },
                    },
                },
            ],
        },
    ],
};
