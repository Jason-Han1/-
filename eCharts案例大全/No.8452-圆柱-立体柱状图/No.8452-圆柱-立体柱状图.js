option = {
    "grid": {
        "top": "15%",
        "left": "15%",
        "bottom": "10%",
        "right": "10%",
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": ["本年话务总量", "本年人工话务量", "每万客户呼入量"],
        "axisTick": {
            "show":"false",
            "alignWithLabel": false
        },
      
        "axisLine": {
            "lineStyle": {
                "color": "#8cebff"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            // margin: 0
        }
    }],
    "yAxis": [
        {
        "show":false,
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            },
            // "formatter": "{value}%"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    },  {
                       show: false,
                       type: 'value',
                       min: 0,
                       max: 25,
                       interval: 5,
   
                   }],
    "series": [
    
        {
            type: 'bar',
            itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#caff71'
                                }, {
                                    offset: 1,
                                    color: '#37ff7b'
                                }]),
                         barBorderRadius:30
                    }
                },
            //silent: true,
            "barWidth": "60",
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            "data": [{
                "value": 2342,
               
            }, {
                "value": 1230,
               
            }, {
                "value": 425,
               
            }]

        },
        {
                    name: '电信实体渠道销量趋势',
                    type: 'line',
                   smooth: true,
                   symbolSize: 12,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color:"#efa956"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0.5, color: '#02dce4' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(8,20,59,0)' // 100% 处的颜色
                                }],
                            }

                        }

                    },
                    smooth: true,
                    tooltip: {
                        show: false,
                        formatter: function (params) {

                        }
                    },
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 20.3, 4.5, 60.3, 10.2, 90.3, 23.4, 23.0, 32.6]
                   }


    ]
}