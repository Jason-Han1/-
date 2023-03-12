var data = [{
        "time": 2015,
        "data": [{
                "name": "美国",
                "value": [18.22, 24.29, "美国"]
            },
            {
                "name": "中国",
                "value": [11.02, 14.69, "中国"]
            },
            {
                "name": "日本",
                "value": [4.39, 5.85, "日本"]
            },
            {
                "name": "Germany",
                "value": [3.38, 4.51, "德国"]
            },
            {
                "name": "France",
                "value": [2.9, 3.87, "英国"]
            },
            {
                "name": "United Kingdom",
                "value": [2.44, 3.25, "法国"]
            },
            {
                "name": "Italy",
                "value": [2.1, 2.8, "印度"]
            },
            {
                "name": "China",
                "value": [1.83, 2.44, "意大利"]
            },
            {
                "name": "Canada",
                "value": [1.55, 2.07, "加拿大"]
            },
            {
                "name": "India",
                "value": [1.36, 1.81, "俄罗斯"]
            }
        ]
    },
    {
        "time": 2016,
        "data": [{
                "name": "United States of America",
                "value": [18.03, 23.69, "美国"]
            },
            {
                "name": "Japan",
                "value": [11.23, 14.45, "中国"]
            },
            {
                "name": "Russia",
                "value": [4.38, 5.76, "日本"]
            },
            {
                "name": "Germany",
                "value": [3.36, 4.42, "德国"]
            },
            {
                "name": "France",
                "value": [2.86, 3.76, "英国"]
            },
            {
                "name": "United Kingdom",
                "value": [2.42, 3.18, "法国"]
            },
            {
                "name": "Italy",
                "value": [1.82, 2.39, "意大利"]
            },
            {
                "name": "China",
                "value": [1.55, 2.04, "加拿大"]
            },
            {
                "name": "Canada",
                "value": [1.33, 1.75, "俄罗斯"]
            },
            {
                "name": "Mexico",
                "value": [1.05, 1.38, "墨西哥"]
            }
        ]
    },
    {
        "time": 2017,
        "data": [{
                "name": "United States of America",
                "value": [19.56, 24.18, "美国"]
            },
            {
                "name": "Japan",
                "value": [13.17, 16.28, "中国"]
            },
            {
                "name": "Germany",
                "value": [4.34, 5.37, "日本"]
            },
            {
                "name": "France",
                "value": [3.59, 4.44, "德国"]
            },
            {
                "name": "Italy",
                "value": [3.23, 3.99, "英国"]
            },
            {
                "name": "United Kingdom",
                "value": [2.59, 3.20, "法国"]
            },
            {
                "name": "Russia",
                "value": [1.93, 2.39, "意大利"]
            },
            {
                "name": "Canada",
                "value": [1.68, 2.08, "加拿大"]
            },
            {
                "name": "Spain",
                "value": [1.31, 1.62, "俄罗斯"]
            },
            {
                "name": "China",
                "value": [1.2, 1.6, "西班牙"]
            }
        ]
    },
    {
        "time": 2018,
        "data": [{
                "name": "United States of America",
                "value": [20.51, 23.91, "美国"]
            },
            {
                "name": "Japan",
                "value": [13.46, 15.69, "中国"]
            },
            {
                "name": "Germany",
                "value": [5.07, 5.91, "日本"]
            },
            {
                "name": "United Kingdom",
                "value": [4.03, 4.7, "德国"]
            },
            {
                "name": "France",
                "value": [2.81, 3.28, "英国"]
            },
            {
                "name": "China",
                "value": [2.79, 3.25, "法国"]
            },
            {
                "name": "Italy",
                "value": [2.09, 2.44, "意大利"]
            },
            {
                "name": "Canada",
                "value": [1.73, 2.02, "加拿大"]
            },
            {
                "name": "Brazil",
                "value": [1.58, 1.84, "俄罗斯"]
            },
            {
                "name": "Mexico",
                "value": [1.25, 1.46, "墨西哥"]
            }
        ]
    },
    {
        "time": 2019,
        "data": [{
                "name": "United States of America",
                "value": [21.41, 24.61, "美国"]
            },
            {
                "name": "China",
                "value": [15.54, 17.86, "中国"]
            },
            {
                "name": "Japan",
                "value": [5.36, 6.16, "日本"]
            },
            {
                "name": "Germany",
                "value": [4.42, 5.08, "德国"]
            },
            {
                "name": "France",
                "value": [3.16, 3.63, "印度"]
            },
            {
                "name": "United Kingdom",
                "value": [3.06, 3.52, "法国"]
            },
            {
                "name": "Brazil",
                "value": [3.02, 3.47, "英国"]
            },
            {
                "name": "Italy",
                "value": [2.26, 2.6, "意大利"]
            },
            {
                "name": "India",
                "value": [2.26, 2.6, "巴西"]
            },
            {
                "name": "Canada",
                "value": [1.91, 2.2, "加拿大"]
            }
        ]
    }
]



