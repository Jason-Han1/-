app.title = '嵌套环形图';

option = {
    title: {
        text: '过去七天手机APP使用统计',
        subtext: '健康使用手机@华为',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['通讯社交', '视频服务', '电子商务']
    },
    series: [{
            name: '使用时间',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 108,
                    name: '电子商务',
                    selected: true
                },
                {
                    value: 2043,
                    name: '通讯社交'
                },
                {
                    value: 1552,
                    name: '视频服务'
                }
            ]
        },
        {
            name: '使用时间',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [{
                    value: 108,
                    name: '淘宝'
                },
                {
                    value: 684,
                    name: '微博'
                },
                {
                    value: 1165,
                    name: '微信'
                },
                {
                    value: 196,
                    name: '知乎'
                },
                {
                    value: 480,
                    name: '爱奇艺'
                },
                {
                    value: 271,
                    name: '腾讯视频'
                },
                {
                    value: 207,
                    name: '抖音短视频'
                },
                {
                    value: 594,
                    name: '其他'
                }
            ]
        }
    ]
};