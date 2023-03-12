option = {
			color: ["#21a5de", '#fb4058'],
			legend: {
				data: ['发放', '回收']
			},
			tooltip:{
			    show:true,
			    formatter:function(){
			        return '指标：111<br/>指标：222'
			    }
			},
			series: [{
				name: '值',
				type: 'pie',
				clockWise: true, //顺时加载
				hoverAnimation: false, //鼠标移入变大
				radius: [159, 160],
				startAngle: 60,
				itemStyle: {
					normal: {
						label: {
							show: false,
						},
						labelLine: {
							show: false
						},
						barBorderRadius: 10
					}
				},
				data: [{
					value: 6,
					itemStyle: {
						normal: {
							borderWidth: 5,
							borderColor: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#7065ef' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#e665a1' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}
					}
				}, {
					value: 3,
					name: '回收',
					itemStyle: {
						normal: {
							borderWidth: 20,
							borderColor: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#fb4058' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#fd8b4e' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}
					}
				}, {
					value: 1,
					name: '发放',
					itemStyle: {
						normal: {
							borderWidth: 20,
							borderColor: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#21a5de' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#27cbd3' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}
					}
				}]
			}]
		};