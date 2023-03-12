var title = "年龄分布";
var xdata = ['≥0月～﹤1月','≥1月～﹤6岁','≥6岁～﹤14岁','≥14岁～﹤20岁','≥20岁～﹤30岁','≥30岁～﹤40岁','≥40岁～﹤50岁','≥50岁～﹤60岁','≥60岁～﹤70岁','≥70岁以上'];
var ydata = ['2013','2014','2015','2016'];
var legenddata = ydata;
var vdata = [[1,43,88,375,5780,5804,8129,5113,6607,8149],
	[22,563,955,2398,24126,16625,26580,16060,18148,17869],
	[33,736,1396,2879,31640,20220,34652,21985,24707,23849],
	[109,2899,4166,7134,61125,35392,48528,32253,33669,32073]];
var flag = true; //开关

var myChart = echarts.init(document.getElementById('chart-panel'));

//默认
(function(){
	drawFun01();
})();


/**画柱图**/
function drawFun01(option){
	var series = [];
	
	//拼柱状图数据
	$.each(vdata, function(i, v) {
	    var bs = {
	        name: ydata[i],
	        type: 'bar',
	        data: v,
	        itemStyle:{normal:{color:''}},
	        label: {normal: {show: true, position: 'top'}},
	        barWidth:''
	    };
	    series.push(bs);
	});
		
	//柱状图配置参数
	option =  {
	    title:{
	    	text: title,
	    	right:'center'
	    },
	    toolbox: {
	        right: 30,
	        feature: {
	            //切换图表类型
	            myFormula:{
	                show: true,
	                title: '图表切换',
	                icon: 'path://M512 8.448a501.248 501.248 0 1 0 501.248 501.248A503.04 503.04 0 0 0 512 8.448z m0 743.68a38.912 38.912 0 0 1-55.04-55.04 28.672 28.672 0 0 1 22.016-11.008 37.632 37.632 0 0 1 38.656 38.656 25.6 25.6 0 0 1-5.632 27.392z m110.08-314.112a220.416 220.416 0 0 1-60.672 66.048 162.048 162.048 0 0 0-44.032 44.032 103.68 103.68 0 0 0-11.008 44.032v27.648h-55.04v-27.392a198.144 198.144 0 0 1 11.008-60.672 123.648 123.648 0 0 1 55.04-49.664 210.432 210.432 0 0 0 49.664-49.664 93.184 93.184 0 0 0 16.64-55.04 70.656 70.656 0 0 0-22.016-55.04 92.416 92.416 0 0 0-66.048-16.64 174.848 174.848 0 0 0-110.08 44.032v-65.792a230.4 230.4 0 0 1 115.456-33.024 134.656 134.656 0 0 1 99.072 33.024 119.808 119.808 0 0 1 38.656 88.064 146.688 146.688 0 0 1-16.64 66.048z',
	                onclick: function(){
	                    changeType();
	                }
	            }
	        }
	    },
	    legend: {
	        data: legenddata,
	        type:'scroll',
	        top:'8%'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {          
	            type: 'shadow'     
	        }
	    },
	    grid: {
	        top:'20%',
	        left: '5%',
	        right: '4%',
	        bottom: '12%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisLine:{lineStyle:{color:'#000'}},
	            data: xdata,
	            axisLabel: {
	            	interval: 0,
	            	rotate: 50,
	            	textStyle:{color:'#000'}
	            }
	        }
	    ],
	    yAxis: [
	        {
	            name:'',
	            type: 'value',
	            axisLine:{
	            	lineStyle:{color:'#000'}
	            },
	            axisLabel: {
	            	textStyle:{color:'#000'},
	                formatter:function(value){
	                	if(value>=100000000){
	                		return value/100000000+' 亿';
	                	} else if(value>=1000000){
	                		return value/10000+' 万';
	                	} else {
	                		return value+'';
	                	}
	                },
	            }
	        }
	    ],
	    dataZoom: [{
	        show: true,
	        height: 30,
	        bottom: 10,
	        startValue: xdata[0],
	        endValue: xdata[9],
	        handleSize: '100%',
	    }, {type: 'inside'}],
	    series: series
	};
	
	//?
	myChart.setOption(option);
	window.onresize = myChart.resize;
}

    
/**画饼图**/
function drawFun02(){
	var nowIndex = 0;
	var angleXdata = [];
	var pieData = [];
	var series = [];
	
	//拼x轴极坐标配置
	$.each(xdata, function(i,v){
		var angleX = {
			value: v,
			textStyle:{
				fontSize: 16,
				fontWeight: "bold"
			}
		}
		angleXdata.push(angleX);
	});

	//拼柱状图配置项(极坐标)
	$.each(vdata, function(i, v) {
		var bs = {
	        type: 'bar',
	        name: ydata[i],
	        data: v,
	        coordinateSystem: 'polar',
	        stack: 'a',
	        itemStyle: {
	            normal: {
	                borderWidth: 4,
	                borderColor: '#ffffff',
	            },
	            emphasis: {
	                borderWidth: 0,
	                shadowBlur: 10,
	                shadowOffsetX: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
	    };
	    series.push(bs);
	});

	//拼饼图数据(默认[vdata[x][0]])
	$.each(vdata, function(i, v) {
		var pie = {
	        name: ydata[i],
	        value: v[0]
	    };
	    pieData.push(pie);
	});

	//配置饼图配置项
	var last_series = {
        name: '该年龄段年份占比',
        type: 'pie',
        radius: ['85%', '90%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b} : {c} ({d}%)'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'normal'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: pieData,
        legend: {
            show: false,
            orient: 'vertical',
            x: 'right',
            y: 'top',
            data: [ydata[0], ydata[1], ydata[2], ydata[3]]
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 3,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    };
	
	series.push(last_series);
	
	var option = {
	    title: {
	        text: title,
	        //subtext: '点击极坐标系下即可与圆环图交互',
	        textAlign: 'left'
	    },
	    toolbox: {
	        right: 30,
	        feature: {
	            //切换图表类型
	            myFormula:{
	                show: true,
	                title: '图表切换',
	                icon: 'path://M512 8.448a501.248 501.248 0 1 0 501.248 501.248A503.04 503.04 0 0 0 512 8.448z m0 743.68a38.912 38.912 0 0 1-55.04-55.04 28.672 28.672 0 0 1 22.016-11.008 37.632 37.632 0 0 1 38.656 38.656 25.6 25.6 0 0 1-5.632 27.392z m110.08-314.112a220.416 220.416 0 0 1-60.672 66.048 162.048 162.048 0 0 0-44.032 44.032 103.68 103.68 0 0 0-11.008 44.032v27.648h-55.04v-27.392a198.144 198.144 0 0 1 11.008-60.672 123.648 123.648 0 0 1 55.04-49.664 210.432 210.432 0 0 0 49.664-49.664 93.184 93.184 0 0 0 16.64-55.04 70.656 70.656 0 0 0-22.016-55.04 92.416 92.416 0 0 0-66.048-16.64 174.848 174.848 0 0 0-110.08 44.032v-65.792a230.4 230.4 0 0 1 115.456-33.024 134.656 134.656 0 0 1 99.072 33.024 119.808 119.808 0 0 1 38.656 88.064 146.688 146.688 0 0 1-16.64 66.048z',
	                onclick: function(){
	                    changeType();
	                }
	            }
	        }
	    },
	    tooltip: {
	        trigger: 'item',
	        padding: 10,
	        backgroundColor: '#222',
	        borderColor: '#777',
	        borderWidth: 1,
	        formatter: tooltipFormatter,
	    },
	    angleAxis: {
	        type: 'category',
	        data: angleXdata,
	        z: 10
	    },
	    polar: {
	        center: ['50%', '50%'],
	        radius: 260,
	    },
	    radiusAxis: {},
	    series: series
	}
	
    //
	function tooltipFormatter(params) {
		//console.log(params);
	    var valuesFormatter = [];
	    if (params.componentSubType == 'pie') {
	        valuesFormatter.push(
	            '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
	            option.angleAxis.data[nowIndex].value + '<br>' + '</div>' +
	            '<span style="color:' + params.color + '">' + params.name + '</span>: ' + params.value
	        );
	    } else {
	        valuesFormatter.push(
	            '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
	            params.seriesName + "年" +
	            '</div>' +
	            '<span style="color:' + params.color + '">' + params.name + '</span>: ' + params.value + '<br>');
	    }
	
	    return valuesFormatter;
	}
    
    myChart.on('click', function(params) {
	    if (params.componentSubType != 'pie') {
	        nowIndex = params.dataIndex; //当前年龄段(xdata)对应的数组索引
	        var lastSeries = series.length-1;
	        
	        $.each(vdata, function(i,v) {
	        	option.series[lastSeries].data[i].value = v[nowIndex];
	        	option.series[lastSeries].data[i].name = ydata[i];
	        });
	        
//	        var ageData = $.extend(true, [], xdata);
//	        xdata[nowIndex] = {
//	            value: xdata[nowIndex],
//	            textStyle: {
//	                fontSize: 24,
//	            }
//	        };
//	        option.angleAxis.data = ageData;
	        myChart.setOption(option);
	    }
	});
	
    myChart.setOption(option);
    window.onresize = myChart.resize;
}


//公式显示（用于toolbox内部）
function changeType() {
	myChart.clear();
	if(flag){
		drawFun02();
	}else{
		drawFun01();
	}
	flag = !flag;
}