
var chartName =['理论+实践','理论','实践','纯实践','实训'];
var chartData =[68,98,186,240,563];

var colorList = [{
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#6569FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00C0F0' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                   offset: 0,
                    color: '#6569FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00C0F0' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                    color: '#6569FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00C0F0' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                   offset: 0,
                    color: '#6569FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00C0F0' // 100% 处的颜色
                }],
            },{
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#6569FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00C0F0' // 100% 处的颜色
                }],
            }];
var option = {
            //  backgroundColor: '#fff',
				yAxis: {
					type: 'category',
					axisLine: {
						show: false //坐标线
					},
					axisTick: {
						show: false //小横线
					},
					axisLabel: {
						color: '#999' //坐标轴字颜色
					},
					data: chartName
				},

				xAxis: {
					show: false,
				},
				grid: {
					top: '0',
					right: '50',
					left: '80',
					bottom: '0' //图表尺寸大小
				},
				series: [{

					type: 'bar',
					barWidth: '15px',  //条条宽度
					showBackground: false,
					backgroundStyle: {
	
					},
					label: {
						show: true,
						position: 'right', //每一条的数据位置
                         color:function(params) {
                    return colorList[params.dataIndex]
                },
					},
					itemStyle: {

						normal: {
							color:function(params) {
                    return colorList[params.dataIndex]
                }, //每个数据的颜色
                            barBorderRadius: [20, 20, 20, 20], //圆角
							shadowBlur: 10,
							shadowColor: 'rgba(0, 103, 255, 0.2)',
							shadowOffsetX: -5,
							shadowOffsetY: 5,

						},

					},
					data: chartData
				}]
			};
return option;