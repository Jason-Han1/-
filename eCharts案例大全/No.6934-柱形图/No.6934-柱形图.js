var deviceData = [
   ["机柜", "服务器"],[22,0]
    ];
var dataPie = [{name:"机柜",value:22},{name:"服务器",value:0}];
    var dd = [22,1];
var option = {
    backgroundColor: '#061326',
        title: {
            text: '',
            textStyle: {
                fontSize: 12,
                fontWeight: 'normal',
                color: '#65aaf1' //标题颜色
            },
            left: '2%',

        },
        color: ['#004558'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b} :{c}"
        },
        /*grid: {
            left: '5px',
            right: '20px',
            bottom: '5px',
            top: '50px',
            containLabel: true,

        },*/
        
        /*xAxis: [{
            type: 'category',
            data: deviceData[0],
            axisTick: {
                alignWithLabel: true,
                show: false,
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                interval: 0, // 解决x轴名称过长问题
                textStyle: {
                    color: '#8fd5f3'
                }
            }
        }],*/
        xAxis: [{
            type: "category",
            data: deviceData[0],
            axisTick: {
                alignWithLabel: true
            },
            nameTextStyle: {
                color: "#82b0ec"
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#82b0ec"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#8fd5f3"
                },
                margin: 30
            }
        }],
        /*yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#8fd5f3'
                }
            },
            splitLine: { //保留网格线
                show: true,
                lineStyle: { //y轴网格线设置
                    color: '#0f3d65',
                    width: 1,
                    type: 'solid'
                }
            },
        },*/
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
            // "barWidth": "0",
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    // "formatter": "{c}%"
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#34DCFF'
                }
            },
            color: "#1abcf1",
            data: deviceData[1]
            
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            // "barWidth": "20",
            z: 12,
            "color": "#2DB1EF",
            "data": dd
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 15],
            symbolOffset: [0, 12],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#2EA9E5',
                    borderType: 'solid',
                    borderWidth: 1
                }
            },
            data: dd
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#19465D',
                    borderType: 'solid',
                    borderWidth: 2
                }
            },
            data: dd
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
                            color: "#087cf9"
                        },
                        {
                            offset: 1,
                            color: "#09408a"
                        }
                    ]),
                    opacity: .8
                },
            },
            data: deviceData[1]
        }
    ]
        /*series: [
            {
                name: '动环资产',
                type: 'bar',
                barWidth: '30%', //去掉这个则会显示柱状阴影
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                offset: 0,
                                color: '#01abff'
                            },
                                {
                                    offset: 0.5,
                                    color: '#0495fc'
                                },
                                {
                                    offset: 1,
                                    color: '#087cf9'
                                }
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                offset: 0,
                                color: '#01abff'
                            },
                                {
                                    offset: 0.5,
                                    color: '#0495fc'
                                },
                                {
                                    offset: 1,
                                    color: '#087cf9'
                                }
                            ]
                        )
                    }
                },
                data: deviceData[1]
            },
        ]*/
    };
    myChart.setOption(option);