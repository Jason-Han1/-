let list = [{
                    date: "6号",
                    noise: 20,
                    windSpeed:21,
                    weather:25,
                    tem:10,
                    hum:8,
                    PM:14
                    
                },
                {
                    date: "7号",
                     noise: 22,
                    windSpeed:18,
                    weather:26,
                    tem:17,
                    hum:11,
                    PM:9
                },
                {
                    date: "8号",
                     noise: 17,
                    windSpeed:24,
                    weather:21,
                    tem:14,
                    hum:15,
                    PM:21
                },
                {
                    date: "9号",
                     noise: 20,
                    windSpeed:20,
                    weather:23,
                    tem:10,
                    hum:8,
                    PM:14
                },
                {
                    date: "10号",
                     noise: 20,
                    windSpeed:18,
                    weather:21,
                    tem:10,
                    hum:8,
                    PM:14
                },
                {
                    date: "11号",
                     noise: 20,
                    windSpeed:25,
                    weather:22,
                    tem:10,
                    hum:8,
                    PM:14
                },
                {
                    date: "12号",
                     noise: 20,
                    windSpeed:23,
                    weather:19,
                    tem:10,
                    hum:8,
                    PM:14
                }
            ];
            let dateList = [];
            let noiseYdata = [];
            let windYdata = [];
            let weatherYdata = [];
            let temYdata = [];
            let humYdata = [];
            let PMYdata = [];
            let lengendData = ['噪音','风速','天气','温度','湿度','颗粒悬浮物'];
            list.forEach(function(item,index){
                dateList.push(item.date);
                noiseYdata.push(item.noise);
                windYdata.push(item.windSpeed);
                 weatherYdata.push(item.weather);
                 temYdata.push(item.tem);
                 humYdata.push(item.hum);
                 PMYdata.push(item.PM);
            })
         
            option = {
                color: ["#2ea5c3", "#e08f68"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    },

                    formatter: function(params) {
                        var tiplabel =
                            params[0].name +
                            "<br/>" +
                            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                            params[0].color.colorStops[0].color +
                            '"></span>' +
                            params[0].seriesName +
                            ":" +
                            params[0].value +
                            "<br/>" +
                            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                            params[1].color.colorStops[0].color +
                            '"></span>' +
                            params[1].seriesName +
                            ":" +
                            params[1].value+
                             "<br/>" +
                            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                            params[2].color.colorStops[0].color +
                            '"></span>' +
                            params[2].seriesName +
                            ":" +
                            params[2].value+
                             "<br/>" +
                            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                            params[3].color.colorStops[0].color +
                            '"></span>' +
                            params[3].seriesName +
                            ":" +
                            params[3].value+
                             "<br/>" +
                            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                            params[4].color.colorStops[0].color +
                            '"></span>' +
                            params[4].seriesName +
                            ":" +
                            params[4].value+
                              "<br/>" +
                            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                            params[5].color.colorStops[0].color +
                            '"></span>' +
                            params[5].seriesName +
                            ":" +
                            params[5].value
                        return tiplabel;
                    }
                },
                legend: {
                    data: lengendData,
                    left: "center",
                    icon: "circle",
                    textStyle: {
                        color: "#666"
                    }
                },
                grid: {
                    //top:80,
                    left: 10,
                    bottom: 5,
                    right: 10,
                    containLabel: true
                },
                xAxis: {
                    type: "category",
                    data: dateList,
                    axisLabel: {
                        tooltip: {
                            show: true
                        },
                        inside: false,
                        textStyle: {
                            fontSize: 14
                        },
                        interval: 0,
                        color: "#8F8F8F"
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                           color: "#8F8F8F"
                        }
                    }
                },
                yAxis: [{
                    type: "value",
                    name:'(次)',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#CDD4D9",
                            type:'dashed',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show:true,
                        lineStyle: {
                            color: "#8F8F8F"
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: function(value) {
                            return value;
                        },
                        color: "#8f8f8f"
                    }
                }],
                series: [{
                        name: lengendData[0],
                        barCategoryGap: "30%",
                        
                        itemStyle: {
                            
                            normal: {
                                borderRadius:[20,20,0,0],
                                label: {
                                    show: false,
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#FFEFDB"
                                    },
                                    {
                                        offset: 1,
                                        color: "#FFC67E"
                                    }
                                ]),
                            }
                        },
                        type: "bar",
                        data: noiseYdata
                    },
                    {
                        name: lengendData[1],
                        itemStyle: {
                            normal: {
                                borderRadius:[20,20,0,0],
                                label: {
                                    show: false,
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#8BE4FF"
                                    },
                                    {
                                        offset: 1,
                                        color: "#20A8D1"
                                    }
                                ])
                            }
                        },
                        type: "bar",
                        data: windYdata
                    },
                     {
                        name: lengendData[2],
                        itemStyle: {
                           
                            normal: {
                                 borderRadius:[20,20,0,0],
                                label: {
                                    show: false,
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#E2C5FD"
                                    },
                                    {
                                        offset: 1,
                                        color: "#A55DEB"
                                    }
                                ])
                            }
                        },
                        type: "bar",
                        data: weatherYdata
                    },
                     {
                        name: lengendData[3],
                        itemStyle: {
                            normal: {
                                borderRadius:[20,20,0,0],
                                label: {
                                    show: false,
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#FFD9C6"
                                    },
                                    {
                                        offset: 1,
                                        color: "#FF945E"
                                    }
                                ]),
                            }
                        },
                        type: "bar",
                        data: temYdata
                    },
                     {
                        name: lengendData[4],
                        itemStyle: {
                            normal: {
                                borderRadius:[20,20,0,0],
                                label: {
                                    show: false
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#B9D6FF"
                                    },
                                    {
                                        offset: 1,
                                        color: "#2765D1"
                                    }
                                ])
                            }
                        },
                        type: "bar",
                        data: humYdata
                    },
                     {
                        name: lengendData[5],
                        itemStyle: {
                            normal: {
                                borderRadius:[20,20,0,0],
                                label: {
                                    show: false,
                                },
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#C8FFE3"
                                    },
                                    {
                                        offset: 1,
                                        color: "#61D79B"
                                    }
                                ])
                            }
                        },
                        type: "bar",
                        data: PMYdata
                    }
                ]
            };