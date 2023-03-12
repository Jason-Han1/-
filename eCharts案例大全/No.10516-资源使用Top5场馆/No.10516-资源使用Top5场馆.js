var maxData = 200;
var ydata = ["A2", "C3", "A1", "D3", "C1", ]; //y轴
var dataArr = [1000, 4002, 2500, 2081, 2586, ]; //色块
var whiteBar = [2889, 3117, 3419, 4021, 4254];
var balckBar = [4895, 4895, 4895, 4895, 4895];//背景色
var rich = { //富文本
    white: {
        color: '#2ad1d2',
        fontSize: 16,
        // padding: [0, 25]
    }
};
option = {
    "backgroundColor": "#101a3c",
    "grid": {
        "left": "10%",
        "top": 10,
        "bottom": 10
    },
    "tooltip": {
        "trigger": "item",
        "textStyle": {
            "fontSize": 12
        },
        "formatter": "{b0}:{c0}"
    },
    "xAxis": {
        "max": 5000,
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
            "data": ydata,
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "margin": 10,
                "textStyle": {
                    "color": "#2ad1d2",
                    "fontSize": 16
                }
            }
        },

    ],
    "series": [{ //内
            type: 'bar',
            barWidth: 40,
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    },
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
                        color: '#3279e2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#45b9e7' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: dataArr,
            z:100
        },
        { //外
            type: 'bar',
            barWidth: 40,
            barGap: '-100%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                   formatter: function(data) {
                        return '{white|' + whiteBar[data.dataIndex] + '}'
                    },
                    rich: rich
                }
            },
            legendHoverLink: false,
            silent: true,
            data: balckBar,
            itemStyle: {
                color: 'rgba(45, 46, 48,0.5)',
            },
            z:98
        },
          { //分隔
            "type": "pictorialBar",
            "animationDuration": 0,
            itemStyle: {
                color: "rgba(0,0,0,0.7)"
            },
            "symbolRepeat": "fixed",
            "symbolMargin": "8",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 40],
            "symbolPosition": "start",
            "symbolOffset": [
                0, 0
            ],
            // "symbolBoundingData": 5000,
            "data":balckBar,
            z:101
        }
    ]
};