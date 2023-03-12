            var cellphone = ['运营能力', '盈利能力', '现金流','成长能力','偿债能力'];
            var acellphone = [{"name":"运营能力1分析"},{"name":"运营能力2分析"},{"name":"运营能力3分析"},{"name":"运营能力分析"},{"name":"运营能力分析"},];
var colors = ['#27302c', '#3b4e53', '#2b3440']

var data1 = [];
for (var i = 0; i < 5; ++i) {
    console.log(acellphone[i].name)
    data1.push({
        name: cellphone[i],
        value: 2,
        label: {
            position: 'inside',
            rotate: 'tangential',
            color: '#fff',
            fontSize: '20'

        },
        itemStyle: {
            normal: {
                color: colors[i]
            }
        },
      tooltip: {
                trigger: 'item',
                //提示框方向
                             position: 'right',
                formatter: acellphone[i].name,
                        show: true,                                                                                                                                                                                                   
                        backgroundColor: 'rgba(2, 116, 197, 1)',//背景
                                position: 'right',
                                textStyle: {//文字颜色
                                    fontFamily : "微软雅黑",
                                    fontSize : 20,
                                    color: '#fff',
                                    
                                },
                                
                    extraCssText: 'width: 300px;white-space:pre-wrap;',//背景宽度
            }, 
    });
}














var leiDadata = [
            {
            "name": "偿债能力",
            max: 100
            }, 
            
            {
            "name": "成长能力",
            max: 100
            }, 
            
            {
            "name": "现金流分析",
            max: 100
            }, 
            
            {
            "name": "盈利能力",
            max: 100
            }, 
            
            {
            "name": "运营能力",
            max: 100
            }, 
            ]
var radarAllDatas = [
    [{
        name: "去年同期"
    }],
    [{
        name: "本期状况"
    }],
]
var ax = [9.00,
            2.00,
            5.00,
            30.00,
            25.00,
            ];
var xc = [3.00,
            25.00,
            72.00,
            1.00,
            56.00,
            ];
            
            
var colorListRadar = ["#00faf7", "#f19049",];
var leiDaArr = []; //雷达图
var leiDaXzhou = []; //轮播的名称
var legendLeiDa = []; //用于装legend的
var displayLeiDaAllTitle = []; //显示雷达图的参数
for (let z = 0; z < radarAllDatas.length; z++) {
    leiDaXzhou.push(radarAllDatas[z][0].name);
    legendLeiDa.push({
        name: radarAllDatas[z][0].name,
        icon: "circle"
    });
    leiDaArr.push({
        name: radarAllDatas[z][0].name,
        type: 'radar',
        symbol: "circle",
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: colorListRadar[z],
            }
        },
        areaStyle: {
            normal: {
                color: colorListRadar[z],
                opacity: 0.6
            },
        },
        lineStyle: {
            normal: {
                color: colorListRadar[z],
                type: 'solid',
                width: 3,
                opacity: 1
            }


        },
        label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#fff',
                                }
                            },
        data: radarAllDatas[z]
    },
    
    
    )
}

option = {
    baseOption: {
        timeline: {
            show: true,
            type: 'slider',
            axisType: 'category',
            bottom: '0',
            currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: true, //是否自动播放
            loop: true,
            rewind: false, //反向轮播
            realtime: true, //拖动圆点的时候，是否实时更新视图。
            controlPosition: 'left',
            label: {
                normal: {
                    color: '#2998ff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#2998ff',
                    borderWidth: 2,
                }
            },
            checkpointStyle: { //『当前项』（checkpoint）的图形样式
                color: 'rgb(215, 0, 0)',
            },
            lineStyle: {
                show: true, //false 不显示轴线
                color: '#2998ff',
            },
            controlStyle: { //控制按钮的样式
                show: true,
                showPrevBtn: true,
                showNextBtn: true,
                itemGap: 50,
                itemSize: 36,
                normal: {
                    color: 'rgb(215, 0, 0)',
                    borderColor: 'rgb(215, 0, 0)',
                },
                emphasis: {
                    color: 'rgb(215, 0, 0)',
                    borderColor: 'rgb(215, 0, 0)',
                },
            },
            data: leiDaXzhou,
        },



        tooltip: {},
        //backgroundColor:"#013d5a",
          "title": {
        "show": true,
        "text": "财务整体情况",
        "left": "45%",
    },
         //label: {
         //               show: true,
         //               formatter: function(params) {
         //                   return params.value;
         //               }
         //           },
        legend: {
            show: true,
            orient: 'vertical',
            top: '0%',
            left: '0.5%',
            itemWidth: 10,
            textStyle: {
                fontSize: 18,
                color: "#fff"
            },
            data: legendLeiDa
        },
        radar: [{
                radius: '66%',
                startAngle: 126,
                splitNumber: 4,
                shape: 'circle',
                name: {
                    show: true,
                    fontSize: 22,
                    color: "#fff",
                    
                    
                    formatter: function(value, indicator) {
                        return indicator.name
                    },
                },
                nameGap: 25,
                splitArea: {
                    areaStyle: {
                        color: 'transparent',
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#0095B0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,155,226,0.6)'
                    }
                },
                indicator: leiDadata
            },
        ],
        series: leiDaArr //series结束
    },
    options: [{
            radar: [{
                indicator: leiDadata
            }],
            series: [{
                z: 1,
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: ax
                }]
            }, {
                z: 1,
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: xc
                }]
            }, 
            {
        type: 'sunburst',
        center: ['50%', '50%'],
        nodeClick: false,
        levels: [{}, {
            r0: '60%',
            r: '70%',
            label: {},
            itemStyle: {
                //shadowBlur: 4,
                borderWidth: 8,
                borderColor: '#292a2e',
            }
        }],
        data: data1,

    }
            ]
        },
        {
            radar: [{
                indicator: leiDadata
            }],
            series: [{
                z: 1,
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: ax
                }]
            }, {
                z: 3,
                areaStyle: {
                    normal: {
                        opacity: 0.6
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                data: [{
                    value: xc
                }]
            }, 
            
            ]
        },
    ]
}
                    