let namelist = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
let percentList = [1, 3, 1, 4, 4, 6, 10, 5, 6, 9, 15, 10, 8, 13, 2, 3];
option = {
		backgroundColor: '#fff',
		title: {
			text: '风频',
			top: 10,
			subtext: '',
			x: 'center',
			textStyle: {
				color: '#666'
			}
		},
	    angleAxis: {
	        type: 'category',
			startAngle: 101.24,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#9a9a9a',
					width: 1,
					
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#333',
					width: 3,
					
				}
			},
			axisLabel: {
				show: true,
				color: '#1c2383',
				fontWeight: 'bold',
				// formatter: '{value} %'
			},
			// splitArea: {
			// 	areaStyle: {
			// 		color: ['rgba(4, 246, 250, 0.8)','rgba(52, 55, 200, 0.8)']
			// 	}
			// },
			z: 10,
	        data: namelist
	    },
	    radiusAxis: {
	    	z: 20,
	    	axisLabel: {
	    		show: true,
	    		color: '#14b178',
	    		fontWeight: 'bold',
	    		formatter: '{value} %'
	    	},
	    	splitLine: {
	    		show: true,
	    		lineStyle: {
	    			color: '#054b07',
	    			width: 1,
	    			
	    		}
	    	},
	    	axisLine: {
	    		show: true,
	    		lineStyle: {
	    			color: '#12510e',
	    			width: 1,
	    			
	    		}
	    	},
	    },
	    polar: {
	    },
		tooltip: {
			trigger: 'item',
			// position: ['48.5%', '49.2%'],
// 			backgroundColor: 'rgba(224, 239, 235, 0.8)',
			borderColor: '#12510e',
			borderWidth: 1,
			textStyle: {
				color: '#fff',
				fontWeight: 'bold'
			},
			axisPointer: {
				type: "cross"
			},
			formatter: "{b}: {c}%"
		},
	    series: [{
			// z: 21,
	        type: 'bar',
			barWidth: '99%',
	        data: percentList,
	        coordinateSystem: 'polar',
			showBackground: true,
			backgroundStyle: {
				color:'#fff',
			},
	        color: ['#054b07'],
			itemStyle: {
				normal: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(189, 203, 203, 0.5)'
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(105, 113, 113, 0.5)',
					opacity: 0.9
				}
			}
	    }]
	};