var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

if (h < 800 && (w < 1600 && w > 800)) {
    d = '1%';
	e = '4%';
	f = '8%';
	g = '6%';
	h = '0%';
}else if((h > 800 && h < 1000) && (w > 1100 && w < 1600)){
    d = '1%';
	e = '4%';
	f = '8%';
	g = '6%';
	h = '0%';
}else if((h > 900 && h < 1200) && (w < 2200 && w > 1500)){
    d = '1%';
	e = '4%';
	f = '6%';
	g = '6%';
	h = '2%';
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
var legendData = [];
var xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12","13", "14", "15", "16", "17", "18", "19", "20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"];
var yAxisData = xAxisData;
var seriesName1 = "入库总金额";
var seriesName2 = "结算总金额";
var seriesName3 = "利润";
var seriesData1 = ["103517.10", "53397.33", "65152.51", "77614.42", "31545.76", "58532", "49632", "12354", "15832", "19522", "26652", "45523","103517.10", "53397.33", "65152.51", "77614.42", "31545.76", "58532", "49632", "12354", "15832", "19522", "26652", "45523"];
var seriesData2 = ["108073.78", "76759.58", "91730.89", "101286.46", "81233.99", "95232", "78521", "32151", "24581", "88852", "98652", "105522","108073.78", "76759.58", "91730.89", "101286.46", "81233.99", "95232", "78521", "32151", "24581", "48852", "58652", "65522"];   
var seriesData3 = ["12507", "6956", "7103", "7663", "3883", "12231", "8965", "7521", "11254", "22011", "8865", "7542","12507", "6956", "7103", "7663", "3883", "12231", "8965", "7521", "11254", "22011", "8865", "7542"];


var option = {
    backgroundColor: 'rgb(255, 255, 255)',
	tooltip: { //提示框组件
		trigger: 'axis',
		
		formatter:function(params){  
		  var relVal = params[0].name;  
		  for (var i = 0, l = params.length; i < l; i++) {  
		      if(i ==2){
		          relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value)+"元"; 
		      }else{
		          relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value)+"元"; 
		      }
		  }  
		  return relVal;
		},
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#fff'
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
		left: d,
		right: e,
		bottom: f,
		top: g,
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        data:name,
        bottom: h,
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
			    formatter: '{value}',
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
            name:seriesName1,
            type:'bar',
            data:seriesData1,
            barWidth: 10,
            barGap:0,//柱间距离
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
        },
        {
            name:seriesName2,
            type:'bar',
            data:seriesData2,
            barWidth: 10,
            barGap:1,//柱间距离
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
        },
        {
			name:seriesName3,
			type:'line',
			stack: '总量',
			symbol:'circle',
			symbolSize: 10,
            yAxisIndex: 1,
            smooth: true,
            itemStyle: {
		        normal: {
                    borderColor: '#fff',
                    borderWidth: 3,
					color:'#ffa55b',
		            lineStyle: {
						color: "#ffa55b",
						width:1
		            }
		        }
			},
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //         //   color: '#4c647c',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
			markPoint:{
				itemStyle:{
					normal:{
						color:'red'
					}
				}
			},
			data:seriesData3
		}
    ]
};