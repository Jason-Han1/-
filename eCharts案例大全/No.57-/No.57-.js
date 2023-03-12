 let radius = [0, '45%']
	let radius1 = ['47%', '55%'];
	let radius2 = ['59%', '61%'];
	let radius3 = ['61.5%', '63.5%'];
	let radius4 = ['64%', '67%'];

	let value = 60;
	 option = {
	   backgroundColor:"#000",
	    title: [{
	        text: value + '%',
	        x: 'center',
	        top: '52%',
	        textStyle: {
	            color: '#ffffff',
	            fontSize: 20,
	            fontWeight: '100',
	        },
	        z:100
	    }, {
	        text: '结案率',
	        x: 'center',
	        top: '42%',
	        textStyle: {
	            fontSize: '50',
	            color: '#fdf914',
	            fontFamily: 'Lato',
	            foontWeight: '600',
	        },
	         z:100
	    }],
	    polar: {
	        radius: radius1,
	        center: ['50%', '50%'],
	    },
	    angleAxis: {
	        max: 100,
	        show: false,
	    },
	    radiusAxis: {
	        type: 'category',
	        show: true,
	        axisLabel: {
	            show: false,
	        },
	        axisLine: {
	            show: false,

	        },
	        axisTick: {
	            show: false
	        },
	    },
	    series: [
	        {
	            name: '',
	            type: 'bar',
	            roundCap: true,
	            barWidth: 60,
	            showBackground: true,
	            backgroundStyle: {
	                color: 'rgba(0, 0, 0,1)',
	            },
	            data: [value],
	            coordinateSystem: 'polar',

	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
	                        offset: 0,
	                        color: '#00FFC0'
	                    }, {
	                        offset: 1,
	                        color: '#136AED'
	                    }]),
	                }
	            }

	        }, 
	        {
	            name: '',
	            type: 'pie',
	            startAngle: 90,
	            radius: radius2,
	            hoverAnimation: false,
	            center: ['50%', '50%'],
	            itemStyle: {
	                normal: {
	                    labelLine: {
	                        show: false
	                    },
	                    color: 'rgba(34,72,162, .5)',
	                    shadowBlur: 100,
	                    shadowColor: 'rgba(34,72,162, 1)',
	                }
	            },
	            data: [{
	                value: 100,

	            }]
	        },
	        {
	            name: '',
	            type: 'pie',
	            startAngle: 90,
	            radius: radius3,
	            hoverAnimation: false,
	            center: ['50%', '50%'],
	            itemStyle: {
	                normal: {
	                    labelLine: {
	                        show: false
	                    },
	                    color: 'rgba(34,72,162, .7)',
	                    shadowBlur: 100,
	                    shadowColor: 'rgba(34,72,162, 1)',
	                }
	            },
	            data: [{
	                value: 100,

	            }]
	        },
	        {
	            name: '',
	            type: 'pie',
	            startAngle: 90,
	            radius: radius4,
	            hoverAnimation: false,
	            center: ['50%', '50%'],
	            itemStyle: {
	                normal: {
	                    labelLine: {
	                        show: false
	                    },
	                    color: 'rgba(34,72,162, 0.9)',
	                    shadowBlur: 300,
	                    shadowColor: 'rgba(100,143,244, 0.5)',
	                }
	            },
	            data: [{
	                value: 100,

	            }]
	        },
	        {
	            type: 'pie',
	            hoverAnimation: false,
	            legendHoverLink: false,
	            radius: radius,
	            z: 10,
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            // 模拟中间文字
	            label: {
	                show: false,
	            },
	            silent: true,
	            data: [{
	                value: 0,
	                itemStyle: {
	                    color: {
	                        type: 'radial',
	                        x: 0.5,
	                        y: 0.5,
	                        r: 0.5,
	                        colorStops: [{
	                            offset: 0,
	                            color: 'rgba(2, 11, 30, 1)' // 0% 处的颜色
	                        }, {
	                            offset: .9,
	                            color: 'rgba(2, 11, 30, 1)' // 50% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: 'rgba(19, 106, 237, 0.3)' // 100% 处的颜色
	                        }],
	                        global: false // 缺省为 false
	                    }
	                }
	            }]
	        },
	       
	    ]
	};
