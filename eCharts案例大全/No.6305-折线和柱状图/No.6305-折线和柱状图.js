let xData = [];
let barData = [];
let lineData = [];
for (let i = 1; i < 13; i++) {
    xData.push(i + "月");
    barData.push(i * Math.random() * 100)
    lineData.push(i * Math.random() * 100)
}
option = {
    backgroundColor: "#344b58",
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "left": "10%",
        // "top":0,
        "bottom": "16%",
        "right": "2%",
        textStyle: {
            color: "#fff"
        }
    },
    "barWidth": 20,
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18
        },
        "data": xData,
    }],
    "yAxis": [{
        "name": '(件)',
        nameTextStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 16,
            align: 'right',
            padding: [3, 6, 5, 3]
        },
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20

        },
        "splitArea": {
            "show": false
        },

    }],
    "series": [{
        "name": "女",
        "type": "bar",
        "stack": "总量",
        "barMaxWidth": 35,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(35, 250, 187, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(35, 250, 187, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        "data": barData,
    }, {
        "name": "总数",
        "type": "line",
        symbolSize: 10,
        symbol: 'circle',
        "itemStyle": {
            "normal": {
                "color": 'rgba(65, 144, 249, 1)',
                "barBorderRadius": 0,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(53, 165, 248, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(112, 56, 255, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        "data": lineData
    }]
}