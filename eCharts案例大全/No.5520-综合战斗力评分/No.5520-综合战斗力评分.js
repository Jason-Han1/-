
var indicator = [{
        text: '人员数量 \n 0',
        max: 30
    },
    {
        text: '指挥员能力\n 0       ',
        max: 30
    },
    {
        text: '年出警量\n 0     ',
        max: 30
    },
    {
        text: '车辆配备\n      0',
        max: 30,
    },
    {
        text: '人员结构\n      0',
        max: 30
    }
    
];
var dataArr = [
    {
         value: [0, 0, 0, 0, 0, 0],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#00D7FF',
                    // shadowColor: '#4BFFFC',
                    // shadowBlur: 10,
                },
                shadowColor: '#00D7FF',
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
                            color: '#00D7FF'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#00D7FF'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    }
];
var colorArr = ['#00D7FF','#C000FF', '#2B30EB']; //颜色
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "综合战斗力评分 总分 0分",
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
        symbolSize: 8,
        // symbol: 'angle',
        data: dataArr
    }]
};