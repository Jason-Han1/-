let max = 300,
    value = 200;

option = {
    backgroundColor: 'black', //背景必须与symbal颜色一样
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
        "data": [],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": -4,
            "textStyle": {
                "color": "#fff",
                "fontSize": 16.25
            }
        }
    }],
    "series": [{ //内
            type: 'bar',
            barWidth: 40,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function(e) {
                        return (e.value / max * 100).toFixed(2) + "%"
                    }
                }
            },
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#449fee' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: [value]
        },
        { //框
            type: 'bar',
            barWidth: 50,
            barGap: '-110%',
            label: {
                normal: {
                    show: false,

                    position: 'right',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)', //底色
                    borderWidth: 2,
                    borderColor: 'grey'
                }
            },
            data: [max],
            z: 1,
        },
        { //分隔
            "type": "pictorialBar",
            itemStyle: {
                color: "#000"
            },
            "symbolRepeat": "fixed",
            "symbolMargin": "10",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 48],
            "symbolPosition": "start",
            "symbolOffset": [
                0, -2
            ],
            "symbolBoundingData": max,
            "data": [value]
        }
    ]
};