// data = [];
// data[0] = [9000, 10000, 10500, 11000, 12000, 14500, 15000, 16000, 17500, 21000];
// data[1] = [11000, 12000, 14500, 15000, 16000, 17500, 21000, 300, 200, 500];
// let yLabel = [
//     '三线城市-铂涛客户组合',
//     '三线城市-GDL客户组合',
//     '二线城市-卢浮亚洲客户组合',
//     '二线城市-维也纳客户组合',
//     '二线城市-铂涛客户组合',
//     '二线城市-GDL客户组合',
//     '一线城市-卢浮亚洲客户组合',
//     '一线城市-维也纳客户组合',
//     '一线城市-铂涛客户组合',
//     '一线城市-GDL客户组合',
// ];
let colorList = ['#3161b6', '#e88b00', '#9ce484'];
// option = {
//     title: {
//         text: '',
//         subtext: '',
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow',
//         },
//     },
//     legend: {
//         x: '50%',
//         y: '90%',
//     },
//     grid: {
//         left: '10%',
//         right: '10%',
//         bottom: '10%',
//         top: '5%',
//         containLabel: true,
//     },
//     xAxis: {
//         name: '',
//         type: 'value',
//         axisLine: {
//             symbol: ['none', 'arrow'], //两端都显示箭头
//             symbolOffset: [0, 5], //箭头距离两端的距离,可为负数
//         },
//     },
//     yAxis: {
//         name: '',
//         type: 'category',
//         data: yLabel,
//         // axisLine: {
//         //     symbol: ['none', 'none'], //两端都显示箭头
//         //     symbolOffset: [0, 30] //箭头距离两端的距离,可为负数
//         // }
//     },
//     series: [
//         {
//             stack: '0',
//             type: 'bar',
//             data: data[0],
//             itemStyle: {
//                 //通常情况下：
//                 normal: {
//                     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
//                     color: colorList[0],
//                 },
//             },
//             //鼠标悬停时：
//             emphasis: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)',
//             },
//         },
//         {
//             stack: '0',
//             type: 'bar',
//             data: data[1],
//             itemStyle: {
//                 //通常情况下：
//                 normal: {
//                     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
//                     color: colorList[1],
//                 },
//             },
//             //鼠标悬停时：
//             emphasis: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)',
//             },
//         },
//     ],
// };

// 指定图表的配置项和数据
var option = {
    legend: {},
    tooltip: {},
    dataset: {
        // 提供一份数据。
        source: [
            ['Period', '<1 year', '1-2 year', '2-3 years', '>3 year'],
            ['Matcha Latte', 0, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
        ],
    },
    // // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    // xAxis: {type: 'category'},
    // // 声明一个 Y 轴，数值轴。
    // yAxis: {},
    xAxis: {
        name: 'Thousands',
        type: 'value',
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'], //两端都显示箭头
            symbolOffset: [0, 5], //箭头距离两端的距离,可为负数
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        // axisLine: {
        //     symbol: ['none', 'none'], //两端都显示箭头
        //     symbolOffset: [0, 30] //箭头距离两端的距离,可为负数
        // }
    },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
        {
            stack: '0',
            type: 'bar',
            itemStyle: {
                //通常情况下：
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: colorList[0],
                },
            },
            //鼠标悬停时：
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
        {
            stack: '0',
            type: 'bar',
            itemStyle: {
                //通常情况下：
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: colorList[1],
                },
            },
            //鼠标悬停时：
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
        {
            stack: '0',
            type: 'bar',
            itemStyle: {
                //通常情况下：
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: colorList[2],
                },
            },
            //鼠标悬停时：
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
    ],
};
