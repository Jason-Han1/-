//  data示例参数
let data = {
    download: [{
        value: 135,
        name: '和家亲'
    }, {
        value: 35,
        name: '小米米家'
    }],
    usageDuration: [{
        value: 135,
        name: '和家亲'
    }, {
        value: 50,
        name: '小米米家'
    }]

}

let span = '30%' //span 饼图环化程度  0%-100%  0%实心 --非必选参数
option = {
    title: [{
            text: `小米米家、和家亲APP对比`,
            left: 'center',
            textStyle: {
                color: 'white',
                fontWeight: 'bold'
            },
            top: '20'

        }, {

            text: '下载量',
            left: '23%',
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'bold'
            },
            top: '10%'

        },
        {

            text: '使用时长',
            left: '73%',
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'bold'
            },
            top: '10%'
        }
    ],
    tooltip: {
        trigger: 'item',

    },
    backgroundColor: '#131e54',
    color: ['#637b69', '#789b6f',
        '#3b64a6', '#2672cc', '#503e8d', '#5d3ec5',
        '#874f5f', '#b6575c', '#623363', '#962e66'
    ],
    legend: {
        orient: 'horizontal',
        show: true,
        bottom: '10%',
        data: ['和家亲', '小米米家'],
        textStyle: {
            color: '#bac0c0'
        }
    },
    // graphic: {
    //     elements: [{

    //             type: 'text',
    //             top: '10%',
    //             left: '25%',
    //             style: {
    //                 text: '下载量',
    //                 font:' bold 10em',
    //                 fill:'white'
    //             }
    //         }, {
    //             type: 'text',
    //             top: '10%',
    //             left: '75%',
    //             style: {
    //                 text: '使用时长',
    //                  font:' bold 10em',
    //                 fill:'white'
    //             }

    //         }

    //     ]
    // },
    series: [{
        name: '下载量',
        type: 'pie',
        center: ['25%', '50%'],
        radius: [span || '0%', '50%'],
        labelLine: {
            normal: {
                length: 30,
                length2: 80,
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        label: {
            normal: {
                formatter: '{a|{d}%} {b|{b}}\n',
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 14,
                        lineHeight: 20
                    },
                    hr: {
                        borderColor: '#fff',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 14,
                        lineHeight: 20,
                        color: '#fff'
                    }
                }
            }
        },
        tooltip: {
            trigger: 'item',
            // {a}：系列名。
            // {b}：数据名。
            // {c}：数据值。
            // {d}：百分比。
            formatter: "{a} <br/>{b}: {c}({d}%)"
        },
        data: data.download,

    }, {
        name: '使用时长',
        type: 'pie',
        center: ['75%', '50%'],
        radius: [span || '0', '50%'],
        labelLine: {
            normal: {
                length: 30,
                length2: 80,
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        label: {
            normal: {
                formatter: '{a|{d}%} {b|{b}}\n',
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 14,
                        lineHeight: 20
                    },
                    hr: {
                        borderColor: '#fff',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 14,
                        lineHeight: 20,
                        color: '#fff'
                    }
                }
            }
        },
        tooltip: {
            trigger: 'item',
            // {a}：系列名。
            // {b}：数据名。
            // {c}：数据值。
            // {d}：百分比。
            formatter: "{a} <br/>{b}: {c}分钟 ({d}%)"
        },
        data: data.usageDuration
    }]
};