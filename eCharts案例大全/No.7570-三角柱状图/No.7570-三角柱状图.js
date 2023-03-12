data = [{name:"333", value: "333"},{name:"333", value: "333"},{name:"333", value: "333"},{name:"333", value: "333"},{name:"333", value: "333"},{name:"333", value: "333"},]

option = {
    width: 300,
    height: 200,
     yAxis: {
         "show": false,
     },
    series: [{
        type: 'pictorialBar',
        data: [500, 2600, 1300, 1300, 1250],
        barWidth: '100px',
        barCategoryGap: '-80%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.4,
                    color: 'rgba(1, 242, 224, 0.8)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(39, 81, 201, 0.8)' // 100% 处的颜色
                }], false),
            }
        },
        "markLine": {
            "silent": true,
            "symbol": "none",
            "label": {
                "position": "middle",
                "formatter": "{b}"
            },
            "data": [{
                "name": "测试X轴标线",
                "xAxis": 'LABOR',
                "lineStyle": {
                    "color": "#fff"
                },
                "label": {
                    "position": "end",
                    "color": "#949aa4"
                }
            }]
        }
    }],
    "xAxis":{
        "type": "category",
        "data": ["KYB MICE", "LABOR", "LCD PANELS", "POWER SUPPLIES INTERNAL", "SYSTEM BOARDS"],
        "axisLabel": {
            "show":true,
            "rotate": -45,
            "fontSize": 10,
            "verticalAlign": 'center'
        },
        "axisLine": {show: false},
        "axisTick": {show: false},
    },
    "textStyle": {
        "color": "#949aa4"
    }
}