// let { imgList } = {
//     imgList: [
//         'https://img1.baidu.com/it/u=3065990281,2446271183&fm=26&fmt=auto',
//         'https://img1.baidu.com/it/u=3065990281,2446271183&fm=26&fmt=auto',
//         'https://img1.baidu.com/it/u=3065990281,2446271183&fm=26&fmt=auto',
//         'https://img1.baidu.com/it/u=3065990281,2446271183&fm=26&fmt=auto',
//         'https://img1.baidu.com/it/u=3065990281,2446271183&fm=26&fmt=auto',
//     ],
// };
const { xdata, ydata, questionList } = {
    questionList: [
        {name: '简答题', value:  [93, 55]},
        {name: '判断题', value:[32767, 29654]},
        {name: '单选题 ', value: [57464, 42125]},
        {name: '多选题', value:  [30019, 26680]},
        {name: '填空题', value: [401, 368]},
    ],
    xdata: [
        '民警线上课程学习演示课程',
        '理想信念与警察职业素养',
        '移民管理工作（边境管理)',
        '移民管理工作（边防检查)',
        '管理员基础数据添加操作',
    ],
    ydata: [59, 90, 73, 89, 91],
};
let ydatamax = [];
for (var i = 0; i < ydata.length; i++) {
    ydatamax.push(100);
}

option = {
    backgroundColor:'blurScope',
    title: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: function (a) {
            return a.name;
        },
    },
    grid: {
        borderWidth: 0,
        top: '5',
        left: '100',
        right: '8%',
        bottom: '3%',
    },
    // color: color,
    yAxis: [
        {
            inverse: true,
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                inside: false,
                // rich: {
                //     img1: {
                //         backgroundColor: {
                //             image: imgList[0],
                //         },
                //         width: 62,
                //         height: 62,
                //         align: 'center',
                //     },
                //     img2: {
                //         backgroundColor: {
                //             image: imgList[1],
                //         },
                //         width: 62,
                //         height: 62,
                //         align: 'center',
                //     },
                //     img3: {
                //         backgroundColor: {
                //             image: imgList[2],
                //         },
                //         width: 62,
                //         height: 62,
                //         align: 'center',
                //     },
                //     img4: {
                //         backgroundColor: {
                //             image: imgList[3],
                //         },
                //         width: 62,
                //         height: 62,
                //         align: 'center',
                //     },
                //     img5: {
                //         backgroundColor: {
                //             image: imgList[4],
                //         },
                //         width: 62,
                //         height: 62,
                //         align: 'center',
                //     },
                // },
                formatter: function (params, index) {
                    let str = 'img' + (index + 1);
                    return `{${str}|}`;
                },
            },
            data: xdata,
        },
    ],
    xAxis: {
        type: 'value',

        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },

    series: [
        {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#16C8FB',
                        },
                        {
                            offset: 1,
                            color: '#0958D2',
                        },
                    ]),
                },
            },
            data: ydata,
            // animationDuration: 1500,
            label: {
                normal: {
                    color: '#555',
                    show: true,
                    position: [0, -26],
                    textStyle: {
                        fontSize: 16,
                        color: '#fff',
                    },
                    rich: {
                        a: {
                            color: '#0084FF',
                            fontSize: 16,
                        },
                        b: {
                            color: '#FFCF29',
                            fontSize: 16,
                        },
                    },
                    formatter: function (a, b) {
                        let str = '';
                        xdata.forEach((item, i) => {
                            if (item == a.name) {
                                str = `${questionList[i].name} {a|${questionList[i].value[0]}} 道  未做题数量 {b|${questionList[i].value[1]}} 道`;
                            }
                        });
                        return str;
                    },
                },
            },
        },
        {
            // 背景
            type: 'bar',
            barGap: '-100%',
            barWidth: 8,
            top: -8,
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            label: {
                normal: {
                    color: '#555',
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: 16,
                        color: '#fff',
                    },
                    formatter: function (a) {
                        return ydata[a.dataIndex] + '%';
                    },
                },
            },
            data: ydatamax,
        },
    ],
    // animationEasing: 'cubicOut'
};
