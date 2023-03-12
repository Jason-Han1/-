var gauge_value= 10;
var myRate1 = 100;
option = {
   title: {
			x: "center",
			bottom: 40,
			text: 'BBB',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 55,
				color: "#323232"
			},
		},
		tooltip: {
			show: true,
		},
		series: [{
             
            type: 'gauge',
           	center: ['50%', '55%'], // 默认全局居中  
			radius: 233,
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
           	startAngle: 200,
			endAngle: -20,
		 
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#8f8f8f',
                    width: 1
                },
                length: 8,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#8f8f8f',
                }
            },
            axisLabel: {
                distance: 8,
                textStyle: {
                    color: "#8f8f8f",
                    fontSize: "14",
                    fontWeight:"bold"
                },
                	formatter: function(e) {
					switch(e + "") {
						case "10":
							return "10";
 
						case "20":
							return "20";

						case "30":
							return "30";

						case "40":
							return "40";
							
						case "50":
							return "50";
							
						case "60":
							return "60";
								
						case "70":
							return "70";
								
					    case "80":
							return "80";
								
					    case "90":
							return "90";							 
								
					    case "100":
							return "100";
						default:
							return e;
					}
				},
				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        } ,{
				startAngle: 200,
			endAngle: -20,
			name: '实际完成',
			type: 'gauge',
		center: ['50%', '55%'], // 默认全局居中  
			radius: 103,
			min: 0,
			max: 100,
			splitNumber: 0,
			axisLine: { // 坐标轴线  
				lineStyle: {
					color: [
						[0.66, '#dddddd'],
						[1, '#dddddd']
					], // 属性lineStyle控制线条样式  
					width: 4
				}
			},

			 
			axisLabel: { // 坐标轴小标记  
				textStyle: { // 属性lineStyle控制线条样式  
					fontWeight: 'bolder',
					fontSize: 16,
					color: 'rgba(30,144,255,0)',
				}
			},
			splitLine: { // 分隔线  
				length: 10, // 属性length控制线长  
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
					width: 0,
					color: '#444'
				}
			},
			pointer: { // 分隔线 指针  
				color: '#666666',
				width: 0,
				length: 230
			},
			detail: {
				show: false
			},

		}, {
			name: '信用分',
			type: 'gauge',
				startAngle: 200,
			endAngle: -20,
			radius: 180,
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 100,

			axisLine: {
				show: false,
				lineStyle: {
					width:25,
					shadowBlur: 0,
					color: [
						[0.2, '#E43F3D'],
						[0.4, '#E100E2C'],
						[0.6, '#DDBD4D'],
						[0.8, '#7CBB55'],
						[1, '#9CD6CE']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 30
				}
			},
			itemStyle: {
            normal: {
                color: "#323232",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};