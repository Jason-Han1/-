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
		        data: ['无效关键词', '行业关键词', '品牌关键词'],
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
		            data: [10,5,10],  
		             itemStyle: {
		                normal: {
		                    color: function(params) {   // 设置前三个颜色不一样
		                        var colorList=[ '#70CD62', '#7565f8','#E95C62']
		                       
		                        return colorList[params.dataIndex]
		                    },
		                    barBorderRadius: [50, 50, 50, 50] // 设置柱状图圆角（顺时针左上，右上，右下，左下）
		                },
		                
		            },
		        },
		    ]
		}