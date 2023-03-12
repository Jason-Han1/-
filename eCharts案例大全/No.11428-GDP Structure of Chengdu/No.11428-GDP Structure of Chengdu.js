option={
"backgroundColor" : "#344b57",
"title": {
        "text": 'GDP Structure of Chengdu',
		x:"4%",
	textStyle:{
		color:"#fff",
		fontSize:'22'
    },
	subtextStyle:{
		color:'#90979c',
		fontSize:'16',
		
	},
},
	'tooltip':{
		"trigger":"axis",
		"axisPointer":{
			"type":"shadow",
			textStyle:{
				color:"#fff"
			}
		},
	},
	"grid":{
		"borderWidth":0,
		"top":110,
		"bottom":95,
		textStyle:{
			color:"#fff"
		}
	},
	"legend":{
		x: "4%",
		top: '11%',
		textStyle:{
			color: '#90979c',
		},
		"data":["Primary Industry","Secondary Industry","Tertiary Industry","Whole GDP"]
	},
	
	"calculable":true,
	
    xAxis: [{
		'type':'category',
		
        data: ['2009','2010','2011','2012','2013','2014','2015','2016','2017'],
        'splitLine':{
			'show': false
		},
        axisTick: {
            show: false
        },
		"splitArea":{
			"show":false
		},
        axisLine: {
			lineStyle: {
				color: '#90979c'
			}
        },
    }],
    yAxis: [{
		"type":"value",
		"splitLine":{
			"show":false
		},
        "axisLine": {
            lineStyle:{
				color:"#90979c"
			}
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            "interval":0,
        },
		"splitArea":{
			"show":false
		},
		
    }],
     dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
        },
        {   // 这个dataZoom组件，也控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
        }
    ],
    series: [

		{
		"name":"Secondary Industry",
		'type':'bar',
		'stack':'总量',
		'barMaxWidth':35,
		'barGap':'10%',
		'itemStyle':{
			'normal':{
				'color':'rgba(255,144,128,1)',
				'label':{
					'show':true,
					'textStyle':{
						'color':"#fff"
					},
					'position':'insideTop',
					formatter: function(p){
						return p.value > 0 ? (p.value):"";
					}
				}
			}
		},
		'data':[2001.80,2480.90,3143.82,3143.820,3143.82,4508.53,4723.49,5232.02,5998.19]
		},
		
		{
		"name":"Tertiary Industry",
		'type':'bar',
		'stack':'总量',
		'barMaxWidth':35,
		'barGap':'10%',
		'itemStyle':{
			'normal':{
				'color':'rgba(0,191,183,1)',
				'label':{
					'show':true,
					'textStyle':{
						'color':"#fff"
					},
					'position':'insideTop',
					formatter: function(p){
						return p.value > 0 ? (p.value):"";
					}
				}
			}
		},
		'data':[2233.04, 2785.30, 3383.42, 4025.2, 4574.23, 5190.99, 5704.52,6463.27,7390.34]
		},
		
		{
		"name":"Whole GDP",
		'type':'line',
		'stack':'总量',
		symbolSize:10,
		symbol:'circle',
		'itemStyle':{
			'normal':{
				'color':'rgba(128,100,280,1)',
				'label':{
					'show':true,
					'textStyle':{
						'color':"#fff"
					},
					'position':'insideTop',
					formatter: function(p){
						return p.value > 0 ? (p.value):"";
					}
				}
			}
		},
		'data':[4503, 5551.3, 6854.58, 8138.9, 9108.89, 10056.59, 10801.16,12170.23,13889.39]
		},
		
		{
		"name":"Primary Industry",
		'type':'bar',
		'stack':'总量',
		'barMaxWidth':35,
		'barGap':'10%',
		'itemStyle':{
			'normal':{
				'color':'rgba(144,280,128,1)',
				'label':{
					'show':false,
					'textStyle':{
						'color':"#fff"
					},
					'position':'insideTop',
					formatter: function(p){
						return p.value > 0 ? (p.value):"";
					}
				}
			}
		},
		'data':[
		267.77,
		285.1,
		327.34,
		348.1,
		353.17,
		357.07,
		373.15,
		474.94,
		500.87
		]
		},
		
	]
	}