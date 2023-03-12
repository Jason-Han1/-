var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
var a,b;
if (h < 800 && (w < 1600 && w > 800)) {
    a = '72%';
    b = 8;
    d = '4%';
    e = '-18%';
    f = '0';
    g = '34%';
}else if((h > 800 && h < 1000) && (w > 1100 && w < 1600)){
    a = '72%';
    b = 8;
    d = '4%';
    e = '-12%';
    f = '5%';
    g = '34%';
}else if((h > 900 && h < 1200) && (w < 2200 && w > 1500)){
    a = '80%';
    b = 10;
    d = '4%';
    e = '-8%';
    f = '5%';
    g = '24%';
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
var yearData = ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05"];
for (var i = 0; i < yearData.length; i++) {
    conditions = [{
        'querycol_月份': yearData[i]
    }]
    opts.push({
        xAxis: [{
            "type": "category",
            axisLabel: {
                interval: 0,
                rotate:40,
                textStyle: {
				     color: '#4c647c',
                     fontSize:9,
                }
            },
            data: ["XX院", "XX公司", "XX公司", "XX公司", "XXX公司", "XXXX公司", "XX公司", "XX公司", "XX公司", "XXXX", "XXXX", "XXXX公司", "XX疗养院", "XX公司", "XX分公司", "XX公司", "XX科创"],
            splitLine: {
                show: false
            }
        }],
        series: [{
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
    				width:1
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(250,196,92,0.5)',
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(250,196,92,0.2)',
                    borderWidth: 3,
                    color: '#ffa55b',
                    // borderColor: 'rgba(250,196,92,0.2)',
                    borderWidth: 8
    
                }
            },
            name: "本月新签合同",
            data: ["30048.00", "6639.00", "5327.00", "2779.00", "2652.00", "2345.00", "2278.00", "1656.00", "1082.00", "588.00", "362.00", "8.00", "5.00", "", "", "", ""],
        }, {
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
    				width:1
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(73,199,173,1)',
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(73,199,173,0.2)',
                    borderWidth: 3,
                    color: 'rgba(73,199,173,1)',
                    // borderColor: 'rgba(73,199,173,0.2)',
                    borderWidth: 8
    
                }
            },
            name: "本月力争新签合同",
            data: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        }]
    })
}


var option = {
    baseOption: {
        timeline: {
            axisType: "category",
            autoPlay: true,
            rewind: true,
            playInterval: 2000,
            orient: "vertical",
            lineStyle: {
                color: "#4c647c"
            },
            label: {
                fontSize: 10,
                textStyle: {
                    color: "#4c647c"
                }
            },
            checkpointStyle: {
                color: "#4c647c"
            },
            left: d,
            right: a,
            top: e,
            bottom: f,
            data: yearData,
            padding: [50, 30, 5, -10]
        },
        tooltip: { //提示框组件
		trigger: 'axis',
		formatter:function(params){  
		  var relVal = params[0].name;  
		  for (var i = 0, l = params.length; i < l; i++) {  
				relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value)+"万元";  
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
			fontSize: 10,
		}
	},
        legend: {
            right:20,
            top:'2%',
            textStyle: {
    			color: '#4c647c',
    			fontStyle: 'normal',
    			fontFamily: '微软雅黑',
    			fontSize: 10,            
            },
        },
        calculable: true,
        grid: {
            left: g,
            top: '10%',
            bottom: '22%',
            right: '2%',
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
                rotate:40,
                textStyle: {
				     color: '#4c647c',
                     fontSize:8,
                }
            },
            data: ["辉光", "文鼎", "南孚", "智创", "硅谷", "雅思", "君临"],
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
			axisLabel: {
			 //   formatter: '{value}万元',
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
            // name: 'GDP（亿元）'
        }],

        series: [

            {
              //  name: '本月新签合同',
                type: 'bar'
            },
            {
              //  name: '本月力争新签合同',
                type: 'bar'
            }

        ]
    },

    //图表内数据
    options: opts,
};