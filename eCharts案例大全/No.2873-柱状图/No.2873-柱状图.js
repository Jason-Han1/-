var xData = ['长江所','中华园所','陆家所','科教园所','兵希所','锦溪所','花桥所','淀山湖所','正仪所','青阳所','吴淞江所','综保区所','周庄所','新镇所','巴城所']
var echartData = ['29','9','19','10','7','27','28','34','5','11','24','22','20','11','20']
option = {
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
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        axisLine: {
            lineStyle: {
                color: 'rgba(0, 61, 154, 0.38)',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#000',
                fontSize: 14
            },
        },
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "data": xData,
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 15
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0, 61, 154, 0.18)',
                type: 'dashed'
            }
        },
    }],
    "dataZoom": [{
        "show": true,
        "height": 10,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '160%',
        handleStyle:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff',
                },
                {
                    offset: 1,
                    color: '#F0F5FA',
                },
            ]),
            borderColor: '#D1DCED'
        },
       textStyle:{
        color:"#333",
        fontSize: 14,
        zlevel: 10
       },
       borderColor: 'rgba(209, 220, 237, 0.52)',
       backgroundColor: 'rgba(209, 220, 237, 0.52)'
    }, {
        "type": "inside",
        "show": true,
        "height": 10,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "存量人员分布",
            "type": "bar",
            "barMaxWidth": 26,
            "barGap": "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#9AB9FF',
                        },
                        {
                            offset: 1,
                            color: '#6789FF',
                        },
                    ]),
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#4970C8",
                            fontSize: 20,
                        },
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    },
                    barBorderRadius: [30, 30, 0, 0] //圆角大小
                },
            },
            "data": echartData,
        }
    ]
}