var ydata = ["A2"]; //y轴
var value = 50;
var balckBar = [50]; //背景色
var balckArr = [100];
var rich = {
    white: {
        backgroundColor: {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAZCAYAAAB6v90+AAAA2klEQVRYhe2YMUoDQRhG32zAwsKkyRGCHmE9hE3uuSkNSqogaOEBcgzXDVg+i2xhEdKYn2GWefDX33vlDCjoCu3QHrXQ68eGFUpC74EPYME0+ALahHbAOrfNldkktAfucptcmWNCzW0RQZNbIIoaVho1rDRqWGnUsNKoYaUx6bDv3BIBHBtgl9sigNeEPgDvTOsF/dgAB6AFNsCQVel/DJwaWuDA+JkTcTfo9sLnS4fOwvYDw0Bv0f2ZqJcxPG47OAx0jn7+iXobg0N306kunCXwDPwAT0AfPfgLAvYRIEVmrDQAAAAASUVORK5CYII='
        },
        padding: [5, 0, 5, 5],
        align:'center',
        fontSize: 16,
        // lineHeight:40
        // height:20
    },
};
option = {
    "backgroundColor": "rgba(0,0,0,1)",
    "grid": {
        "left": "10%",
        "top": 10,
        "bottom": 10
    },
    tooltip: {
        show: false
    },
    "xAxis": {
        "max": 100,
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
                show: false,
            }
        },

    ],
    "series": [{ //内
            type: 'bar',
            barWidth: 60,
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
                        color: 'rgba(156,224,99,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(12,245,243,1)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }, //底色

            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    },
                    position: 'right',
                    formatter: function(data) {
                        return '{white|' +  value + '%' + '}';
                    },
                    verticalAlign:'bottom',
                    rich: rich
                }
            },
            data: [value],
            z: 100
        },
        { //外
            type: 'bar',
            barWidth: 61,
            barGap: '-100%',
            label: {
                normal: {
                    show: false,
                }
            },
            legendHoverLink: false,
            silent: true,
            data: [100],
            itemStyle: {
                color: 'rgba(45, 46, 48,0.5)',
                borderWidth: 1,
                borderColor: '#fff'
            },
            z: 98
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
            "symbolSize": [4, 60],
            "symbolPosition": "start",
            "symbolOffset": [
                0, 0
            ],
            // "symbolBoundingData": 5000,
            "data": balckBar,
            z: 101
        }
    ]
};