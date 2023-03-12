option = {
				backgroundColor: '#fff',
			    tooltip: {
			    trigger: 'axis',
					backgroundColor: 'rgba(72,179,255,0.6)',
					position:function (point, params, dom, rect, size) {
					  // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
					  // 提示框位置
					  var y = 0; // y坐标位置
					 
					  // 当前鼠标位置
					  var pointX = point[0];
					  var pointY = point[1];
					 
					  // 外层div大小
					  // var viewWidth = size.viewSize[0];
					  // var viewHeight = size.viewSize[1];
					 
					  // 提示框大小
					  var boxWidth = size.contentSize[0];
					  var boxHeight = size.contentSize[1];
					 
					  // boxWidth > pointX 说明鼠标左边放不下提示框
					  if (boxWidth > pointX) {
					    x = 5;
					  } else { // 左边放的下
					    x = pointX - boxWidth;
					  }
					  // boxHeight > pointY 说明鼠标上边放不下提示框
					  if (boxHeight > pointY) {
					    y = 5;
					  } else { // 上边放得下
					    y = pointY - boxHeight;
					  }
					 
					  return [x, y];
					},
			        // formatter: function (params) {
			        //     params = params[0];
			        //     // var date = new Date(params.name);
			        //     return '审核数: ' + data;
			        // },
					axisPointer: {
						animation: false,
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#48b3ff'
								}, {
									offset: 0.5,
									color: '#48b3ff',
								}, {
									offset: 1,
									color: '#48b3ff'
								}],
								global: false
							}
						},
					}
			    },
				grid: {
					top: '20%',
					left: '10%',
					right: '10%',
					bottom: '10%',
				},
			    xAxis: {
					show: true,  //不显示X轴坐标
			    type: 'category',
					boundaryGap: false,
					axisLine: { //坐标轴轴线相关设置。数学上的x轴
						show: true,
					},
					 data:
					 ['任务11','任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11',
					 '任务11','任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11',
					 '任务11','任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11', '任务11'
					 ]
			    },
			    yAxis: {
					type: 'value',
					name: '',//纵坐标的单位
					show:true,  //不显示Y轴坐标
					axisTick: {
						show: false,
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(131,101,101,0.2)',
							type: 'dashed',
						}
					}
			    },
			 dataZoom: [{
        type: 'inside',
        start: 30,
        end: 60
    }, {
        start: 30,
        end: 60
    }],
			    series: [{
					name:'任务数(件)',
			        type: 'line',
			        showSymbol: true,
					symbol: 'circle',
					symbolSize: 12,
					smooth: 0.3,
			        hoverAnimation: false,
					tooltip: {
						show: true
					},
			        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122,
			        220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122,
			        220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122
			        ],
					lineStyle: {
						normal: {
							color: '#48b3ff', // 线条颜色
							
						},
					},
					 itemStyle : {
						normal : {
							color:'#fff',
							borderColor:'#48b3ff',
							borderWidth:2,
						}
					},
					areaStyle: { //区域填充样式
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(65, 165, 245,1)'
								},
								{
									offset: 1,
									color: 'rgba(228, 244, 255,0)'
								}
							], false),
							shadowBlur: 0 
						}
					},
			    }]
			};
			