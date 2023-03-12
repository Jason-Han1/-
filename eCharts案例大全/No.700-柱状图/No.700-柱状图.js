xData = ["资产投资", "股权投资", "金融产品投资", "其他投资"];
yData = [33.33, 66.67, 0, 0];
option = {
    backgroundColor: '#061326',
    "grid": {
        "top": "25%",
        "left": "-5%",
        "bottom": "5%",
        "right": "5%",
        "containLabel": true
    },
    tooltip: {
        show: true
    },
    animation: false,
    "xAxis": [{
        "type": "category",
        "data": xData,
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#82b0ec"
        },
        "axisLine": {
            show: false,
            "lineStyle": {
                "color": "#82b0ec"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            margin: 30
        }
    }],
    "yAxis": [{
        show: false,
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}%",
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#016662'
                }
            },
            color: "#016662",
            data: yData
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            // "barWidth": "20",
            z: 12,
            "color": "#184766",
            "data": yData
        },
       
       
        {
            type: 'bar',
            //silent: true,
            "barWidth": "40",
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                            offset: 0,
                            color: "#016662"
                        },
                        {
                            offset: 1,
                            color: "#184766"
                        }
                    ]),
                    opacity: .8
                },
            },
            data: yData
        }
    ]
};