var allData = {
    "citys": [
        {"name": "女子监狱"},{"name": "女子监狱文本"},
        {"name": "十里丰监狱"},{"name": "十里丰监狱文本"},
        {"name": "任城监狱"},{"name": "任城监狱文本"},
        {"name": "沙洋汉津监狱"},{"name": "沙洋汉津监狱文本"},
        {"name": "焦作"},{"name":"焦作文本"},
        {"name": "商丘"},{"name":"商丘文本"}
    ],
    "henanLines":[
        {"name":"焦作","value":"目前，韩国政府已将疫情预警上调至最高级别的“严重”，并实施关于集体活动、利用公共设施的指南修订案，建议民众暂停聚集在室内或是在人群密集的户外举行活动，也尽量避免聚餐、旅游等私人聚会和活动。","coords": [[113.24, 35.22],[116.25, 38.08]]}, 
        {"name":"商丘","value":"目前，韩国政府已将疫情预警上调至最高级别的“严重”，并实施关于集体活动、利用公共设施的指南修订案，建议民众暂停聚集在室内或是在人群密集的户外举行活动，也尽量避免聚餐、旅游等私人聚会和活动。人群密集的户外举行活动，也尽量避免聚餐、旅游等私人聚会和活动。","coords": [[115.66, 34.42],[128.66, 34.42]]}, 
        ],
    "otherLines": [
        {"name":"女子监狱","value":"女子监狱文本","fromName": "女子监狱","toName": "女子监狱文本","coords": [[114.25, 30.08],[124.59, 30.08]]}, 
        {"name":"十里丰监狱","value":"十里丰监狱\n文本","fromName": "十里丰监狱","toName": "十里丰监狱文本","coords": [[119.06, 29.09],[128.59,29.09]]}, 
        {"name":"任城监狱","value":"任城监狱文本","fromName": "任城监狱","toName": "任城监狱文本","coords": [[116.59, 35.55],[121.59, 35.55]]}, 
        {"name":"沙洋汉津监狱","value":"沙洋汉津监狱文本","fromName": "沙洋汉津监狱","toName": "沙洋汉津监狱文本","coords": [[112.59, 30.71],[121.59, 30.71]]}, 
        ]
};


var geoCoordMap = {
    "女子监狱": [114.25, 30.08],
    "沙洋汉津监狱": [112.59, 30.71],
    "商丘": [115.66, 34.42],
    "焦作": [113.24, 35.22],
    "任城监狱": [116.59, 35.55],
    "十里丰监狱": [119.06, 29.09],
};

var data = [{
        name: "女子监狱",
        value: 200
    },
    {
        name: "沙洋汉津监狱",
        value: 200
    },
    {
        name: "商丘",
        value: 200
    },
    {
        name: "焦作",
        value: 200
    },
    {
        name: "任城监狱",
        value: 200
    },
    {
        name: "十里丰监狱",
        value: 200
    }
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var convertedData = [
    convertData(data),
    convertData(data.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];


option = {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    title: [{
            text: '疫情输入型传播',
            //subtext: 'data from PM25.in',
            //sublink: 'http://www.pm25.in',
            top: 20,
            left: 'center',
            fontSize: 20,
            textStyle: {
                color: '#fff'
            }
        },
        {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }
    ],
    /*toolbox: {                           //工具板块
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },*/
    geo: {
        map: 'china',
        id: 11,
        z: 1,
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 2.5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否开启鼠标缩放和平移漫游
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },

  /* graphic: {    //水印
        id: 30,
        elements: [{
            type: 'text',
             $action: 'merge' ,
             position:[330, 410],
             z: 1,
             zlevel: 1,
             draggable: false,
             //silent: false,      //是否不响应鼠标以及触摸事件
             //progressive: true,   //是否渐进式渲染。当图形元素过多时才使用。
             style:{
                 x:0,
                 y:0,
                 text: '测试是是大幅度发',
                 fontSize: 16,
                 fill: '#00ffff',
             }
        }]
    },   */

    tooltip: {
        trigger: 'item'
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 2,
            textStyle: {
                color: '#aaa'
            }
        },
    },
    yAxis: {
        type: 'category',
        //name: 'TOP 20',
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#ddd'
            }
        },
        data: []
    },
    series: [

        {
            name: '位置',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertedData[1],
            symbolSize: function(val) {
                return Math.max(val[2] / 10, 8);
            },
            showEffectOn: 'render',     //配置何时显示特效 'render' 绘制完成后显示特效, 'emphasis' 高亮（hover）的时候显示特效。
            rippleEffect: {
                //color: "#00ffff",   //颜色，涟漪的颜色，默认为散点的颜色。
                brushType: 'stroke'   //波纹的绘制方式，可选 'stroke' 和 'fill'。
            },
            hoverAnimation: true,
            label: {
                normal: {
                    fontSize: 14,
                    formatter: '{b}',
                    position: 'bottom',
                    show: true,
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'otherlines',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            large: false,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 6,
                trailLength: 0,
            },
			label:{
				show:true,
				color:'yellow',
				fontSize:16,
				formatter:'{c}',
				/*rich:{
				    a:{
				        color:'yellow',
				        fontSize:14,
				        lineHeight:18,
				        align:'left',
				    },
				}*/
				
			},

            lineStyle: {
                normal: {
                    //color: '#f4e925',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#58B3CC'
                        }, {
                            offset: 1, color: '#f4e925'
                        }], false),
                    width: 2,
                    opacity: 1,
                    curveness: 0 //0.2 曲线   0 直线
                }
            },
            data: allData.otherLines
        },
        {
            name: 'henanLines',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            polyline:false,   //是否是多段线
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 6,
                trailLength: 0,
            },
			label:{
				show:true,
				//formatter:'{c}',
				/*width:400,
				height:150,*/
				borderColor:'#00ffff',
				borderWidth:0,
				//fontSize:16,
				//formatter:'{a|{c}}',
				//offset:[300,400],  //不起作用
				formatter: function (params) {
                            var newParamsName = "";
                            var paramsNameNumber = params.value.length;
                            var provideNumber = 30;  //一行显示几个字
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                            if (paramsNameNumber > provideNumber) {
                                for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "";
                                    var start = p * provideNumber;
                                    var end = start + provideNumber;
                                    if (p == rowNumber - 1) {
                                        tempStr = params.value.substring(start, paramsNameNumber);
                                    } else {
                                        tempStr = params.value.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;
                                }

                            } else {
                                newParamsName = params;
                            }
                            return '{a|'+newParamsName+'}'
                            //console.log(newParamsName)
                },
				rich:{
				    a:{
				        color:'#00ffff',
				        fontSize:16,
				        lineHeight:20,
				        align:'left',
				    },
				}
			},

            lineStyle: {
                normal: {
                    color: '#00ffff',
                    /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#58B3CC'
                        }, {
                            offset: 1, color: '#f4e925'
                        }], false),*/
                    width: 2,
                    opacity: 1,
                    curveness: 0 //0.2 曲线   0 直线
                }
            },
            data: allData.henanLines
        },
    ]
};