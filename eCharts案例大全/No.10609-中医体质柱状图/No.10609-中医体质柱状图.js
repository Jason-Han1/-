var myColor=["#d19d70","#934d57","#419dc4","#646566","#d19d70","#934d57","#419dc4","#646566","#646566"]
option = {
 backgroundColor: "#fff",
 title: {
        text: "中医体质柱状图",
        subtext: "中医体质柱状图",
        textStyle: {
            color: "#000",
            fontSize: 16
        },
        left: '4.5%',
        top: "8%"

    },
    grid: {
        left: "3%",
        top: "20%",
        bottom: "18%",
        right: "3%",
        containLabel: false
    },
    tooltip: {
        trigger: "item",
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            symbol:['none','arrow']
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    xAxis: [{
            type: "category",
            inverse: false,
            barGap:'15%',
            data: ["平和质", "气虚质", "阳虚质", "阴虚质", "痰湿质","湿热质","血瘀质","气郁质","特禀质"],
            axisLine: {
                show: true,
                symbol:['none','arrow']
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "#3e86dd"
                }
            },
            axisLabel: {
                margin:10,
                textStyle: {
                    color: "#000",
                    fontSize: 14,
                },
                 formatter : function(params){
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 1;
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }

                    } else {
                        newParamsName = params;
                    }
                    return newParamsName
                }
            }
        }

    ],
    series: [
        {
            tooltip: {
                show: false
            },
            z: 4,
            type: "pictorialBar",
            symbolSize: ['10', '10'],
            symbolOffset: [0, -10],
            symbolRepeat: "fixed",
           data: ['19','28','37','46','55','64','73','82','91'],
            itemStyle: {
            normal: {
                color: '#b8baba'
            }
        }
        },
        {	z: 6,
			type: "pictorialBar",
			symbolSize: ['10', '10'],
			 animation: true,
			symbolRepeat: "fixed",
			symbolClip: true,
			symbolPosition: "start",
			symbolOffset: [0, -10],
			data: ['19','28','37','46','55','64','73','82','91'],
			itemStyle: {
			normal: {
				color: function(params) {
					var num = myColor.length;
					return myColor[params.dataIndex % num]
				},
			   
			}
        },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                         normal: {
							color: function(params) {
								var num = myColor.length;
								return myColor[params.dataIndex % num]
							},
						},
                        fontSize: 14,
                    },
                    position: "top",
                    offset: [0, 0]
                }
            },
        },
        {
            type: "bar"
    },]
}