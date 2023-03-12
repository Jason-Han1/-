var data = {
    "time": "2018-12-26 13:20:01",
    "cityInfo": {
        "city": "武汉市",
        "cityId": "101200101",
        "parent": "湖北",
        "updateTime": "13:04"
    },
    "date": "20181226",
    "message": "Success !",
    "status": 200,
    "data": {
        "shidu": "95%",
        "pm25": 63.0,
        "pm10": 70.0,
        "quality": "良",
        "wendu": "4",
        "ganmao": "极少数敏感人群应减少户外活动",
        "yesterday": {
            "date": "25",
            "sunrise": "07:17",
            "high": "高温 7.0℃",
            "low": "低温 5.0℃",
            "sunset": "17:27",
            "aqi": 98.0,
            "ymd": "2018-12-25",
            "week": "星期二",
            "fx": "北风",
            "fl": "<3级",
            "type": "小雨",
            "notice": "雨虽小，注意保暖别感冒"
        },
        "forecast": [{
            "date": "26",
            "sunrise": "07:18",
            "high": "高温 7.0℃",
            "low": "低温 4.0℃",
            "sunset": "17:28",
            "aqi": 54.0,
            "ymd": "2018-12-26",
            "week": "星期三",
            "fx": "北风",
            "fl": "4-5级",
            "type": "小雨",
            "notice": "雨虽小，注意保暖别感冒"
        }, {
            "date": "27",
            "sunrise": "07:18",
            "high": "高温 5.0℃",
            "low": "低温 0.0℃",
            "sunset": "17:29",
            "aqi": 43.0,
            "ymd": "2018-12-27",
            "week": "星期四",
            "fx": "北风",
            "fl": "4-5级",
            "type": "小雨",
            "notice": "雨虽小，注意保暖别感冒"
        }, {
            "date": "28",
            "sunrise": "07:18",
            "high": "高温 2.0℃",
            "low": "低温 -2.0℃",
            "sunset": "17:29",
            "aqi": 40.0,
            "ymd": "2018-12-28",
            "week": "星期五",
            "fx": "东北风",
            "fl": "4-5级",
            "type": "阴",
            "notice": "不要被阴云遮挡住好心情"
        }, {
            "date": "29",
            "sunrise": "07:19",
            "high": "高温 1.0℃",
            "low": "低温 -2.0℃",
            "sunset": "17:30",
            "aqi": 67.0,
            "ymd": "2018-12-29",
            "week": "星期六",
            "fx": "北风",
            "fl": "3-4级",
            "type": "阴",
            "notice": "不要被阴云遮挡住好心情"
        }, {
            "date": "30",
            "sunrise": "07:19",
            "high": "高温 1.0℃",
            "low": "低温 -5.0℃",
            "sunset": "17:31",
            "aqi": 110.0,
            "ymd": "2018-12-30",
            "week": "星期日",
            "fx": "北风",
            "fl": "3-4级",
            "type": "多云",
            "notice": "阴晴之间，谨防紫外线侵扰"
        }]
    }
};

//console.log(data);
//console.log(data.data.forecast);
//console.log(data.data.forecast.map(x=>x.week));
console.log(data.data.forecast.map(x=>x.low));
var h = data.data.forecast.map(x=>parseInt(x.low.substr(3)));
console.log(h);

//parseFloat("07:18".replace(/:/g,'.'))

option = {
    backgroundColor: '#424956',
    title: {
        text: data.cityInfo.city +'天气预报',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 16,
        itemGap: 13,
        data: ['空气质量', '高温', '低温', '日出', '日落'],
        right: '4%',
        textStyle: {
            fontSize: 16,
            color: '#292f39'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero:false,
            lineStyle: {
                color: '#57617B'
            }
        },
        data: data.data.forecast.map(x=>x.week)
    }],
    yAxis: [{
        type: 'value',
        //min: -10,
        max: 40,
        name: '单位（℃）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },{
            type: 'value',//'time',
            name: '单位（PPI）',
            //max: 500,
            //min: 0,
            splitLine: {
                show: false
            }
        }],
    series: [{
        name: '空气质量',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                origin:'end',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(235,235,21, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(16,97,204, 0.8)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(235,235,21,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data:data.data.forecast.map(x=>x.aqi)
    }, {
        name: '高温',
        type: 'line',
        //stack: '温度',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                origin:'start',//填充x轴到线段的区域，非y=0到线的区域
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(205,52,42, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(235,235,21, 0)'
                }], false),
                //shadowColor: 'rgba(0, 0, 0, 0.5)',
                //shadowBlur: 10
            },
        },
        itemStyle: {
                normal: {
                     
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(205,52,42,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(235,235,21,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data:data.data.forecast.map(x=>parseInt(x.high.substr(3)))
    },{
        name: '低温',
        type: 'line',
        //stack: '温度',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                origin:'start',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#424956'//填充背景色//'rgba(205,52,42, 1)'
                }, {
                    offset: 1,
                    color: '#424956'//'rgba(235,235,21, 0)'
                }], false),
                //shadowColor: 'rgba(0, 0, 0, 0.5)',
                //shadowBlur: 10
            },
        },
        itemStyle: {
                normal: {
                     
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(205,52,42,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(235,235,21,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data:data.data.forecast.map(x=>parseInt(x.low.substr(3)))
    }]
};