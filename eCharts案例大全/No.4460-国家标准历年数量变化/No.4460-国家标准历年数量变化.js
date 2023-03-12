var uploadedDataURL = "https://gallerybox.echartsjs.com/asset/get/s/data-1608900394895-hRiPwO1um.json";

var Data={name:[],value:[]};
var option;

$.get(uploadedDataURL,function(result){
    result=eval(result)
    for(var i in result)
    {
        Data.name.push(result[i].name);
        Data.value.push(result[i].value);
    }
    
    console.log(Data)

        option = {
         title: {
    	        text: '国家标准历年数量变化',
    	        textStyle: {
    	        	 align: 'center',
    	            color: '#fff',
    	            fontSize: 20,
    	        },
    	        top: '13%',
    	        left: 'center',
    	    },
        backgroundColor: '#0F375F',
        grid: {
            width:400,
            height:250,
            top: "25%",
            bottom: "10%",//也可设置left和right设置距离来控制图表的大小
            left:"25%",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["标准数量", "年份"],
            top: "15%",
            textStyle: {
                color: "#ffffff"
            }
        },
        xAxis: {
            data: Data.name,
            name:"年份",
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                            color: '#ffffff'
                            }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff" //X轴文字颜色
                }
            },
             
        },
        yAxis: [{
                type: "value",
                name: "数量",
                nameTextStyle: {
                    color: "#ffffff"
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                                color: '#FFFFFF'
                                }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ffffff"
                    }
                },
                 
            },
            {
                type: "value",
                name: ""/*"同比"*/,
                nameTextStyle: {
                    color: "#ebf8ac"
                },
                position: "right",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "#ebf8ac"
                    }
                }
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
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
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            }
        ],
        series: [{
                //name: "标准数量",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 10, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    color: "#058cff"
                },
                lineStyle: {
                    color: "#058cff"
                },
                areaStyle:{
                    color: "rgba(5,140,255, 0.2)"
                },
                data:Data.value
            },
            {
                //name: "标准数量",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFE3"
                            },
                            {
                                offset: 1,
                                color: "#4693EC"
                            }
                        ])
                    }
                },
                data: Data.value
            }
        ]
    };
        myChart.setOption(option);
})

