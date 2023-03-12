        var mapName = "china";
        var mapTitle = "院新型冠状病毒肺炎疫情防控工作实时情况";
        var subTitle = "\n苏地测职工分布图\n，\n苏地测职工全国各市人数情况";
        var title_Color = "rgb(55, 75, 113)";
        var title_FontFamily = "等线";
        var mapTitle_FontSize = 18;
        var subTitle_FontSize = 15;

        var data = [
                {name:"南京",value:82},
                {name:"九江",value:68},
                {name:"上海",value:66},
                {name:"中山",value:64},
                {name:"临沂",value:62},
                {name:"丹东",value:60},
                {name:"北京",value:58},
                {name:"南通",value:56},
                {name:"合肥",value:54},
                {name:"唐山",value:52},
                {name:"天津",value:50},
                {name:"宁波",value:48},
                {name:"宿迁",value:46},
                {name:"常州",value:44},
                {name:"延安",value:42},
                {name:"徐州",value:40},
                {name:"成都",value:38},
                {name:"扬州",value:36},
                {name:"无锡",value:34},
                {name:"武汉",value:32},
                {name:"泉州",value:30},
                {name:"泰州",value:28},
                {name:"淮安",value:26},
                {name:"菏泽",value:24},
                {name:"西宁",value:22},
                {name:"西安",value:20},
                {name:"郑州",value:18},
                {name:"重庆",value:16},
                {name:"镇江",value:14},
                {name:"长沙",value:12},
                {name:"青岛",value:10},
        ];        
        var geoCoordMap = {
            '南京': [118.8062, 31.9208],
            '九江': [116.00, 29.70],
            '上海': [121.4648, 31.2891],
            '中山': [113.4229, 22.478],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '北京': [116.4551, 40.2539],
            '南通': [121.1023, 32.1625],
            '合肥': [117.29, 32.0581],
            '唐山': [118.4766, 39.6826],
            '天津': [117.4219, 39.4189],
            '宁波': [121.5967, 29.6466],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '延安': [109.1052, 36.4252],
            '徐州': [117.5208, 34.3268],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '无锡': [120.3442, 31.5527],
            '武汉': [114.3896, 30.6628],
            '泉州': [118.3228, 25.1147],
            '泰州': [120.0586, 32.5525],
            '淮安': [118.927, 33.4039],
            '菏泽': [115.6201, 35.2057],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '郑州': [113.4668, 34.6234],
            '重庆': [107.7539, 30.1904],
            '镇江': [119.4763, 31.9702],
            '长沙': [113.0823, 28.2568],
            '青岛': [120.4651, 36.3373]
        };
        var toolTipData = [ 
            {name:"南京",value:[{name:"人数",value:82},{name:"占比",value:"6.55%"}]},
            {name:"九江",value:[{name:"人数",value:68},{name:"占比",value:"5.43%"}]}, 
            {name:"上海",value:[{name:"人数",value:66},{name:"占比",value:"5.27%"}]}, 
            {name:"中山",value:[{name:"人数",value:64},{name:"占比",value:"5.11%"}]}, 
            {name:"临沂",value:[{name:"人数",value:62},{name:"占比",value:"4.95%"}]}, 
            {name:"丹东",value:[{name:"人数",value:60},{name:"占比",value:"4.79%"}]},
            {name:"北京",value:[{name:"人数",value:58},{name:"占比",value:"4.63%"}]}, 
            {name:"南通",value:[{name:"人数",value:56},{name:"占比",value:"4.47%"}]}, 
            {name:"合肥",value:[{name:"人数",value:54},{name:"占比",value:"4.31%"}]}, 
            {name:"唐山",value:[{name:"人数",value:52},{name:"占比",value:"4.15%"}]},
            {name:"天津",value:[{name:"人数",value:50},{name:"占比",value:"3.99%"}]},
            {name:"宁波",value:[{name:"人数",value:48},{name:"占比",value:"3.83%"}]}, 
            {name:"宿迁",value:[{name:"人数",value:46},{name:"占比",value:"3.67%"}]}, 
            {name:"常州",value:[{name:"人数",value:44},{name:"占比",value:"3.51%"}]}, 
            {name:"延安",value:[{name:"人数",value:42},{name:"占比",value:"3.35%"}]},
            {name:"徐州",value:[{name:"人数",value:40},{name:"占比",value:"3.19%"}]},
            {name:"成都",value:[{name:"人数",value:38},{name:"占比",value:"3.04%"}]}, 
            {name:"扬州",value:[{name:"人数",value:36},{name:"占比",value:"2.88%"}]}, 
            {name:"无锡",value:[{name:"人数",value:34},{name:"占比",value:"2.72%"}]}, 
            {name:"武汉",value:[{name:"人数",value:32},{name:"占比",value:"2.56%"}]},
            {name:"泉州",value:[{name:"人数",value:30},{name:"占比",value:"2.40%"}]},
            {name:"泰州",value:[{name:"人数",value:28},{name:"占比",value:"2.24%"}]}, 
            {name:"淮安",value:[{name:"人数",value:26},{name:"占比",value:"2.08%"}]}, 
            {name:"菏泽",value:[{name:"人数",value:24},{name:"占比",value:"1.92%"}]}, 
            {name:"西宁",value:[{name:"人数",value:22},{name:"占比",value:"1.76%"}]},
            {name:"西安",value:[{name:"人数",value:20},{name:"占比",value:"1.60%"}]},
            {name:"郑州",value:[{name:"人数",value:18},{name:"占比",value:"1.44%"}]}, 
            {name:"重庆",value:[{name:"人数",value:16},{name:"占比",value:"1.28%"}]}, 
            {name:"镇江",value:[{name:"人数",value:14},{name:"占比",value:"1.12%"}]}, 
            {name:"长沙",value:[{name:"人数",value:12},{name:"占比",value:"0.96%"}]},  
            {name:"青岛",value:[{name:"人数",value:10},{name:"占比",value:"0.80%"}]}      
        ];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

        });

        //console.log(geoCoordMap)
        //console.log(data)
        //console.log(toolTipData)
        var max = 480,
            min = 9; // todo 
        var maxSize4Pin = 100,
            minSize4Pin = 20;

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };
        //console.log(convertData(data))
        option = {
            title: {
                text: mapTitle,
                subtext: subTitle,
                x: 'center',
                textStyle: {
                    color: title_Color,
                    fontFamily: title_FontFamily,
                    fontSize: mapTitle_FontSize
                },
                subtextStyle:{
                    fontSize:subTitle_FontSize,
                    fontFamily:title_FontFamily
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    //console.log(typeof(params.value)[2])
                    if (typeof(params.value)[2] == "undefined") {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+'：<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+'：'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        //console.log(toolTiphtml)
                        //console.log(convertData(data))
                        return toolTiphtml;
                    } else {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+'：<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+'：'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        //console.log(toolTiphtml)
                        // console.log(convertData(data))
                        return toolTiphtml;
                    }
                }
            },
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 200,
            //     left: 'left',
            //     top: 'bottom',
            //     text: ['高', '低'], // 文本，默认为数值文本
            //     calculable: true,
            //     seriesIndex: [1],
            //     inRange: {
            //         color: ['#A5CC82','#00467F'] // 蓝绿 ['#00467F','#A5CC82']
            //     }
            // },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',  //#031525
                        borderColor: '#3B5077',//#3B5077
                    },
                    emphasis: {
                        areaColor: '#2B91B7', //'#2B91B7'
                    }
                }
            },
            series: [
                {
                    name: '散点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            //formatter: '{@[2]}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9'//#409EFF  #05C3F9
                        }
                    }
                },
                
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function(val) {
                        return val[2] / 5;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'yellow',
                            shadowBlur: 10,
                            shadowColor: 'yellow'
                        }
                    },
                    zlevel: 1
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        console.log(a, b)
                        return a * val[2] + b*1.2;
                    },
                    label: {
                        normal: {
                            //formatter: '{b}',
                            //position: 'right',
                            formatter: '{@[2]}',                            
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
            ]
        };
        myChart.setOption(option);