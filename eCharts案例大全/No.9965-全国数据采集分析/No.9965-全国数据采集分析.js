option = {
    backgroundColor: '#000',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross"
        },
        formatter:function(params){
            if(params.length>0){
                const name = params[0].name;
                // marker+seriesName + others.value, value
            }
        }
    },
    "title": {
        "text": "全国数据采集分析",
        "textStyle": {
            "color": "#fff",
            "fontSize": 18
        },
        "left": -5
    },
    "legend": {
        "icon": "circle",
        "right": 0,
        "textStyle": {
            "color": "#fff"
        }
    },
    "yAxis": {
        "type": "value",
        "splitLine": {
            "lineStyle": {
                "color": "#ffffff4d"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "color": "#ffffff99"
        },
        axisPointer: {
            label: {
                backgroundColor: '#d14a61',
                formatter: function(params) {
                    return '1 %'
                },
            }
        },
    },
    "grid": {
        "top": 40,
        "left": 7,
        "right": 1,
        "bottom": 5,
        "containLabel": true
    },
    "series": [{
        "type": "line",
        "color": "#FF6D4B",
        "data": [0.24356433159373744, 0.2146602769971899, 0.21001856684062625, 0.20999347651545563, 0.10935618225612204, 0.012407165796868727],
        "zlevel": 2,
        "name": "中国"
    }],
    "xAxis": {
        "axisTick": {
            "alignWithLabel": true
        },
        "axisLine": {
            "lineStyle": {
                "color": "#fff9"
            }
        },
        "axisLabel": {
            "color": "#ffffffd9",
            "interval": 0
        },
        axisPointer: {
            label: {
                backgroundColor: '#5793f3',
            }
        },
        "type": "category",
        "data": ["天基", "地基", "地下", "水下", "室内定位", "空基"]
    }
}