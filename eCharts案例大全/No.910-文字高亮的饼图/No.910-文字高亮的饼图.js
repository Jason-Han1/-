var data = [
    {
        name: '民营控股',
        value: 6,
    },
    {
        name: '民营控股1',
        value: 6,
    },
];
var title1 = '大行业';
var title2 = '';
option = {
    backgroundColor:'#000',
    tooltip: {
        show: true,
    },
    color: ['#02efff', '#2489ff', '#ffdf19', '#14bcff', '#0054ff', '#ffd684'],
    legend: {
        orient: 'vertical',
        right: '3%',
        top: 'center',
        itemGap: 10,
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        itemWidth: 12,
        itemHeight: 12,
        emphasis: {
            selectorLabel: {
                color: 'rgba(228, 24, 24, 1)',
            },
        },
        textStyle: {
            rich: {
                a: {
                    color: '#fff',
                    width: 50,
                },
                a1: {
                    color: '#ffdf19',
                    width: 50,
                },
                b: {
                    color: '#c1d4e2',
                    fontSize: 12,
                    padding: [0, 40, 0, 135],
                },
                b1: {
                    color: '#ffdf19',
                    fontSize: 12,
                    padding: [0, 40, 0, 135],
                },
            },
        },
        formatter: function (name) {
            let title = '';
            var target;
            for (var i = 0, l = data.length; i < l; i++) {
                if (data[i].name == name) {
                    target = data[i].value;
                    title = data[i].label;
                }
            }
            return `{a| ${name}}{b| ${target}}`;
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['20%', '50%'],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
                // normal: {
                //   borderWidth: 5,
                //   borderColor: "#003359"
                // }
            },
            data,
            labelLine: {
                show: false,
            },
            label: {
                //饼图中间文字设置
                normal: {
                    show: true,
                    position: 'center',
                    color: '#fff',
                    formatter: function () {
                        if (title2) {
                            return `{value|${title1}}\n{label|${title2}}`;
                        }
                        return title1;
                    },
                    rich: {
                        value: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 12,
                        },
                        label: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 12,
                            padding: [0, 0, 5, 0],
                        },
                    },
                },
                emphasis: {
                    //中间文字显示
                    show: true,
                },
            },
        },
    ],
};

// 鼠标放在图例上legend高亮 放这里报错了 粘贴了就可以用
// echarts.on('mouseover', (params) => {
//     let color = ['#02efff', '#2489ff', '#ffdf19', '#14bcff', '#0054ff', '#ffd684'];
//     color.forEach((ele, i) => {
//         if (ele == params.color) {
//             color[i] = '#ffdf19';
//         }
//     });
//     echarts.setOption({
//         color,
//         legend: {
//             formatter: function (name) {
//                 let title = '';
//                 var target;
//                 for (var i = 0, l = data.length; i < l; i++) {
//                     if (data[i].name == name) {
//                         target = data[i].value;
//                         title = data[i].label;
//                     }
//                 }
//                 if (params.name == name) {
//                     return `{a1| ${name}}{b1| ${target}}`;
//                 }
//                 return `{a| ${name}}{b| ${target}}`;
//             },
//         },
//     });
// });
// echarts.on('mouseout', function () {
//     echarts.setOption({
//         color: ['#02efff', '#2489ff', '#ffdf19', '#14bcff', '#0054ff', '#ffd684'],
//         legend: {
//             formatter: function (name) {
//                 let title = '';
//                 var target;
//                 for (var i = 0, l = data.length; i < l; i++) {
//                     if (data[i].name == name) {
//                         target = data[i].value;
//                         title = data[i].label;
//                     }
//                 }
//                 return `{a| ${name}}{b| ${target}}`;
//             },
//         },
//     });
// });
