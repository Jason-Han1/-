let xData = [];
let barData = [];
let lineData = [];
for (let i = 1; i < 13; i++) {
    xData.push(i + "月");
    barData.push(parseInt(i * Math.random() * 100))
    lineData.push(parseInt(i * Math.random() * 100))
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
        "name": "数量",
        "type": "bar",
        "stack": "总量",
        barWidth:17,
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
                        color: 'rgba(35, 237, 225, 0.8)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(35, 206, 222, 0.49)' // 0% 处的颜色
                    },{
                        offset: 1,
                        color: 'rgba(35, 206, 222, 0.1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor:'rgba(0, 170, 255, 0.9)',
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 10
            }
        },
        "data": barData,
        label:{
            show:true,
            fontSize:18,
            color:'#ffffff',
            position:'top'
        }
    }, {
        "name": "办结率",
        "type": "line",
        symbolSize: 1,
        symbol: 'circle',
        label:{
            show:true,
            fontSize:18,
            color:'#ffffff',
            formatter:(params)=>{
                return params.value/10 + '%' //随便写的值
            }
        
        },
        "itemStyle": {
            "normal": {
                "color": 'rgba(255, 186, 115, 1)',
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: 'rgba(255, 186, 115, 1)'
            }
        },
        "data": lineData
    }]
}