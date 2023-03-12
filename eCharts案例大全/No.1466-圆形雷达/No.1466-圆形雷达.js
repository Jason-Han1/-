var indicator = [{
        text: '二面角的定义',
        max: 40,
    },
    {
        text: '正棱锥的定义',
        max: 40
    },
    {
        text: '二面角的面',
        max: 40
    },
    {
        text: '直二面角',
        max: 40,
        //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
    },
    {
        text: '棱锥的定义',
        max: 40
    },
    {
        text: '棱锥的性质',
        max: 40
    }
    
];
var dataArr = [
    {
        value: [24, 35, 22, 33, 20, 16],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#4BFFFC',
                    // shadowColor: '#4BFFFC',
                    // shadowBlur: 10,
                },
                shadowColor: '#4BFFFC',
                shadowBlur: 10,
            },
        },
         areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'radial',
                        x: 0.5, //右
                        y: 0.5, //下
                        r: 1,
                        colorStops: [{
                            offset: 1,
                            color: '#4BFFFC'
                        }, {
                            offset: 0,
                            color: 'rgba(0,0,0,0)'
                        }],
                        globalCoord: false
                    },
                    opacity: 0.8 // 区域透明度
                }
            }
    }
];
var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
option = {
    backgroundColor: '#101736',
    title: {
        show: false,
        text: "数学薄弱知识点分析",
        x: "4%",

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
        shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
        },
        label:{
          distance:10,  
        },
        indicator: indicator,
        splitNumber:3,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(24,60,108,.5)', 'rgba(15,36,80,.5)','rgba(12,25,59,.5)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
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