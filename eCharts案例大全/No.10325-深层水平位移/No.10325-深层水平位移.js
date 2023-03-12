var data_array=	[
				 {"2019/8/12 08:00:00":[{"x1":14,"y1":10,"x2":25,"y2":22},{"x1":17,"y1":29,"x2":25,"y2":42},
				 {"x1":27,"y1":9,"x2":5,"y2":2},{"x1":15,"y1":29,"x2":5,"y2":2},{"x1":7,"y1":21,"x2":25,"y2":2},
				 {"x1":37,"y1":19,"x2":15,"y2":12},{"x1":27,"y1":22,"x2":15,"y2":42},{"x1":27,"y1":22,"x2":25,"y2":12},
				 {"x1":47,"y1":29,"x2":25,"y2":22},{"x1":27,"y1":21,"x2":25,"y2":21},{"x1":37,"y1":23,"x2":45,"y2":32},
				 {"x1":7,"y1":39,"x2":25,"y2":32},{"x1":13,"y1":20,"x2":35,"y2":20},{"x1":47,"y1":24,"x2":35,"y2":22},
				 {"x1":13,"y1":49,"x2":35,"y2":2},{"x1":15,"y1":25,"x2":45,"y2":19}]}
				];

//当前选中的时间
var current_check_time = "";

//X轴显示的数据
var x_rate_data = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

// 总时间数组
var timeData = [];

//总配置项数组
var data_option = [];

for (var i = 0; i < data_array.length; i++) {
		var single_x1_data = [];
		var single_x2_data = [];
		var single_y1_data = [];
		var single_y2_data = [];
		var json_data = data_array[i];
		//获取所有的时间
		for (var key in json_data) {
			timeData.push(key);
			var singleData = json_data[key];
			for (var j = 0; j < singleData.length; j++) {
				single_x1_data.push(singleData[j].x1);
				single_y1_data.push(singleData[j].y1);
				single_x2_data.push(singleData[j].x2);
				single_y2_data.push(singleData[j].y2)
			}
			data_option.push(setSingleOption(single_x1_data, single_y1_data,single_x2_data,single_y2_data));
		}
}

timeData = timeData.map(function(str) {
	return str.replace('2019/', '');
});

//当前选中时间
var current_check_time = timeData[timeData.length - 1];


var option={
		baseOption: {
			timeline: {
				show: false,
				bottom: 0,
				left: 36,
				right: 36,
				lineStyle: {
					color: '#000000'
				},
				itemStyle: {
					color: '#000000'
				},
				label: {
					color: '#000000'
				},
				type: 'slider',
				axisType: 'category',
				currentIndex: data_array.length - 1,
				loop: false,
				symbol: 'circle',
				symbolSize: 10,
				data: timeData,
				controlStyle: {
					showPlayBtn: false,
					itemSize: 12,
					color: '#000000',
					borderColor: '#000000'
				}
			},
		},
		options: data_option
	
};

function drawChecekedCharts(dom){
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById(dom));
	myChart.setOption(option);
}



function setSingleOption(single_x1_data, single_y1_data,single_x2_data,single_y2_data) {
	// 单个配置项
	var singleOption = {
		title: {
			text: '深层水平位移',
			x: 'center',
			textStyle: {
				color: '#000000'
			}
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params, ticket, callback) {
				var htmlStr = '';
					var zhtml="";
					var xhtml="";
				for (var i = 0; i < params.length; i++) {
					var param = params[i];
					var xName = param.name; //x轴的名称
					var seriesName = param.seriesName; //图例名称
					var value = param.value; //y轴值
					var color = param.color; //图例颜色
					
					xName = "当前深度:" + xName + "米";
					if (i === 0) {
						//htmlStr += current_check_time + '<br/>'; //当前选中时间
						htmlStr += xName + '<br/>'; // 当前深度
						htmlStr += current_check_time + '<br/>'
					}
					  
					var singleText= '<div>';
					    //为了保证和原来的效果一样，这里自己实现了一个点的效果
				    	singleText +=
						'<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
						color + ';"></span>';
					    //圆点后面显示的文本
					    singleText += seriesName + '：' + value;
					    singleText += '</div>';
                    
                    if(i%2==0){
                        
                        zhtml+=singleText;
                        	if(i==2){
					           zhtml += "08/13 08:00:00" + '<br/>'
				             }
                    }else{
                        xhtml+=singleText;
                    }
                 
				}
				 htmlStr=htmlStr+zhtml+xhtml;
				
				return htmlStr;
			}
		},
		legend: {
			data: ['x_当前值', 'x_对比值','y_当前值','y_对比值'],
		    orient:'horizontal',
		    x:'center',
		    y:'top',
		    padding: 35   
		},
		axisPointer: {
			link: {
				xAxisIndex: 'all'
			}
		},
		grid: [{
			left: 50,
			right: 50,
			height: '30%'
		}, {
			left: 50,
			right: 50,
			top: '55%',
			height: '30%'
		}],
		xAxis: [{
				type: 'category',
				name: '深度(m)',
				nameGap: 5,
				nameTextStyle: {
					color: '#000000'
				},
				boundaryGap: false,
				axisLine: {
					onZero: false,
					lineStyle: {
						type: 'solid',
						color: '#000000'
					}
				},
				data: x_rate_data
			},
			{
				gridIndex: 1,
				name: '深度(m)',
				type: 'category',
				nameGap: 5,
				nameTextStyle: {
					color: '#000000'
				},
				boundaryGap: false,
				axisLine: {
					onZero: false,
					lineStyle: {
						type: 'solid',
						color: '#000000'
					}
				},
				data: x_rate_data
			}
		],
		yAxis: [{
				name: 'x_位移量(mm)',
				nameGap: 20,
				nameTextStyle: {
					color: '#000000'
				},
				type: 'value',
				axisLine: {
					lineStyle: {
						color: '#000000'
					}
				},
				max: 50,
				min: -50
			},
			{
				gridIndex: 1,
				nameGap: 30,
				name: 'y_位移量(mm)',
				nameTextStyle: {
					color: '#000000'
				},
				type: 'value',
				axisLine: {
					lineStyle: {
						color: '#000000'
					}
				},
				max: 50,
				min: -50,
				inverse: false
			}
		],
		series: [{
				name: 'x_当前值',
				type: 'line',
				symbolSize: 8,
				hoverAnimation: true,
				data: single_x1_data,
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#c23531',
						}
					}
				}
			},
			{
				name: 'x_对比值',
				type: 'line',
				symbolSize: 8,
				hoverAnimation: true,
				data: single_x2_data,
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#2f4554'
						}
					}
				}
			},
			{
				name: 'y_当前值',
				type: 'line',
				xAxisIndex: 1,
				yAxisIndex: 1,
				symbolSize: 8,
				hoverAnimation: true,
				data: single_y1_data,
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#61a0a8'
						}
					}
				}
			},
			{
				name: 'y_对比值',
				type: 'line',
				xAxisIndex: 1,
				yAxisIndex: 1,
				symbolSize: 8,
				hoverAnimation: true,
				data: single_y2_data,
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#d48265'
						}
					}
				}
			}
		]
	};
	return singleOption;
}