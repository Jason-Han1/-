let max = 683;
    value = [654];

option = {
    
    backgroundColor: '#000A2A', //背景必须与symbal颜色一样
        title : {
        // text: '办公区域网络覆盖率',
        left:'19%',
        // top:'%',
       textStyle:{
           color:'rgba(255,255,255,.6)', fontSize:30,fontFamily: 'Microsoft YaHei'
       },
    },
    grid:{
        left:'20%',
        right:'20%',
        bottom:'62%',
    },
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
        "data": [1],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 10,
            "textStyle": {
                "color": 'rgba(255,255,255,.6)',
                "fontSize": 25
            }
        }
    },
    // {
    //     "type": "category",
    //     "inverse": true,
    //     // "data": ['20%','30%','40%','25%'],
    //     "axisLine": {
    //         "show": false
    //     },
    //     "axisTick": {
    //         "show": false
    //     },
    //     "axisLabel": {
    //         "margin": 10,
    //         "textStyle": {
    //             "color": "#00F0FF",
    //             "fontSize": 60
    //         }
    //     }
    // }
    ],
    "series": [{ //内
            type: 'bar',
            barWidth: 40,

            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x:0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#7b94dc' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#f3436e' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: value
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
                    color: '#00060e', //底色
                    borderWidth: 2,
                    borderColor: '#888c91'
                }
            },
            data: [max,max,max,max,max],
            z: 1,
        },
        { //分隔
            "type": "pictorialBar",
            itemStyle: {
                color: "#000A2A"
            },
            "symbolRepeat": "fixed",
            "symbolMargin": "6",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 48],
            "symbolPosition": "start",
            "symbolOffset": [
                0, -2
            ],
            "symbolBoundingData": max,
            "data": value
        }
    ]
};