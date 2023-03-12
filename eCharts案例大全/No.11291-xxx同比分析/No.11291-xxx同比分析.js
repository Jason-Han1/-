var colors = ['red',  '#3B9AD2','#FF7322'];

	     	var xData = function() {
	     	    var data = [];
	     	    for (var i = 1; i < 13; i++) {
	     	        data.push(i+"月");
	     	    }
	     	    return data;
	     	}();
	     	option = {
	     	     backgroundColor: "#113A71",
	     	    title: {
	     	        text: 'xxx同比分析',
	     	          left:'45%',
	     	           top:'10%',
	     	        textStyle:{
	     	             fontSize: '15' ,
	     	             color: "#fff"
	     	        }
	     	    },
	     	    "tooltip": {
	     	        "trigger": "axis",
	     	        "axisPointer": {
	     	            "type": "shadow",
	     	            textStyle: {
	     	                color: "#fff"
	     	            }

	     	        },
	     	    },
	     	   grid: {
	     	        top:'20%',
	     	        bottom:'45%',
	     	        left:'20%',
	     	        right:'20%',
	     	    },   
	     	    legend: {
	     	        data:['国际货量','国内货量','同比'],
	     	        align: 'right',
	     	         top:'14%',
	     	         right:'20%',
	     	        textStyle:{
	     	            color:'#FFFFFF'
	     	        }
	     	        
	     	    },
	     	     "calculable": true,
	     	    "xAxis": [{
	     	        "type": "category",
	     	        "axisLine": {
	     	            lineStyle: {
	     	                color: '#000'
	     	            }
	     	        },
	     	        "splitLine": {
	     	            "show": false
	     	        },
	     	        "axisTick": {
	     	            "show": false
	     	        },
	     	        "splitArea": {
	     	            "show": false
	     	        },
	     	        "axisLabel": {
	     	            "interval": 0,
	     	            textStyle:{
	     	                fontSize:10,
	     	                color: '#ffffff'
	     	            }
	     	        },
	     	        "data": xData,
	     	    }],
	     	    yAxis: [
	     	        {
	     	            type: 'value',
	     	            name: '吨',
	     	            min: 0,
	     	            max: 2000,
	     	            position: 'left',
	     	            axisLine: {
	     	                lineStyle: {
	     	                    color: '#ffffff'
	     	                }
	     	            },
	     	            axisLabel: {
	     	                formatter: '{value} '
	     	            }
	     	        },
	     	        {
	     	            type: 'value',
	     	            name: '',
	     	            position: 'right',
	     	            axisLine: {
	     	                lineStyle: {
	     	                    color: '#ffffff'
	     	                }
	     	            },
	     	            axisLabel: {
	     	                formatter: '{value} %'
	     	            }
	     	        }
	     	    ],
	     	    series: [
	     	        {"name": '国际货量',
	     	            "type": "bar",
	     	            "stack": "总量",
	     	            "barMaxWidth": 15,
	     	            "barGap": "10%",
	     	            "itemStyle": {
	     	                "normal": {
	     	                   "color": colors[0],
	     	                    "label": {
	     	                        "show": true,
	     	                        "textStyle": {
	     	                            "color": "#fff"
	     	                        },
	     	                        "position": "insideTop",
	     	                        formatter: function(p) {
	     	                            return p.value > 0 ? (p.value) : '';
	     	                        }
	     	                    }
	     	                }
	     	            },
	     	            data:[421,356,719,658,458,443,620,416,551,721,466,632]
	     	            
	     	        },
	     	        {"name": '国内货量',
	     	            "type": "bar",
	     	            "stack": "总量",
	     	            "itemStyle": {
	     	                "normal": {
	     	                     "color": colors[1],
	     	                    "barBorderRadius": 0,
	     	                    "label": {
	     	                        "show": true,
	     	                        "position": "top",
	     	                        formatter: function(p) {
	     	                            return p.value > 0 ? (p.value) : '';
	     	                        }
	     	                    }
	     	                
	     	                /*normal:{
	     	                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	     	                    offset: 0,
	     	                    color: '#00b0ff'
	     	                }, {
	     	                    offset: 0.8,
	     	                    color: '#7052f4'
	     	                }], false)}*/
	     	            }
	     	            },
	     	            data:[121,256,119,258,358,343,220,216,151,221,266,532]
	     	            
	     	        },
	     	        {
	     	        name:'同比',
	     	        yAxisIndex: 1,
	     	        symbolSize:10,
	     	        symbol:'circle',
	     	        type:'line',
	     	        "itemStyle": {
	     	            "normal": {
	     	                "color": colors[2],
	     	                "barBorderRadius": 0,
	     	                "label": {
	     	                    "show": true,
	     	                    "position": "top",
	     	                    formatter: function(p) {
	     	                        return p.value > 0 ? (p.value) : '';
	     	                    }
	     	                }
	     	            }
	     	        },
	     	        data:[-11,4,-7,-8,6,-2,10,8,10,-5,5,-4]
	     	    }]
	     	};