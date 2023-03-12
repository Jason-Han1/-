
option = {
    backgroundColor: '#000731', //背景必须与symbal颜色一样
    "xAxis": {
        type: 'value',
        "max": 2000,
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
    grid:[{x:'20%'}],
    "yAxis": [{
        "type": "category",
        "inverse": false,
        "data": ['归档结束'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 40,

            "textStyle": {
                "color": "#fff",
                "fontSize": 16.25
            }
        }
    }],
    "series": [{ //内
        type: 'bar',
        barWidth: 45,
        label: {
            normal: {
                show: true,

                position: 'right',
                offset:[0,2],
                textStyle: {
                    color: '#fff',
                    fontSize:14
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
                    color: '#54FC3C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#07D935' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            } //底色
        },
        data: [1696]
    },
        { //框
            type: 'bar',
            barWidth: 50,
            barGap: '-105%',
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
                    color: '#191E30', //底色
                    //borderWidth: 1,
                    //borderColor: '#191E31'
                    //backgroundColor:'#000'
                }
            },
            data: [2000],
            z: 1,
        },
        { //分隔
            "type": "pictorialBar",
            itemStyle: {
                color: "#000"
            },
            "symbolRepeat": "fixed",
            "symbolMargin": "4",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [2, 48],
            "symbolPosition": "start",
            "symbolOffset": [
                0, 0
            ],
            "symbolBoundingData": 2000,
            "data": [1696]
        }
    ]
};