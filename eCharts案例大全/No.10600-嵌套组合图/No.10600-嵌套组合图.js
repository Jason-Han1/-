  	/// 整体混合图借鉴 他的地址为  https://gallery.echartsjs.com/editor.html?c=xrySKpOnjM
   ///   嵌套图借鉴 他的地址为  https://gallery.echartsjs.com/editor.html?c=xAi9VBmJLg
	
	var overviewChartID = 'overview-chart';
		var overviewTitle = ''; //标题
		var overviewSubTitle = echarts.format.formatTime('yyyy年MM月dd', new Date());

		//图表定位
		var chartGridTop = 40;
		var chartGridHeight = 100;

		//时间轴
		//SELECT WMSYS.WM_CONCAT('"'||TO_CHAR(TRUNC(SYSDATE, 'MM') + ROWNUM - 1, 'YYYY-MM-DD')||'"') DBTIME FROM DUAL CONNECT BY ROWNUM <= 30;
		var overviewDate = ["00:00", "00:05", "00:10", "00:15", "00:20", "00:25", "00:30"];

		//表格数据
		//SELECT WMSYS.WM_CONCAT(TRUNC(DBMS_RANDOM.VALUE(5, 60), 2)) DBTIME FROM DUAL CONNECT BY ROWNUM <= 30;
		var orddbhost1 = [19.55, 20.43, 57.46, 48.87, 26.33, 57.38, 42.1];
		var orddbhost2 = [23.31, 24.15, 26.17, 21.53, 20.46, 66.43, 21.11];
		var dbrl = [31, 15, 17, 53, 46, 26, 11];

		var orddbtime1 = [36.59, 35.56, 32.84, 26.37, 35.94, 26.25, 24.11];
		var orddbtime2 = [22.18, 24.76, 20.37, 28.09, 22.25, 26.75, 20.14, ];

		var orddbproc1 = [599, 302, 753, 695, 673, 558, 779, ];
		var ycrl1 = [59, 32, 73, 69, 63, 58, 79, ];

		//直角坐标系内绘图网格
		function makeGrid(top, height, opt) {
			return echarts.util.merge({
				left: 70,
				right: 60,
				top: top,
				height: height
			}, opt || {}, true);
		}

		//X轴生成器
		function makeXAxis(gridIndex, opt) {
			//避免X轴数据显示过于频繁
			axisLabelFlag = false;
			//  if (gridIndex % 2 == 0) {
			//      axisLabelFlag = true;
			//  }
			if(gridIndex == 3) {
				axisLabelFlag = true;
			}

			return echarts.util.merge({
				type: 'category',
				gridIndex: gridIndex,
				//统一时间轴数据
				data: overviewDate,
				axisLabel: {
					show: axisLabelFlag,
					/*          formatter: function(value) {
					              return echarts.format.formatTime('MM-dd', value);
					          }*/
				},
			}, opt || {}, true);
		}

		//Y轴生成器
		function makeYAxis(gridIndex, opt) {
			return echarts.util.merge({
				type: 'value',
				nameLocation: 'middle',
				nameGap: '40',
				gridIndex: gridIndex,
				nameTextStyle: {
					color: '#333'
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true
				},
			}, opt || {}, true);
		}

		//数据生成器
		function makeGridData(xAxisIndex, yAxisIndex, chartType, chartName, chartData, opt) {
			return echarts.util.merge({
				type: chartType,
				name: chartName,
				xAxisIndex: xAxisIndex,
				yAxisIndex: yAxisIndex,
				data: chartData,
			}, opt || {}, true);
		}

// 		var myChartOne = echarts.init(document.getElementById('NestingChart'));
		var option = {
			animation: false,
			//标题组件，包含主标题和副标题
			title: {
				x: 'center',
				text: overviewTitle,
				//      subtext: overviewSubTitle,
				//      padding: 0,
			},
			tooltip: {
				//移动端展示方式
				trigger: 'axis',
				transitionDuration: 0,
				confine: true,
				borderRadius: 4,
				borderWidth: 1,
				borderColor: '#333',
				backgroundColor: 'rgba(255,255,255,0.9)',
				textStyle: {
					fontSize: 12,
					color: '#333'
					 
				},
				  formatter:function(params){  //数据单位格式化  
                               var relVal = params[0].name;  //x轴名称  
                               relVal +="<div style='width:120px'>"
                               for (var i = 0, l = params.length; i < l; i++) {    
                                if(params[i].value){

                                   relVal +=  "<span  style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+params[i].color+";'>" +'<span  style="display:block;padding-left:15px;margin-top:-4px">'+ params[i].seriesName + ' : ' + params[i].value+'</span>'+ "</span>"+'<br>';    
                                }
                               }  
                                   relVal +="</div>"
                               return relVal;    
                            }
			},

			//坐标轴指示器（axisPointer）的全局公用设置
			axisPointer: {
				type: 'shadow',
				link: {
					xAxisIndex: 'all'
				}
			},
			//直角坐标系内绘图网格
			grid: [
				makeGrid(chartGridTop, chartGridHeight),
				makeGrid(chartGridTop + (chartGridHeight + 25), chartGridHeight),
				makeGrid(chartGridTop + (chartGridHeight + 25) * 2, chartGridHeight),
				makeGrid(chartGridTop + (chartGridHeight + 25) * 3, chartGridHeight),

			],
			xAxis: [
				makeXAxis(0),
				makeXAxis(1),
				makeXAxis(2),
				makeXAxis(3),

			],
			yAxis: [
				makeYAxis(0, {
					name: '预测实际热量',
					 splitNumber: 3, //调整间隔
                    //  splitLine: {show: false},//去除网格线
				}),

				makeYAxis(1, {
					name: '天气数据',
                     splitNumber: 3,
				}),
				makeYAxis(2, {
					name: '预测实际能耗',

				}),
				makeYAxis(3, {
					name: '预测实际消耗',

				}),
				makeYAxis(0, {
					name: '热量对比',
                 splitLine:  false,//去除网格线
               
				})

			],
			//dataZoom 组件 用于区域缩放
			dataZoom: [{
				type: 'slider',
				xAxisIndex: [0, 1, 2, 3],
				realtime: true,
				//移动端展示方式
				handleSize: '140%',
			}],
			//每个系列通过 type 决定自己的图表类型
			series: [
				makeGridData(0, 0, 'bar', '预测热量', orddbhost1, {
					barGap: '-175%',
					barWidth: 10,
					z: 10,
					 itemStyle:{
                	normal:{
                		color:'#43CD80'
                	}
                },
					
				}),
				makeGridData(0, 0, 'bar', '实际热量', orddbhost2, {
					barWidth: 25,
					stack: 'total',
					    itemStyle:{
                	normal:{
                		color:'#778899'
                	} 
                },
				}),
				makeGridData(0, 4, 'line', '热量对比', dbrl,{smooth: true,	color:'#FF6A6A'}),

				makeGridData(1, 1, 'line', '预测气温', orddbtime1, {
					stack: 'DBTIME',smooth: true,	color:'#FFC125'
				}),
				makeGridData(1, 1, 'line', '实际气温', orddbtime2, {
					stack: 'DBTIME',smooth: true,color:'#63B8FF'
				}),

				makeGridData(2, 2, 'line', '预测实际能耗', orddbproc1, {smooth: true,color:'#BA55D3' }),
				makeGridData(3, 3, 'line', '预测热耗', ycrl1, {smooth: true,color:'#836FFF'}),
			]

		};