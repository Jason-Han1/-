let data1 = [20, 40, 60, 80];
let nameList = ['生均教学行政用房', '生均教学科研仪器', '生均实践场所', '新增科研仪器占比'];
let newData = data1.map((item, idx) => {
    return {
        value: item,
        // name: '师资力量',
        unit: 'm²',
    };
});
console.log(newData);
option = {
    grid: {},
    series: newData.map((item, idx) => {
        if (idx === 0) {
            return {
                name: '',
                type: 'gauge',
                radius: '20%',
                splitNumber: 5,
                data: [item],
                center: [`${15 + idx * 20}%`, '50%'],
                splitLine: {
                    show: false,
                },
                progress: {
                    show: true,
                },
                itemStyle: {
                    color: '#FF8C00',
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 10,
                        color: [
                            [item.value ? item.value / 100 : 0, '#FF8C00'],
                            [1, '#01A0FE'],
                        ],
                    },
                },
                axisLabel: {
                    show: true,
                    distance: -40,
                    color: '#888888',
                },
                detail: {
                    offsetCenter: [0, '100%'],
                    fontWeight: 'bold',
                    formatter: function (value) {
                        return `{a|${value + item.unit}}\n{b|${nameList[idx]}}`;
                    },
                    rich: {
                        a: {
                            color: '#01a0fe',
                            fontSize: 12,
                        },
                        b: {
                            fontSize: 14,
                            color: '#888888',
                        },
                    },
                },
                title: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    // fontWeight: 'bolder',
                    fontSize: 14,
                    color: '#1170b7',
                    padding: [0, 10, 0, 10],
                    offsetCenter: ['400%', '200%'],
                    // fontStyle: 'italic'
                    borderColor: 'red',
                    lineHeight: 30,
                    borderRadius: 16,
                    backgroundColor: 'rgba(17,112,183,0.3)',
                },
            };
        }else{
             return {
                name: '',
                type: 'gauge',
                radius: '20%',
                splitNumber: 5,
                data: [item],
                center: [`${15 + idx * 20}%`, '50%'],
                splitLine: {
                    show: false,
                },
                progress: {
                    show: true,
                },
                itemStyle: {
                    color: '#FF8C00',
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 10,
                        color: [
                            [item.value ? item.value / 100 : 0, '#FF8C00'],
                            [1, '#01A0FE'],
                        ],
                    },
                },
                axisLabel: {
                    show: true,
                    distance: -40,
                    color: '#888888',
                },
                detail: {
                    offsetCenter: [0, '100%'],
                    fontWeight: 'bold',
                    formatter: function (value) {
                        return `{a|${value + item.unit}}\n{b|${nameList[idx]}}`;
                    },
                    rich: {
                        a: {
                            color: '#01a0fe',
                            fontSize: 12,
                        },
                        b: {
                            fontSize: 14,
                            color: '#888888',
                        },
                    },
                },
                title: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    // fontWeight: 'bolder',
                    show:false,
                    fontSize: 14,
                    color: '#1170b7',
                    padding: [0, 10, 0, 10],
                    offsetCenter: ['0', '0%'],
                    // fontStyle: 'italic'
                    borderColor: 'red',
                    lineHeight: 30,
                    borderRadius: 16,
                    backgroundColor: 'rgba(17,112,183,0.3)',
                },
            };
        }
    }),
};
//   {
//             type: 'pie',
//             labelLine: {
//                 show: false,
//             },
//             z: 10,
//             radius: 5,
//             data: [
//                 {
//                     value: 100,
//                     itemStyle: {
//                         color: '#fff',
//                     },
//                 },
//             ],
//         },
