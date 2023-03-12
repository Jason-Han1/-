option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        show:false
		    },
		    yAxis: {
		        type: 'category',
		        axisTick : {show: false},
		        data: ['>10km', '5-10km', '3-5km', '0-3km'],
		        axisLine:{
		            show: false,
	            	lineStyle:{
	            		color:"rgba(0,0,0,.65)",
	            	}
	            }
		    },
		    series: [
		        {
		            type: 'bar',
		            data: [20,26,50,56],  
		            label: {   //设置柱状图上显示  对应值
		                show: true,
		                position: 'right',
		                color:'rgba(0,0,0,.85)',
		                formatter:function(a){
		                    return a.value+'人'
		                }
		            },
		             itemStyle: {
		                normal: {
		                    color: function(params) {   // 设置前三个颜色不一样
		                        var retcoler = "#1890ff";
		                        return retcoler
		                    },
		                    barBorderRadius: [0, 0, 0, 0] // 设置柱状图圆角（顺时针左上，右上，右下，左下）
		                },
		                
		            },
		        },
		    ]
		}