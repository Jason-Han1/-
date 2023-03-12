
var indicator = [{
        text: '识别',
        max: 5000,
    },
    {
        text: '图库',
        max: 5000
    },
    {
        text: '文章',
        max: 5000
    },
    {
        text: '鉴定',
        max: 5000
    },
    {
        text: '花记',
        max: 5000
    }
];
var dataArr = [{
        value: [4000, 1000, 3600,4000, 5000],
        
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#fff',
            
                }
            },
        },
        areaStyle: {
                normal: { // 单项区域填充样式
                    color:"rgba(148, 216, 193, 0.5)",
                    opacity: 1 // 区域透明度
                }
            }
    }
];
option = {
    color: "#fff",
    
    radar: {
        name: {
            textStyle: {
                color: '#4a4a4a',
                fontSize: 20
            },
        },
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false
        },
        axisLine: { //指向外圈文本的分隔线样式
            show:false
        },
        splitLine: {
            lineStyle: {
                color: '#fff', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
    },
    series: [{
        type: 'radar',
        symbolSize: 1,
        data: dataArr
    }]
};