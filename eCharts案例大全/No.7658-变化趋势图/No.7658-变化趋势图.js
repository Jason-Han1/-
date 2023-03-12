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
var legendData = [];
var xAxisData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var yAxisData = xAxisData;
var seriesName1 = "去年（月度）";
var seriesName2 = "今年（月度）";
var seriesName3 = "去年（累计）";
var seriesName4 = "今年（累计）";
var seriesData1 = ["108299.75", "79717.92", "162583.12", "73821.13", "44169.31", "103989.40", "65898.86", "72341.51", "109866.35", "58037.81", "66146.84", "182215.33"];
var seriesData2 = ["120188.16", "69268.93", "64514.17", "87404.31", "27821.91", "", "", "", "", "", "", ""];
var seriesData3 = ["108299.75", "188017.67", "350600.79", "424421.92", "468591.23", "572580.63", "638479.49", "710821.00", "817049.89", "875087.70", "941234.54", "1123449.87"];
var seriesData4 = ["120188.16", "189457.09", "253971.26", "341375.56", "369197.47", "", "", "", "", "", "", ""];

var option = {
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
				backgroundColor: '#6a7985'
			}
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: {
		left: '1%',
		right: '4%',
		bottom: '6%',
		top:30,
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        data:name,
        bottom: "0%",
        textStyle: {
			color: '#4c647c',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
			data: xAxisData,
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#4c647c',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#4c647c',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
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

		}
	],
    series : [
        {
            name:seriesName2,
            type:'bar',
            data:seriesData2,
            yAxisIndex: 0,
            barWidth: 20,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       formatter: function(p) {
            //         	return formatNum(p.value);
            //         },
            //       textStyle: {
            //           color: '#4c647c',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: 20,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgb(98, 147, 211)'
                    },{
                        offset: 0, color: 'rgb(98, 147, 211)'
                    }], false),
                },
            },
        },
        {
            name:seriesName1,
            type:'bar',
            data:seriesData1,
            yAxisIndex: 0,
            barWidth: 20,
            barGap:1,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       formatter: function(p) {
            //         	return formatNum(p.value);
            //         },
            //       textStyle: {
            //           color: '#4c647c',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: 20,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgb(124, 132, 164)'
                    },{
                        offset: 0, color: 'rgb(124, 132, 164)'
                    }], false),
                },
            },
        },
			{
				name:seriesName4,
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 10,
                yAxisIndex: 1,
                smooth: true,
	            itemStyle: {
			        normal: {
						color:'#76d5c2',
			            lineStyle: {
							color: "#76d5c2",
							width:1
			            }
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				data:seriesData4
			},
			{
				name:seriesName3,
				type:'line',
				// stack: '总量',
				symbol:'circle',
				symbolSize: 10,
                yAxisIndex:  1,
                smooth: true,
	            itemStyle: {
			        normal: {
						color:'#fb9678',
			            lineStyle: {
							color: "#fb9678",
							width:1
			            }
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				data:seriesData3
			},
    ]
};