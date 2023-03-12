const labelData = [];
for (var i = 0; i < 150; ++i) {
    labelData.push({
        value: 1,
        name: i,
        itemStyle: {
            normal: {
                color: 'rgba(0,0,0,0)',
            },
        },
    });
}
for (let i = 0; i < labelData.length; ++i) {
    if (labelData[i].name < 80) {
        labelData[i].itemStyle = {
            normal: {
                color: '#03FCF3',
            },
        };
    }
}
const labelData1 = [];
for (let i = 0; i < 150; ++i) {
    labelData1.push({
        value: 1,
        name: i,
    });
}
for (let i = 0; i < labelData1.length; ++i) {
    if (labelData1[i].name < 150) {
        labelData1[i].itemStyle = {
            normal: {
                color: '#085F83',
            },
        };
    }
}
const remTopx = (rem) => {
    let fontSize = '16';
    // const html = document.documentElement;
    // fontSize = parseInt(html.style.fontSize);
    return fontSize * rem;
};
option = {
    backgroundColor: '#000',
    /** 标题*/
    title: [
        {
            text: '{name|' + 99966.99 + '}\n{val|' + '项目回款总额' + '}{unit|' + '（万）' + '}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: remTopx(2.25),
                        color: '#CEF3FE',
                    },
                    val: {
                        fontSize: remTopx(1.38),
                        color: '#CEF3FE',
                        padding: [10, 0],
                    },
                    unit: {
                        fontSize: remTopx(1),
                        color: '#DCCC5F',
                    },
                },
            },
            // 是否触发事件
            triggerEvent: true,
        },
        {
            text: '{name|' + '项目现金流' + '}{unit|' + '（万）' + '}\n{val|' + 8999.66 + '}',
            top: '0',
            left: '64%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: remTopx(1.38),
                        color: '#13E6FF',
                    },
                    val: {
                        fontSize: remTopx(1.63),
                        color: '#13E6FF',
                        padding: [10, 20],
                    },
                    unit: {
                        fontSize: remTopx(1),
                        color: '#DCCC5F',
                    },
                },
            },
            // 是否触发事件
            triggerEvent: true,
        },
    ],

    /** 关闭必图例*/
    legend: {
        show: false,
    },
    series: [
        {
            hoverAnimation: false,
            type: 'pie',
            clockwise: false,
            z: 2,
            data: labelData,
            radius: ['55%', '68%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    borderColor: '#031F45',
                    borderWidth: 2,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 1,
            data: labelData1,
            radius: ['55%', '68%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    borderColor: '#031F45',
                    borderWidth: 2,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
    ],
};
/**对进行的时间进行捕获*/
// myChart4.getZr().on('click', (params) => {
//     // console.log(params)
//     // 设置限制条件，确保只有点击的节点为title时才生效
//     if (params.target && params.target.eventData && params.target.eventData.componentType === 'title') {
//         const menu = {
//             menuName: '运营利润',
//             component: () => import('./profits'),
//             index: 0,
//             code: 'operatingProfits',
//         };
//         toPath(menu);
//     }
// });
