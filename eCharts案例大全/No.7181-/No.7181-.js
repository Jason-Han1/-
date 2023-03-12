option = {
    backgroundColor:'#0a275e',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
    },
    radar: {
        indicator: [
            { text: '火警报警处理能力', max: 5},
            { text: '报警数量', max: 5},
            { text: '物联在线率', max: 5},
            { text: '物联设备数', max: 5},
            { text: '安全指数', max: 5}
        ],
        radius: 75,
        splitLine:{
            show:true,
            lineStyle: {
                color: '#2a3c84',                       // 分隔线颜色
                width: 2, 
                color:['#102261','#102261','#102261','#223876','#102261','#C0C0C0'] ,
                opacity:0.3						 // 分隔线线宽
            }
        },
        splitNumber: 5,
        splitArea: {                        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {                            // 分隔区域的样式设置。
                    color: ['#102261','#102261','#102261','#223876','#102261'],     // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                    
                }
        },
        axisLine:{
            lineStyle:{
                color:'#C0C0C0',
                width:1,
                opacity:0.3
            }
        },
        axisLabel:{
             rotate:30
        },
        name: {                             // (圆外的标签)雷达图每个指示器名称的配置项。
                formatter: '{value}',
                textStyle: {
                    fontSize: 10,
                    color: '#ffffff'
                }
            },
    },
    series: (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1,
                    color:'#0652d4'
                },
                areaStyle: {                // 单项区域填充样式
                    normal: {
                        color: 'rgba(47,110,234,0.03)'       // 填充的颜色。[ default: "#000" ]
                    }
                },
                data: [{
                    value: [1.4,2.3,3,3.4,4,8],
                    name: '评分'
                }]
            });
        }
        return series;
    })()
};