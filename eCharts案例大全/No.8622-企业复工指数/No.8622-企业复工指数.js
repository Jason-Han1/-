var uploadedDataURL = "/asset/get/s/data-1582530269943-5jSTf7pF.json";
myChart.showLoading();


$(`<div style='z-index:100000000;position:absolute; top:70px;border:0px solid red;'>
<div style='font-size:12px;'>2月24日&nbsp;|&nbsp;<span style='color:red;'>59.30↑</span></div>
<div style='font-size:12px;'>2月23日&nbsp;|&nbsp;<span style='color:black;'>57.96</span></div>
</div>`).appendTo(
    $('#chart-panel')
);
$.get('/asset/get/s/data-1550829800350-HUeAZfiDq.json', function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('DZ', geoJson);

    myChart.setOption(option = {
        title: {
            text: '企业复工指数',
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var res = params.name + '<br/>';
                var myseries = option.series;
                for (var i = 0; i < myseries.length; i++) {
                    for (var j = 0; j < myseries[i].data.length; j++) {
                        if (myseries[i].data[j].name == params.name) {
                            res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>';
                        }
                    }
                }
                return res;
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 0,
            max: 1000,
            right: 26,
            bottom: 40,
            showLabel: true,
            borderColor:'black',
            borderWidth:1,
            
            pieces: [{
                gt: 65,
                lte: 100,
                label: "65-100",
                color: "#6D3109",
                 
            }, {
                gte: 60,
                lte: 65,
                label: "60-65",
                color: "#9B460D"
            }, {
                gte: 55,
                lt: 60,
                label: "55-60",
                color: "#D46112"
            }, {
                gt: 50,
                lt: 55,
                label: "50-55",
                color: "#F0904E"
            }, {
                gt: 45,
                lt: 50,
                label: "45-50",
                color: "#F5B893"
            }, {
                gt: 40,
                lt: 45,
                label: "40-45",
                color: "#FCE2D4"
            }, {
                gt: 30,
                lt: 40,
                label: "30-40",
                color: "#FDEFE7"
            }],
            show: !0
        },
        series: [{
            name: '企业电力复工指数',
            type: 'map',
            roam: true,
            mapType: 'DZ', // 自定义扩展图表类型
            // itemStyle: {
            //     normal: {
            //       label: {
            //             show: true
            //         }
            //     },
            //     emphasis: {
            //         label: {
            //             show: true
            //         }
            //     }
            // },
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    // shadowColor: 'rgba(63, 218, 255, 0.5)',
                    // shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            },
            data: [{
                    name: '乐陵市',
                    value: 58.50,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '禹城市',
                    value: 67.77,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '陵城区',
                    value: 64.13,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '德城区',
                    value: 55.45,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '平原县',
                    value: 94.45,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '临邑县',
                    value: 61.55,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '齐河县',
                    value: 52.74,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↓}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'green',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '庆云县',
                    value: 49.34,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '夏津县',
                    value: 54.91,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '武城县',
                    value: 41.99,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                },
                {
                    name: '宁津县',
                    value: 52.65,
                     label: {
                        
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return '{a|' + params.name+'}'+'\n' + '{b|' + params.value+ '}'+ '{c|↑}';   //地图上展示文字 + 数值
                                      
                                    },
                            
                            rich: {
                                a: {
                                    color: '#1A6BE6'
                                },
                                b: {
                                    color: 'black',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 12,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                },
                                c: {
                                    color: 'red',
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    borderColor: '#f00',
                                    textAlign: 'center',
                                    padding: 2
                                }
                            }
                                    
                                }
                            }
                }
            ],
        }]
    });
});