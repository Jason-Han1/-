let data={
    xValue:['仁济医院','仁济医院','仁济医院','仁济医院','仁济医院','仁济医院'],
    dataValue1:[250,275,300,310,370,380,490],
    dataValue2:[105,150,185,200,250,320,390],
    dataValue3:[100,110,130,150,200,250,300],
    dataValue4:[85,95,105,120,145,160,190],
    dataValue5:[55,55,65,65,75,85,95],
    dataValue6:[15,25,35,45,50,55,55],
}
let colorList = ["#6ECAA7","#686D89","#E5B934","#DE6E53","#77C7E7","#EA9E67"];

option = {
    backgroundColor: '#0e2147',
// 	grid: {
// 	    top: "67",
// 	    left: "32",
// 	    bottom: "15",
// 	    right: "39",
// 	    containLabel: true
// 	},
	legend: {
	    show:false,
	},
	tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params){
            console.log("params",params);
            let str = '';
            for(let i=0;i<params.length;i++){
                if(i==(params.length - 1)){
                    // str += params[i].marker + ' '+ params[i].seriesName + '&nbsp;&nbsp;&nbsp;&nbsp;' + params[i].value;
                    str += '<span style="display:inline-block;margin-right:5px;width:20px;height:6px;background-color:'+colorList[i]+';margin-bottom:2px;"></span>' + ' '+ params[i].seriesName + '&nbsp;&nbsp;&nbsp;&nbsp;' + params[i].value;
                }else{
                    // str += params[i].marker + ' '+ params[i].seriesName + '&nbsp;&nbsp;&nbsp;&nbsp;' + params[i].value + '<br>';
                    str += '<span style="display:inline-block;margin-right:5px;width:20px;height:6px;background-color:'+colorList[i]+';margin-bottom:2px;"></span>' + ' '+ params[i].seriesName + '&nbsp;&nbsp;&nbsp;&nbsp;' + params[i].value  + '<br>';
                }
            }
            return str;
        }
    },
	xAxis: {
	    name: '',
	    type: 'category',
		boundaryGap: false,
		axisTick: {
		    show: false
		},
		axisLine: {
		    lineStyle: {
		        color: "#5C91C4"
		    }
		},
		axisLabel: {
		    textStyle: {
		        color: "#5C91C4"
		    },
		    margin: 20
		},
		data: data.xValue
	},
	yAxis: [
	    {
	    name: '数量',
	    nameTextStyle:{
	      color: '#5C91C4',
	      fontSize: 14,
	    },
		type: 'value',
        position: 'left',
		interval: 100,
		axisLabel: {
		    formatter: '{value}',
		    textStyle: {
				color: '#5C91C4', 
		        fontSize: 12
		    },
		},
		axisLine: { show: false },
		axisTick: { show: false },
		splitLine: {
		    lineStyle: {
		        color: '#5C91C4',
		        type: 'dashed'
		    }
		}
	}],
	series: [
	    {
            type: 'line',
            smooth: true,
            // symbol: 'emptyCircle',
            showSymbol: false,
            data: data.dataValue1,
            name: '图例二',
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0],
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: colorList[0],
                    shadowColor: colorList[0],
                    shadowBlur: 10
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(110,202,167,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(110,202,167,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            type: 'line',
            smooth: true,
            // symbol: 'emptyCircle',
            showSymbol: false,
            data: data.dataValue2,
            name: '图例三',
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1],
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: colorList[1],
                    shadowColor: colorList[1],
                    shadowBlur: 10
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(104,109,137,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(104,109,137,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            type: 'line',
            smooth: true,
            // symbol: 'emptyCircle',
            showSymbol: false,
            data: data.dataValue3,
            name: '图例四',
            itemStyle: {
                normal: {
                    color: colorList[2],
                    borderColor: colorList[2],
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: colorList[2],
                    shadowColor: colorList[2],
                    shadowBlur: 10
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(229,185,52,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(229,185,52,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            type: 'line',
            smooth: true,
            // symbol: 'emptyCircle',
            showSymbol: false,
            data: data.dataValue4,
            name: '图例五',
            itemStyle: {
                normal: {
                    color: colorList[3],
                    borderColor: colorList[3],
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: colorList[3],
                    shadowColor: colorList[3],
                    shadowBlur: 10
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(222,110,83,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(222,110,83,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            type: 'line',
            smooth: true,
            // symbol: 'emptyCircle',
            showSymbol: false,
            data: data.dataValue5,
            name: '图例六',
            itemStyle: {
                normal: {
                    color: colorList[4],
                    borderColor: colorList[4],
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: colorList[4],
                    shadowColor: colorList[4],
                    shadowBlur: 10
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(119,199,231,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(119,199,231,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            type: 'line',
            smooth: true,
            // symbol: 'emptyCircle',
            showSymbol: false,
            data: data.dataValue6,
            name: '图例七',
            itemStyle: {
                normal: {
                    color: colorList[5],
                    borderColor: colorList[5],
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: colorList[5],
                    shadowColor: colorList[5],
                    shadowBlur: 10
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: 'rgba(234,158,103,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(234,158,103,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
	]
};