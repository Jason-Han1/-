let name = "直接投资",
    max = 300,
    value = 200;

option = {
    backgroundColor: 'black',
    "xAxis": {
        type: 'value',
        "max": max,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [{
        "type": "category",
        "inverse": false,
        "data": [name],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            show: true,
            "margin": 0,
            "textStyle": {
                "color": "#6ef3fc",
                "fontSize": 16.25
            }
        }
    }],
    "series": [{ //分隔
        "type": "pictorialBar",
        label: {
            show: true,
            position: 'insideRight',
            color:'#ddc95a',
            formatter:"{c}万元",
            fontSize:20
        },
        itemStyle: {
            color: "#6ef3fc"
        },
        "symbolRepeat": "fixed",
        "symbolMargin": "4",
        symbol: 'rect',
        "symbolClip": true,
        "symbolSize": [10, 30],
        "symbolPosition": "start",
        "symbolOffset": [
            10, 0
        ],
        "symbolBoundingData": max,
        "data": [value]
    }]
};