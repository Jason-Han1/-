
var indicator = [{
        text: '年龄 95',
        max: 100
    },
    {
        text: '学历 95',
        max: 100
    },
    {
        text: '专业 90',
        max: 100
    },
    {
        text: '从事指挥岗位年限 84',
        max: 100,
    },
    {
        text: '身体情况 75',
        max: 100
    },
    {
        text: '专业特长 91',
        max: 100
    },
    {
        text: '培训 88',
        max: 100
    },
    {
        text: '比武竞赛 93',
        max: 100
    }
    
];
var dataArr = [
    {
         value: [95, 95, 90, 84, 75, 91, 88, 93],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#BBE265',
                },
                shadowColor: '#BBE265',
                shadowBlur: 10,
            },
        },
         areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#BBE265'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    }
];
var colorArr = ['#BBE265']; //颜色
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "指挥员能力 综合80分",
        x: "4%",
        width: 173,
        height: 163,
        fontSize: 22,
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    color: colorArr,
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
        },
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
    },
    series: [{
        type: 'radar',
        symbolSize: 5,
        // symbol: 'angle',
        data: dataArr
    }]
};