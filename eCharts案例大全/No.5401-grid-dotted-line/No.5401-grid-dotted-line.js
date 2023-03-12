	/** @type {V2ViewType} */
    var ctx = this||{};
    
	var showData={
	    dataY:[20, 400, 1000, 1500, 2000],
	    dataX:["7:00", "10:00", "12:00", "14:00", "16:00"],
	    data: [920, 1101, 124, 1190, 1623, 1820],
	    legend:'每小时客户数',
	    danWei:'单位：户',
	   
	    name:"每小时客户数",
	}
	ctx.showData=ctx.showData||showData;

	var datax =ctx.showData.dataX;
	var datay =ctx.showData.dataY;
	var max = ctx.showData.maxValue;
	var min = ctx.showData.minValue;
	var splitNumber = ctx.showData.splitNumber;
	var data = ctx.showData.data;
	var legend = ctx.showData.legend;
	var danWei = ctx.showData.danWei;
	var name = ctx.showData.name;
	option = {
	    // title: {
	    //     text: '堆叠区域图'
	    // },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: '#6a7985'
	            }
	        }
	    },
	    legend: {
	        data: [legend],
	        //  bottom: 10,
	        itemHeight: 7, //修改icon图形大小
	        textStyle: {
	            padding: [30, -350, 30, 10],
	            fontSize: 14,
	            fontWeight: 400,
	            fontFamily: 'Microsoft YaHei',
	            color: '#CCE6FF'
	        }
	    },
	    // toolbox: {
	    //     feature: {
	    //         saveAsImage: {}
	    //     }
	    // },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            boundaryGap: false,
	            axisTick: { show: false },
	            axisLabel: {
	                textStyle: {
	                    fontSize: 14,
	                    color: '#CCE6FF'
	                },
	
	
	                //   lineStyle:{
	                //       color:'red'
	                //   }
	            },
	            axisLine: {
	                lineStyle: {
	                    color: '#CCE6FF',
	                    width: 2,//这里是为了突出显示加上的
	                }
	            },
	
	            data: datax
	        }
	    ],
	    yAxis: [
	
	        {
	            // splitNumber:splitNumber,
	            // max:max,
	            // min:min,
	            // show:false,
	            axisLine: { show: false },
	            axisTick: { show: false },
	            axisLabel: {
	                textStyle: {
	                    fontSize: 14,
	                    color: '#CCE6FF'
	                }
	            },
	            name: danWei,
	            nameTextStyle: {
	                fontSize: 14,
	                color: '#CCE6FF'
	            },
	            splitLine: {
	                // show:false,
	                lineStyle: {
	                    type: 'dashed'
	                }
	            },
	            type: 'value',
	            data: datay
	        }
	    ],
	    series: [
	        {
	            name: name,
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: data,
	            lineStyle: {
	                normal: {
	                    color: '#FFE980',//折线的颜色
	                    width: '2'//折线粗细
	                },
	            },
	            areaStyle: {
	                normal: {
	                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	
	                        offset: 0,
	                        color: 'rgba(255,233,128,0.6)'
	                    }, {
	                        offset: 1,
	                        color: 'rgba(255,233,128,0.01)'
	                    }])
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#FFE980',//拐点颜色
	                    borderColor: '#FFE980',//拐点边框颜色
	                    borderWidth: 6//拐点边框大小
	                },
	                emphasis: {
	                    color: '#000000'//hover拐点颜色定义
	                }
	            }
	        },
	
	    ]
	};
	// return option;