var option = {
    baseOption: {
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut',
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 5000,
            left: null,
            right: 5,
            top: 20,
            bottom: 20,
            width: 46,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 1
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: data.map(function(ele) {
                return ele.time
            })
        },
        backgroundColor: '#00809F',
        title: {
            text: '世界各国GDP总量前十位排名及占比',
            subtext: 'GDP单位:万亿美元',
            left: 'center',
            top: 'top',
            textStyle: {
                fontSize: 25,
                color: 'rgba(255,255,255, 0.9)'
            }
        },
        tooltip: {
            formatter: function(params) {
                if ('value' in params.data) {
                    return params.data.value[2] + ': ' + params.data.value[0];
                }
            }
        },
        grid: {
            left: '12%',
            right: '45%',
            top: '70%',
            bottom: 20
        },
        xAxis: {},
        yAxis: {},
        series: [{
            id: 'map',
            type: 'map',
            mapType: 'world',
            top: '10%',
            bottom: '25%',
            left: 10,
            itemStyle: {
                normal: {
                    areaColor: '#5C5CAA',
                    borderColor: '#FF6C48'
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    areaColor: 'rgba(255,255,255, 0.5)'
                }
            },
            data: []
        }, {
            id: 'bar',
            type: 'bar',
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            data: []
        }, {
            id: 'pie',
            type: 'pie',
            radius: ['8%', '20%'],
            center: ['75%', '85%'],
            roseType: 'radius',
            tooltip: {
                formatter: '{b} {d}%'
            },
            data: [],
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,0,0,0.3)',
                    borderSize: 1
                }
            }
        }]
    },
    options: []
}

for (var i = 0; i < data.length; i++) {
    //计算其余国家GDP
    var restPercent = 100;
    var restValue = 0;
    data[i].data.forEach(function(ele) {
        restPercent = restPercent - ele.value[1];
    });
    restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
    console.log(restPercent);
    console.log(restValue);
    option.options.push({
        visualMap: [{
            dimension: 0,
            left: 10,
            itemWidth: 12,
            min: data[i].data[9].value[0],
            max: data[i].data[0].value[0],
            text: ['High', 'Low'],
            textStyle: {
                color: '#ddd'
            },
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered', 'red']
            }
        }],
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                show: false,
            }
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#ddd'
                }
            },
            data: data[i].data.map(function(ele) {
                return ele.value[2]
            }).reverse()
        },
        series: [{
            id: 'map',
            data: data[i].data
        }, {
            id: 'bar',
            data: data[i].data.map(function(ele) {
                return ele.value[0]
            }).reverse(function(a, b) {
                return a > b
            })
        }, {
            id: 'pie',
            data: data[i].data.map(function(ele) {
                return {
                    name: ele.value[2],
                    value: ele.value
                }
            }).concat({
                name: '其他国家',
                value: restValue
            }),
        }]
    })
}

