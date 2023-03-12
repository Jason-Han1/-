// 问题？？？？？？？？
// 使用3x版本点击底部的legend状态会把当前状态的线条隐藏了
// 但是使用4x版本就不行  会全部隐藏
// 请教下各位， 如何用4X版本还是实现隐藏当前点以及状态线功能


var geoList = [
        { name:'石嘴山', longitude: 106.333447, latitude: 38.981052, value: 1, status: "到报" },
        { name:'银川',longitude: 106.204666, latitude:38.491113, value: 1, status: "缺报" },
        { name:'吴忠',longitude: 106.241461, latitude:38.070551, value: 1, status: "到报" },
        { name:'中卫',longitude: 105.229609, latitude:37.501102, value: 1, status: "缺报" },
        { name:'固原',longitude: 106.223063, latitude:36.05075, value: 1, status: "故障" }
    ]    
    var series = [];
    
    var convertData = function (data, status) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = [106.223063,37.427776];
            var toCoord = [dataItem.longitude, dataItem.latitude];
            if (dataItem.status === status){
                if (fromCoord && toCoord) {
                    res.push({
                        toName: dataItem.name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
        }
        return res;
    };
    var convertDataStatus = function (data, status) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var toCoord = [dataItem.longitude, dataItem.latitude];
            if (dataItem.status === status){
                if (toCoord) {
                    res.push({
                        name: dataItem.name,
                        value: toCoord.concat(dataItem.value)
                    });
                }
            }
        }
        return res;
    };
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    [['银川', geoList]].forEach(function (item, i) {
        series.push({
            name: "到报拖尾",
            type: 'lines',
            zlevel: 1,
            silent: true,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#0f0',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: "#fff",
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1], "到报")
        }, {
            name: "到报线",
            type: 'lines',
            silent: true,
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: "arrow",
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    color: "#0f0",
                    width: 2,
                    opacity: 0.5,
                    curveness: 0.2
                }
            },
            data: convertData(item[1], "到报")
        }, {
            name: "缺报线",
            type: 'lines',
            zlevel: 2,
            silent: true,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: "triangle",
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    color: "#ff0",
                    width: 2,
                    opacity: 0.5,
                    curveness: 0.2
                }
            },
            data: convertData(item[1], "缺报")
        }, {
            name: "中心点",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 3,
            rippleEffect: {
                brushType: "stroke"
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    formatter: "{b}",
                    textStyle: {
                        fontSize: 15,
                        fontWeight: "bolder"
                    }
                }
            },
            symbolSize: 20,
            itemStyle: {
                normal: {
                    color: "#fff"
                }
            },
            data: [{
                name: "数据中心",
                value: [106.223063,37.427776, "数据中心"]
            }]
        }, {
            name: "到报",
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: "#0f0"
                }
            },
            data: convertDataStatus(item[1], "到报")
        }, {
            name: "缺报",
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: "#ff0"
                }
            },
            data: convertDataStatus(item[1], "缺报")
        }, {
            name: "故障",
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: "#f00"
                }
            },
            data: convertDataStatus(item[1], "故障")
        })
    })
    option = {
        backgroundColor: "#20263f",
        tooltip : {
            trigger: 'item',
            formatter: function(params){
                if (params.componentSubType === "effectScatter") {
                    var html = "台站名称: " + params.name + "<br/>";
                    html += params.marker + "经度: " +  params.value[0] + "<br/>";
                    html += params.marker + "纬度: " +  params.value[1] + "<br/>";
                    html += params.marker + "所属值: " +  params.value[2] + "<br/>";
                    return html;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['到报', '缺报', '故障'],
            textStyle: {
                color: '#fff'
            },
            // selectedMode: 'single'
        },
        geo: {
            map: '宁夏',
            zoom: 1.1,
            label: {
                show: false,
                textStyle: {
                    color: '#fff', //地图初始化区域字体颜色
                    fontSize: 16,
                    opacity: 1,
                    backgroundColor: 'rgba(53,171,199,0)'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff', //地图初始化区域字体颜色
                        fontSize: 16,
                        opacity: 1,
                        backgroundColor: 'rgba(53,171,199,0)'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#2158c9',
                    borderWidth: 2,
                    borderColor: '#03a2fe',
                    shadowOffsetX: -10,
                    shadowColor: '#2158c9',
                    shadowBlur: 1
                },
                emphasis: {
                    areaColor: '#2464ae'
                }
            }
        },
        series: series
        // geo3D: {
        //     map: '宁夏',
        //     itemStyle: {
        //         areaColor: 'rgb(30,88,181)',
        //         opacity: 1,
        //         borderWidth: 2,
        //         borderColor: 'rgb(5,163,255)'
        //     },
        //     label: {
        //         show: true,
        //         textStyle: {
        //             color: '#fff', //地图初始化区域字体颜色
        //             fontSize: 16,
        //             opacity: 1,
        //             backgroundColor: 'rgba(53,171,199,0)'
        //         },
        //     },
        //     emphasis: { //当鼠标放上去  地区区域是否显示名称
        //         label: {
        //             show: true,
        //             textStyle: {
        //                 color: '#fff',
        //                 fontSize: 16,
        //                 backgroundColor: 'rgba(0,23,11,0)'
        //             }
        //         }
        //     },
        //     viewControl: {
        //         autoRotate : false,
        //         distance : 150,
        //         alpha  : 60,
        //     },
        // }
    };
    myChart.setOption(option);
    myChart.on("legendselectchanged", function(params) {
        var isSelected = params.selected[params.name];
        if (params.name === "到报" && !isSelected) {
            myChart.setOption({
                legend: {
                    selected: {
                        "到报拖尾": false,
                        "到报线": false
                    }
                }
            })
        } 
        else {
            if (params.name === "到报" && isSelected) {
                myChart.setOption({
                    legend: {
                        selected: {
                            "到报拖尾": true,
                            "到报线": true
                        }
                    }
                })
            } 
            else {
                if (params.name === "缺报" && !isSelected) {
                    myChart.setOption({
                        legend: {
                            selected: {
                                "缺报线": false
                            }
                        }
                    })
                } 
                else {
                    if (params.name === "缺报" && isSelected) {
                        myChart.setOption({
                            legend: {
                                selected: {
                                    "缺报线": true
                                }
                            }
                        })
                    }
                }
            }
        }
    });