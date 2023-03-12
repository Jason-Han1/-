// var gauge_value=1.5
option = {
   backgroundColor: '#060e2b',
  
   title: {
			show: true,
			x: "center",
			bottom: 10,
	     	text: 'PUE ' + 1.5,
			textStyle: {
				fontWeight: 'normal',
				fontSize: 12,
				color: "#33ffff"
			},
		},
		tooltip: {
			show: true,
			backgroundColor: '#101E44',
			textStyle: {
				color: 'fff'
			},
			formatter: function(param) {
				//return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
				return '<em style="color:#ffffff;">' + param.value + '%</em> '
			}

		},
		series: [{
                name: "白色圈刻度",
                type: "gauge",
                radius: "80%",
                center: ["50%", "75%"],
                startAngle: 180,//刻度起始
                endAngle: 0,//刻度结束
                splitNumber: 5|| 100,
                min: 1,
                max: 2,
                z: 4,
                axisTick: { show: false},
                splitLine: {
                    length: 16,//刻度节点线长度
                    lineStyle: {width: 2,  color: 'rgba(0,0,0, 0.9)'}//刻度节点线
                }, 
                axisLabel: {color: '#',  fontSize: 12, },//刻度节点文字颜色
                pointer: {show: false },
                axisLine: {
                    lineStyle: {opacity: 0}
                },
                detail: {show: false},
                data: [{value: 0,name: ""}]
            }, {
                name: '灰色内圈',//刻度背景
                type: 'gauge',
                z: 2,
                radius: '80%',
                startAngle: 180,
                endAngle: 0,
                
                center: ["50%", "75%"], //整体的位置设置
                axisLine: { // 坐标轴线
                    lineStyle: {
                width: 15,
                shadowBlur: 0,
                color: [
                    [0,'#1aadd8'],
                    [0.3, '#1798c1'],
                    [0.5, '#d4701b'],
                    [0.7, '#bf3032'],
                    [1, '#b7203e']
                ]
            }
                },
                splitLine: {show: false},
                data: [{show: false, value: ' '}],//作用不清楚
                axisLabel: {show: false},
                pointer: {show: false},
                axisTick: { show: false},
                detail: {show: 0}
            }, {
            	name: '指针',
                type: 'gauge',
                z: 6,
                radius: '95%',
                startAngle: 180,
                endAngle: 0,
                center: ["50%", "75%"], //整体的位置设置
                axisLine: {
                   lineStyle: {// 属性lineStyle控制线条样式//指针颜色
                        color: [[1, '#33ffff']],  width:0
                    }
                },
                axisTick: {show: false},
                splitLine: { show: false},
                axisLabel: {show: false},
                data: [1.5],//指针位置
                pointer: { show: true, width: 5, length: '55%'},
                detail: {show: 0}
            }, {
                    type: 'gauge',
                    center: ["50%", "75%"],
                    radius: '85%',  // 1行3个
                    splitNumber: 5|| 100,
                    min: 1,
                    max: 2,
                    startAngle: 180,//刻度起始
                    endAngle: 0,//刻度结束
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#02e3f0']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#02e3f0',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -14,
                        lineStyle: {
                            color: '#02e3f0',
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: '#02e3f0',
                            fontSize: '14',
                            fontWeight: 'bold'
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                }]
};