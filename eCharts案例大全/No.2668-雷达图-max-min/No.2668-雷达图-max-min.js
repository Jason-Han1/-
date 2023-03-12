var legendData = ['当前值', '环境最高', '环境最低']; //图例
var data = [
    [25.4, 88, 4.3, 87, 3], // 当前值
    [35, 95, 6, 90, 18], // 环境最高
    [23, 70, 2.8, 60, 0], // 环境最低
];

var indicator = [
    {
        text: '温度',
        min: 19,
        max: 39,
    },
    {
        text: '湿度',
        min: 76,
        max: 100,
    },
    {
        text: '光照',
        min: 0,
        max: 7.5,
    },
    {
        text: '土壤水分',
        min: 50,
        max: 100,
    },
    {
        text: '风速',
        min: 10,
        max: 20,
    },
];
indicator.forEach((item, index) => {
    const all = data[1][index] - data[2][index];
    const gridv = all / 3;
    // item.max = data[1][index] + gridv;
    item.max = data[1][index] ;
    item.min = data[2][index] - gridv;
});

option = {
    backgroundColor: '#091c3d',
    hoverAnimation: true,
    tooltip: {
        trigger: 'item',
    },
    radar: {
        nameGap: 6, // 图中工艺等字距离图的距离
        radius: '70%',
        center: ['50%', '50%'],
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
        },
        indicator: indicator,
        axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
                // 分隔区域的样式设置。
                color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
        },
    },
    series: [
        {
            type: 'radar',
            z: 3,
            data: [{ value: data[0] }],
            name: legendData[0],
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 1)',
                    borderColor: 'rgba(19, 173, 255, 0.4)',
                    borderWidth: 10,
                },
            },
            // areaStyle: {
            //     normal: {
            //         color: 'rgba(19, 173, 255, 0.5)',
            //     },
            // },

            lineStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 1)',
                    width: 2,
                    type: 'dashed',
                },
            },
            emphasis: {
                areaStyle: {
                    opacity: 0.5,
                },
            },
        },
        {
            type: 'radar',
            z: 1,
            data: [{ value: data[1] }],
            name: legendData[1],
            symbol: 'circle',
            symbolSize: 5,
            areaStyle: {
                normal: {
                    // opacity: 0.4,
                    color: 'rgba(245, 166, 35, 0.2)',
                },
            },
            itemStyle: {
                color: 'rgba(245, 166, 35, 1)',
                borderColor: 'rgba(245, 166, 35, 0.3)',
                borderWidth: 10,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',

                    color: 'rgba(245, 166, 35, 1)',
                    width: 1,
                },
            },
        },
        {
            type: 'radar',
            z: 4,
            symbolSize: 10,
            data: [{ value: data[2] }],
            name: legendData[2],
            symbol: 'circle',
            symbolSize: 5,
            areaStyle: {
                normal: {
                    opacity: 0.4,
                    color: 'rgba(245, 166, 35, 0.6)',
                },
            },
            itemStyle: {
                color: 'rgba(245, 166, 35, .6)',
                borderColor: 'rgba(245, 166, 35, 0.3)',
                borderWidth: 10,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    color: 'rgba(245, 166, 35, .6)',
                    width: 1,
                },
            },
        },
    ],
};
