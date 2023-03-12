option = {
    title: {
        text: '地市',
        top:'3%',
        textStyle:{
        	fontWeight:'normal',
        	fontSize:'12'
        }
    },
    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
				    	top:'10%',
				        left: '3%',
				        right: '6%',
				        bottom: '3%',
				        containLabel: true
				    },
		    legend: {
		        left: '8%',
		        top: '3%',
		        textStyle: {
		            color: '#3e4956',
		            fontSize: 13,
		             
		        },
//		        itemWidth: 18,
//		        itemHeight: 18,
//		        itemGap: 65,
//		        icon: 'rect',
		        data: ['问题基站', '拆除数量']
		
		    },
		    yAxis: [{
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            show: false,
		        },
		        axisLabel: {
		            color: '#3e4956',
		            fontSize: 13,
		        },
		
		        type: 'category',
		        position: 'left',
		        data: ['成都','广元','巴中']
		
		    }],
		
		    xAxis: [{
		        position:'top',
		        axisTick: {
		            show: false
		        },
		        type: 'value',
		        axisLine: {
		            show: false,
		        },
		        axisLabel: {rotate: 90 }
		    }],
		    series: [
		    	{
		
		            name: '拆除数量',
		            align: 'left',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#3297DB'
		                }
		            },
		            barWidth: '10',
		            label: {
		                normal: {
		                    position: 'right',
		                }
		            },
		            data: [7,8,9],
		       },
		        {
		            name: '问题基站',
		            align: 'left',
		            type: 'bar',
		            barGap: '99%',
		            barWidth: '10',
		            itemStyle: {
		                normal: {
		                    color: '#42DB22'
		                }
		            },
		            label: {
		                normal: {
		                    position: 'right',
		                }
		            },
		            data:[5,6,8],
		        }
		        
		
		    ]
};