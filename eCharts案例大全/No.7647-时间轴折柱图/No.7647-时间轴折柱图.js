var w = document.documentElement.clientWidth;
var a,b;
if (w >= 1300 && w < 1500) {
    a = 4;
    b = 8;
}else if(w < 1300){
    a = 4;
    b = 8;
}else{
    a = 0;
    b = 10;
}
function formatNum(strNum) {
    if (strNum.length <= 3) {
        return strNum;
    }
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
        return strNum;
    }
    var a = RegExp.$1,
        b = RegExp.$2,
        c = RegExp.$3;
    var re = new RegExp();
    re.compile("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) {
        b = b.replace(re, "$1,$2$3");
    }
    return a + "" + b + "" + c;
}
var opts = [];
var yearData = ["一审", "执行", "结案"];
var data = [["XX公司", "XX公司", "XX公司"],["XX公司", "XX公司"],["XX公司", "XX公司", "XX公司", "XX公司"]];
var data1 = [["32.03", "98", "13"],["32.03", "98"],["32.03", "98", "58", "38"]];
var data2 = [["4", "1", "5"],["4", "1"],["4", "1", "5", "9"]];
for (var i = 0; i < yearData.length; i++) {
    conditions = [{
        'querycol_案件进展': yearData[i]
    }]
    opts.push({
        xAxis: [{
            "type": "category",
            "axislabel": {
                "interval": 0
            },
            data: data[i],
            splitLine: {
                show: false
            }
        }],
        series: [{
            type: 'bar',
            barWidth: 15,
            yAxisIndex: 0,
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: 20,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgb(29, 141, 211)'
                    },{
                        offset: 0, color: 'rgb(56, 206, 191)'
                    }], false),
                },
            },
            name: "涉案金额",
            data: data1[i],
        }, {
            type: 'line',
            smooth: true,
            symbol: 'circle',
            yAxisIndex: 1,
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
    				width:1
                }
            },
            // areaStyle: {
            //     normal: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(250,196,92, 0.9)'
            //     }, {
            //         offset: 0.8,
            //         color: 'rgba(250,196,92, 0)'
            //     }], false),
            //     shadowColor: 'rgba(0, 0, 0, 0.2)',
            //     shadowBlur: 10
            // }
            // },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: 20,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgb(254, 101, 116)'
                    },{
                        offset: 0, color: 'rgb(254, 152, 94)'
                    }], false),
                },
            },
            name: "案件数量",
            data: data2[i],
        }]
    })
}

var option = {
    baseOption: {
        timeline: {
            axisType: "category",
            autoPlay: true,
            //rewind: true,
            playInterval: 2000,
            orient: "vertical",
            lineStyle: {
                color: "#4c647c"
            },
            label: {
                fontSize: 12,
                textStyle: {
                    color: "#4c647c"
                }
            },
            checkpointStyle: {
                color: "#4c647c"
            },
            left: "4%",
            right: "84%",
            top: 'top',
            bottom: "6%",
            data: yearData,
            padding: [30, 10, 20, -10]
        },
        tooltip: { //提示框组件
    		trigger: 'axis',
    		formatter:function(params){  
    		  var relVal = params[0].name;  
    		  for (var i = 0, l = params.length; i < l; i++) { 
    		      if (i == 1){
    				relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value)+"个";
    		      } else {
    		         relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value)+"万元"; 
    		      }
    		  }  
    		  return relVal;
    		},
    		axisPointer: {
    			type: 'shadow',
    			label: {
    				backgroundColor: '#4c647c'
    			}
    		},
    		textStyle: {
    			color: '#fff',
    			fontStyle: 'normal',
    			fontFamily: '微软雅黑',
    			fontSize: 12,
    		}
    	},
        legend: {
            right:'37%',
            top:'2%',
            itemWidth: 18,
        itemHeight: 10,
            textStyle: {
    			color: '#4c647c',
    			fontStyle: 'normal',
    			fontFamily: '微软雅黑',
    			fontSize: 12,            
            },
        },
        calculable: true,
        grid: {
            x: '26%',
            top: '14%',
            bottom: '2%',
            height:'70%',
            right: 60,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [{
            type: 'category',
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#4c647c',
					opacity:0.2
				}
			},
            axisLabel: {
                interval: 0,
                //rotate:40,
                textStyle: {
                     fontSize:12,
                }
            },
            data: opts,
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
			axisLabel: {
				textStyle: {
					color: '#4c647c',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#000'],
					opacity:0.06
				}
			}
        },
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
			    formatter:'{value}',
				textStyle: {
					color: '#4c647c',
					fontStyle: '{value}',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#000'],
					opacity:0.06
				}
			}

		}],
    },

    //图表内数据
    options: opts,
};