  	/// 整体混合图借鉴 他的地址为  https://gallery.echartsjs.com/editor.html?c=xrySKpOnjM
  	///   嵌套图借鉴 他的地址为  https://gallery.echartsjs.com/editor.html?c=xAi9VBmJLg

  	var overviewChartID = 'overview-chart';
  	var overviewTitle = '能源数据总览'; //标题
  	var overviewSubTitle = echarts.format.formatTime('yyyy年MM月dd', new Date());

  	//图表定位
  	var chartGridTop = 30;
  	var chartGridHeight = 95; //改变Y轴的高度

  	//时间轴
  	//SELECT WMSYS.WM_CONCAT('"'||TO_CHAR(TRUNC(SYSDATE, 'MM') + ROWNUM - 1, 'YYYY-MM-DD')||'"') DBTIME FROM DUAL CONNECT BY ROWNUM <= 30;
  	var overviewDate = ["00:00", "00:05", "00:10", "00:15", "00:20", "00:25", "00:30"];

  	//表格数据
  	//SELECT WMSYS.WM_CONCAT(TRUNC(DBMS_RANDOM.VALUE(5, 60), 2)) DBTIME FROM DUAL CONNECT BY ROWNUM <= 30;


  	var orddbtime1 = [36.59, 35.56, 32.84, 26.37, 35.94, 26.25, 24.11];
  	var orddbtime2 = [22.18, 24.76, 20.37, 28.09, 22.25, 26.75, 20.14 ];
     var dbrl = [31, 15, 17, 53, 46, 26, 11];
     var dbr2 = [22, 33, 44, 11, 22, 44, 33];
     var dbr3 = [32, 14, 53, 35, 56, 23, 52];
     var dbr4 = [11, 24, 56, 67, 43, 54, 24];
     
     
     
  	var orddbproc1 = [99, 32, 53, 95, 73, 38, 99 ];
  	
  	var ycrl1 = [59, 32, 73, 69, 63, 58, 79 ];

  	//直角坐标系内绘图网格
  	function makeGrid(top, height, opt) {
  	    return echarts.util.merge({
  	        left: 70, //居左的距离
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
  	    if (gridIndex == 3) {
  	        axisLabelFlag = true;
  	    }

  	    return echarts.util.merge({
  	        type: 'category',
  	        gridIndex: gridIndex,
  	        //统一时间轴数据
  	        data: overviewDate,
  	        axisLabel: {
  	            show: axisLabelFlag,
  	            textStyle: {
  	                color: '#92a786' //X轴的字体颜色
  	            },
  	        },
  	        axisLine: {
  	            lineStyle: {
  	                color: '#92a786', //X轴的颜色
  	                width: 1, //X轴的粗细
  	            }
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
  	            color: 'red', //设置左侧字体颜色
  	            fontSize: 20, //设置左侧字体的大小
  	        },
  	        axisLine: {
  	            lineStyle: {
  	                color: '#92a786', //设置Y轴的颜色
  	                width: 1, //设置Y轴的粗细
  	            }
  	        },
  	        axisTick: {
  	            show: false
  	        },

  	        axisLabel: {
  	            show: true,
  	            textStyle: {
  	             //   color: '#00FF00' //Y轴的数据字体颜色
  	            },
  	        },
  	        splitLine: {
  	            show: true,
  	            lineStyle: {
  	             //   color: '#b0bad4' //网格线的颜色
  	            }
  	        }

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
  	        text: overviewTitle, //标题
  	         textStyle: {
  	                //文字颜色
        color:'#00C7E1',
        //字体风格,'normal','italic','oblique'
        fontStyle:'normal',
        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight:'bold',
        //字体系列
        fontFamily:'sans-serif',
        //字体大小
　　　　 fontSize:18

  	        },
  	             //subtext: overviewSubTitle,
  	             //padding: 0,
  	             
  	    },
  	    tooltip: {
  	        //移动端展示方式
  	        trigger: 'axis',
  	        transitionDuration: 0,
  	        confine: true,
  	        bordeRadius: 5,
  	        borderWidth: 2, //提示框边框的大小
  	        borderColor: '#333', //提示框边框的颜色
  	        backgroundColor: 'rgba(255,255,255,0.9)', //提示框的背景颜色（0.9为透明度）
  	        textStyle: {
  	            fontSize: 12, //提示框的字体大小
  	            color: '#333', //提示框里的字体颜色
  	            aligin: 'center',

  	        },
  	        formatter: function(params) { //数据单位格式化  
  	            var relVal = params[0].name; //x轴名称  
  	            relVal += "<div style='width:120px'>"
  	            for (var i = 0, l = params.length; i < l; i++) {
  	                if (params[i].value) {

  	                    relVal += "<span  style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + params[i].color + ";'>" + '<span  style="display:block;padding-left:15px;margin-top:-4px">' + params[i].seriesName + ' : ' + params[i].value + '</span>' + "</span>" + '<br>';
  	                }
  	            }
  	            relVal += "</div>"
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
  	    legend: {
  	        data: ['今日逐时热', '今日逐时冷', '今日逐时水', '今日逐时电','今日逐时气'],
  	        "bottom": 40, //最下方提示文字的距离
  	        textStyle: {
  	            color: '#1bb4f6' //最下面提示文字的颜色
  	        },
  	        //				icon: 'roundRect',
  	    },
  	    xAxis: [

  	        makeXAxis(0),
  	        makeXAxis(1),
  	        makeXAxis(2),
  	        makeXAxis(3),

  	    ],
  	    yAxis: [
  	        makeYAxis(0, {
  	         //   name: '天气数据',
  	            splitNumber: 3,

  	        }),
  	        makeYAxis(1, {
  	         //   name: '预测实际能耗',

  	        }),
  	        makeYAxis(2, {
  	         //   name: '预测实际消耗',

  	        }),
  	          makeYAxis(3, {
  	         //   name: '预测实际消耗',

  	        }),
  	        makeYAxis(0, {
                 splitLine:  false,//去除网格线
				}),
				makeYAxis(1, {
                 splitLine:  false,//去除网格线
				}),
				makeYAxis(2, {
                 splitLine:  false,//去除网格线
				}),
				makeYAxis(3, {
                 splitLine:  false,//去除网格线
				})
  	    ],
  	    //dataZoom 组件 用于区域缩放
  	    dataZoom: [{
  	        type: 'slider',
  	        xAxisIndex: [0, 1, 2,3],
  	        realtime: true,
  	        //移动端展示方式
  	        handleSize: '180%', //滑动条两侧的大小
  	         start: 0,
             end: 80,
  	    }],

  	    //每个系列通过 type 决定自己的图表类型
  	    series: [
  	        makeGridData(0, 0, 'line', '今日逐时热', orddbtime1, {
  	            stack: 'DBTIME',
  	            smooth: true,
  	            color: '#d73d2d',
  	            lineStyle: {
  	                width: 2 //改变线条的粗细
  	            }
  	        }),
  	        makeGridData(0, 0, 'line', '今日逐时冷', orddbtime2, {
  	            stack: 'DBTIME',
  	            smooth: true,
  	            color: '#45d3cb',
  	            lineStyle: {
  	                width: 2 //改变线条的粗细
  	            }
  	        }),

  	        makeGridData(1, 1, 'line', '今日逐时水', orddbproc1, {
  	            smooth: true, //设置曲线
  	            color: '#63B8FF',
  	            lineStyle: {
  	                width: 2 //改变线条的粗细
  	            }
  	        }),
  	        makeGridData(2, 2, 'line', '今日逐时电', ycrl1, {
  	            smooth: true,
  	            color: '#6cd72d',
  	            lineStyle: {
  	                width: 2 //改变线条的粗细
  	            }
  	        }),
  	           makeGridData(3, 3, 'line', '今日逐时气', ycrl1, {
  	            smooth: true,
  	            color: '#d7a22d',
  	            lineStyle: {
  	                width: 2 //改变线条的粗细
  	            }
  	        }),
  	        	makeGridData(0, 4, 'line', '热量对比1', dbrl,{smooth: true,	color:'#FF6A6A'}),
  	        	makeGridData(1, 5, 'line', '热量对比2', dbr2,{smooth: true,	color:'#FF6A6A'}),
  	        	makeGridData(2, 6, 'line', '热量对比3', dbr3,{smooth: true,	color:'#FF6A6A'}),	
  	        	makeGridData(3, 7, 'line', '热量对比4', dbr4,{smooth: true,	color:'#FF6A6A'}),	
  	        	
  	        	

  	    ]

  	};