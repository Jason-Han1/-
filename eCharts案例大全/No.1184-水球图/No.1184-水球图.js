var data = [
    {
        type: 0, //0-5 0 为 优  良 轻度 中度 重度 严重
        widthString: '300px', // 宽度,
        text: '50%', //显示文本
        fontSize: '50px', //文本字号
        amplitude: 12, //水波振幅
    },
];

if (!Array.isArray(data) || data.length === 0) {
    return;
}
let color = '#23cc72';
let fontColor = '#23cc72';
switch (data[0].type) {
    case 0: {
        fontColor = '#23cc72';
        color = 'rgba(35,204,114,.5)';
        break;
    }
    case 1: {
        fontColor = '#f8c21c';
        color = 'rgba(248,194,28,.1)';
        break;
    }
    case 2: {
        fontColor = '#fe9837';
        color = 'rgba(254,152,55,.1)';
        break;
    }
    case 3: {
        fontColor = '#f86965';
        color = 'rgba(248,105,101,.1)';
        break;
    }
    case 4: {
        fontColor = '#e4387f';
        color = 'rgba(228,56,127,.1)';
        break;
    }
    case 5: {
        fontColor = '#b61f7e';
        color = 'rgba(182,31,126,.1)';
        break;
    }
}

function Pie() {
    let dataArr = [];
    for (var i = 0; i < 180; i++) {
        if (i % 3 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: fontColor,
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}

option = {
    backgroundColor: '#485C6D',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)',
        },
    },
    series: [
        {
            type: 'liquidFill',
            radius: '70%',
            center: ['50%', '50%'],
            amplitude: data[0].amplitude || 10,
            data: [0.5, 0.5], // data个数代表波浪数
            color: [color],
            backgroundStyle: {
                borderWidth: 1,
                borderColor: fontColor,
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                        offset: 0,
                        color: 'rgba(0, 0, 0,.4)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 0, 0,0)',
                    },
                ]),
            },
            // itemStyle:{
            //     opacity:0.4
            // },
            label: {
                normal: {
                    position: ['50%', '30%'],
                    // align:'right',
                    formatter: data[0].text || '',
                    textStyle: {
                        fontSize: data[0].fontSize,
                        color: fontColor,
                    },
                },
            },
            outline: {
                show: false,
            },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['80%', '98%'],
            hoverAnimation: false,

            data: [
                {
                    name: '',
                    value: 500,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: color,
                        opacity: 0.5,
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: color,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            radius: ['85%', '90%'],
            z: 10,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(137, 137, 137, .3)',
                    borderColor: '#888',
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                    areaColor: 'rgba(255, 255, 255, .1)',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: Pie(),
        },
        // {
        //     name: '',
        //     type: 'gauge',
        //     radius: '100%', // 和占比环重合
        //     center: ['50%', '50%'],
        //     startAngle: -180,
        //     endAngle: 179.9999,
        //     splitNumber: 90, // 分成20个小分隔
        //     hoverAnimation: true,
        //     z: 10,
        //     axisTick: {
        //         show: false
        //     },
        //     splitLine: {
        //         length: 10,
        //         lineStyle: {
        //             width: 4,
        //             color: fontColor
        //         }
        //     },
        //     axisLabel: {
        //         show: false
        //     },
        //     pointer: {
        //         show: false
        //     },
        //     axisLine: {
        //         lineStyle: {
        //             opacity: 0
        //         }
        //     },
        //     detail: {
        //         show: false
        //     },
        //     data: [
        //         {
        //             value: 0,
        //             name: ''
        //         }
        //     ]
        // }
    ],
};

// myChart.resize({width: data[0]?.widthString, height: data[0]?.widthString}); //解决echarts处理动态数据加载不出来的问题
