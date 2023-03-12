var x = [];
var xx = [];
var y = [];
var Average = 100;
for(var i =0;i<80;i++){

	y.push(i)
	var random = parseInt(Math.random()*200);

	x.push(-Average+random)
	
	xx.push(-Average+random)
}
xx.sort(function (a, b) {
  return a-b;
}); 

var min = xx[0]; 

var max = xx[xx.length - 1];  
option = {
			title: {

		        subtext: '(bpm)',

		   },
			grid: {
		        top: '15%',
		        left:'10%',
		        right:'5%',
		        bottom:'15%',
		        textStyle: {
		            color: "#fff"
		        }
		    },
		    tooltip: {
		        trigger: 'axis',
		        formatter: function(prams) {

		        	return prams[0].value+Average
					
		        }
		    },
		   
		    xAxis: [{
		        type: 'category',
		        splitLine: {
		            show: false
		        },
		        axisTick:{
		            show:false
		        },
		        axisLabel: {
	            	textStyle: {
	                	color: 'rgba(67, 66, 93, 0.45)'
		            }  
		        },
		        data:  y
		    }],
		    yAxis: [{

		        max:max,
		        min:min,
		        
		    }],
		    splitLine:{
	            show:true,
	            lineStyle:{
	                color:'rgba(0,0,0,0)'
	            }
	        },
	        
		    series: [
		        {
		        	symbol: "none", //去掉圆点
		            type: 'line',
		            data: x,
		            areaStyle: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgb(32,78,255,1)'
		                }, {
		                    offset: 1,
		                    color: 'rgb(207,218,255,0.35)'
		                }])
		            },
		            itemStyle:{
		                normal:{
		                    color:'rgba(32, 78, 255, 1)',
		                    shadowBlur: 40,
		                },
		            },
		        },
		        
		    ],
		    yAxis: [{
		        axisLine: {
		            show: false
		        },
		        min: min,
		        max: max,
		        scale: false,
		        type: "value",
		        minInterval: 50,
		        interval: 50,
		        axisLine: {
	                lineStyle: {
	                    color:'rgba(0,0,0,0)'
	                }
	           	},
	           	axisLabel: {
		            formatter: function (value) {
						return value+Average;
                    },
		            textStyle: {
		                color: 'rgba(67, 66, 93, 0.45)'
		            }  
		        },
		        splitArea: {
		            show: true,
		            areaStyle: {
		                "color": ["#ecebee", "#e8edff", "#edf9e7", "#ffe8d9", "#ffeeee"]
		            }
		        },
		    }]
		}