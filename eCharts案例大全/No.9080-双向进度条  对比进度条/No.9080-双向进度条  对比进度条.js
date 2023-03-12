let max = 400;
value = [200, 300, 200];
value2 = [-200, -300, -300];

option = {
    backgroundColor: '#000A2A', //背景必须与symbal颜色一样
    title: [{
        text: '负损',
        textStyle: {
            fontWeight: 'normal',
            color:'#fff',
            fontSize:20
        },
        top: '24%',
        left: '26%'
    },{
        text: '高损',
        textStyle: {
            fontWeight: 'normal',
            color:'#fff',
            fontSize:20
        },
        top: '24%',
        left: '67%'
    },{
        text: '地市',
        textStyle: {
            fontWeight: 'normal',
            color:'#fff',
            fontSize:20
        },
        top: '24%',
        left: '47%'
    }],
    grid: [{
        top: '30%',
        bottom:'20%',
        width: '30%',
        left: '58%',
        gridIndex: 0,
    }, {
         top: '30%',
        bottom:'20%',
        left: '12%',
        width: '60%',
        gridIndex: 1,
    }, {
        top: '30%',
        bottom:'20%',
        left: '54%',
        gridIndex: 2,
    }],
    "xAxis": [{
        type: 'value',
        "max": max,
        gridIndex: 0,
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
    }, {
        type: 'value',
        "max": max,
        gridIndex: 1,
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
    }, {
        type: 'value',
        "max": max,
        gridIndex: 2,
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
    }],
    "yAxis": [{
        "type": "category",
        "inverse": true,
        gridIndex: 0,
        "data": ['一产', '二产', '三产'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            show: false,
            "margin": 10,
            "textStyle": {
                "color": "#fff",
                "fontSize": 20
            }
        }
    }, {
        "type": "category",
        "inverse": true,
        gridIndex: 1,
        "data": ['20%', '30%', '30%'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 10,
            "textStyle": {
                "color": "#00F0FF",
                "fontSize": 20
            }
        }
    }, {
        "type": "category",
        "inverse": true,
        gridIndex: 1,
        "data": ['一产', '二产', '三产'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            show: false,
            "margin": 10,
            "textStyle": {
                "color": "#fff",
                "fontSize": 40
            }
        }
    }, {
        "type": "category",
        "inverse": true,
        gridIndex: 0,
        "data": ['20%', '30%', '40%'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 10,
            "textStyle": {
                "color": "#00F0FF",
                "fontSize": 20
            }
        }
    }, {
        "type": "category",
        "inverse": true,
        gridIndex: 2,
        "data": ['一产', '二产', '三产'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            show: true,
            "margin": 10,
            "textStyle": {
                "color": "#fff",
                "fontSize": 20
            }
        }
    }, ],
    "series": [{ //内
            type: 'bar',
            barWidth: 24,
            gridIndex: 0,
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
                        color: '#0078FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00DEFF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: value
        },
        { //框
            type: 'bar',
            barWidth: 30,
            gridIndex: 0,
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
                    borderColor: '#004E77'
                }
            },
            data: [max, max, max],
            z: 1,
        },
        { //分隔
            "type": "pictorialBar",
            itemStyle: {
                color: "#000A2A"
            },
            gridIndex: 0,
            "symbolRepeat": "fixed",
            "symbolMargin": "10",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 25],
            "symbolPosition": "start",
            "symbolOffset": [
                0, -2
            ],
            "symbolBoundingData": max,
            "data": value
        },
        //第二
        { //内
            type: 'bar',
            barWidth: 24,
            xAxisIndex: 1,
            yAxisIndex: 1,
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
                        color: '#0078FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00DEFF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: value2
        },
        { //框
            type: 'bar',
            barWidth: 30,
            xAxisIndex: 1,
            yAxisIndex: 1,
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
                    borderColor: '#004E77'
                }
            },
            data: [-max, -max, -max],
            z: 1,
        },
        { //分隔
            "type": "pictorialBar",
            itemStyle: {
                color: "#000A2A"
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
            "symbolRepeat": "fixed",
            "symbolMargin": "10",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 25],
            "symbolPosition": "start",
            "symbolOffset": [
                0, -2
            ],
            "symbolBoundingData": -max,
            "data": value2
        }
    ]
};