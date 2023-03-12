var indicator = [{
        text: '事故频率\n（米/百万车公里）',
        max: 30
    },
    {
        text: '违法违章频率    \n（米/百万车公里）',
        max: 30
    },
    {
        text: '培训次数',
        max: 30
    },
    {
        text: '发车准点率',
        max: 30,
    },
    {
        text: '车辆满载率',
        max: 30
    },
    {
        text: '投诉次数',
        max: 30
    }
    
];
var dataArr = [
    {
        value: [17, 22, 10, 25, 15, 22],
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
                        offset: 1,
                        color: 'rgba(0,0,0,0.9)'
                    }],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        }
    }
];
var colorArr = ['#00D7FF']; //颜色
option = {
    backgroundColor: '#101736',
    color: colorArr,
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
        },
        radius: ["0%", "60%"],
        center: ["35%", "50%"],
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
    tooltip: {
        show:true,
        trigger: "item",
    },
    series: [{
        type: 'radar',
        symbolSize: 0,
        data: dataArr
    }]
};