var legendData = ['当前值', '环境最高', '环境最低']; //图例
var data = [
    [25.4, 88, 4.3, 87, 3], // 当前值
    [35, 95, 6, 90, 18], // 环境最高
    [23, 70, 2.8, 60, 0], // 环境最低
    [], // 最外范围
];
var offset = 0;

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
    item.max = data[1][index] + gridv;
    item.min = data[2][index] - gridv;
    data[3].push(data[1][index] + gridv);
});

option = {
    backgroundColor: '#091c3d',
    hoverAnimation: true,
    tooltip: {
        trigger: 'item',
    },
    radar: {
        // shape: 'circle',
        // radius: '60%',
        center: ['50%', '50%'],
        // nameGap: 65,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
        },
        indicator: indicator,
        axisLine: {
            // show:false,
            lineStyle: {
                color: '#153269',
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
        // splitNumber: 5,
        splitArea: {
            show: false,
        },
        axisLabel: {
            show: true,
            color: '#FFFFFF',
            formatter: function (value, index) {
                offset++;
                if (offset < 2) {
                    return ['{yxStyle|偏高}', '{pjStyle|环境适宜}', '{jcStyle|偏低}'].join('\n');
                }
            },
            rich: {
                yxStyle: {
                    color: 'rgba(245, 166, 35, 0.8)',
                    fontSize: 16,
                    width: 250,
                    height: 30,
                    align: 'right',
                    // padding: [-25, 140],
                    padding: [0, 100, -350, 0],
                },
                pjStyle: {
                    color: 'rgb(87, 217, 254)',
                    fontSize: 16,
                    width: 250,
                    height: 30,
                    align: 'right',
                    padding: [0, 30, -200, 0],
                    // padding: [5, 70],
                },
                jcStyle: {
                    color: 'rgba(245, 166, 35, 1)',
                    fontSize: 16,
                    width: 250,
                    height: 30,
                    align: 'right',
                    padding: [0, -20, -20, 0],
                },
            },
        },
    },
    series: [
        {
            type: 'radar',
            name: '最外范围',
            z: 3,
            tooltip: {
                show: false,
                // trigger: 'item',
            },
            data: [{ value: data[3] }],
            symbolSize: 0,
            areaStyle: {
                normal: {
                    opacity: 0.4,
                    color: 'rgba(245, 166, 35, 0.6)',
                },
            },
            lineStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 1)',
                    width: 1,
                },
            },
        },
        {
            type: 'radar',
            name: '当前值',
            z: 6,
            data: [{ value: data[0] }],
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
            name: '环境最高值',
            z: 4,
            data: [{ value: data[1] }],
            symbol: 'circle',
            symbolSize: 0,
            areaStyle: {
                normal: {
                    // opacity: 0.4,
                    color: 'rgba(62, 220, 132, 0.3)',
                },
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
            name: '环境最低值',
            z: 7,
            data: [{ value: data[2] }],
            symbolSize: null,
            areaStyle: {
                normal: {
                    // opacity: 0.4,
                    color: 'rgba(245, 166, 35, 0.2)',
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
            emphasis: {
                label: {
                    show: true,
                    color: '#6B99B7',
                    position: 'top',
                },
            },
        },
    ],
};
