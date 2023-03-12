option = {
                xAxis: [
				    {
				        type: 'value',
        		        show:false,//网格线
				    },
				    {
				        type: 'value',
				        gridIndex: 1,
				        show:false,//网格线
				    },{
				        type: 'value',
				        show:false,//网格线
				        gridIndex: 2
				    },
			    ],
			    yAxis: [
				    {
				        axisTick: {show: false},//去掉间隔线
        		        axisLine: {show: false,},//去掉轴线
				    	data: ['成都','绵阳','攀枝花','泸州','德阳','广元','遂宁'],
				    },
				    {
				        axisTick: {show: false},//去掉间隔线
        		        axisLine: {show: false,},//去掉轴线
				    	data: ['成都','绵阳','自贡','泸州','德阳','广元','遂宁'],
				        gridIndex: 1
				    },{
				        axisTick: {show: false},//去掉间隔线
        		        axisLine: {show: false,},//去掉轴线
				    	data: ['成都','绵阳','自贡','泸州','德阳','广元','遂宁'],
				        gridIndex: 2
				    }
			    ],
			    grid: [
				    {
				    	top:'4%',
				    	right:'70%',
				        bottom: '10%',
				        left:'8%'
				    },
				    {
				    	top:'4%',
				    	right:'35%',
				    	bottom: '10%',
				    	left:'37%',
				    }, {
				    	top:'4%',
				    	right:'2%',
				    	bottom: '10%',
				    	left:'72%',
				    }
			    ],
			    series: [
			    	{	
			    		type: 'bar',
			    		data: [74,27,33,55,66,88,77,88],
			    		itemStyle: {
			                normal: {
			                    color: '#3297DB'
			                }
			            },
			            barWidth: '17',
				        label: {
				            normal: {
				            	show: true,
				            	color:'#fff',
				                position: ['5','20%'],
				                formatter:'{c}%'
				            }
				        }
				    }, 
				    {
				        type: 'bar',
			    		data: [55,66,88,77,88,74,27,33],
			    		itemStyle: {
			                normal: {
			                    color: '#3297DB'
			                }
			            },
			            barWidth: '17',
				        label: {
				            normal: {
				            	show: true,
				            	color:'#fff',
				                position: ['5','20%'],
				                formatter:'{c}%'
				            }
				        },
				        xAxisIndex: 1,
				        yAxisIndex: 1
				    }, {
				        type: 'bar',
			    		data: [33,55,66,88,77,88,74,27],
			    		itemStyle: {
			                normal: {
			                    color: '#3297DB'
			                }
			            },
			            barWidth: '17',
				        label: {
				            normal: {
				            	show: true,
				            	color:'#fff',
				                position: ['5','20%'],
				                formatter:'{c}%'
				            }
				        },
				        xAxisIndex: 2,
				        yAxisIndex: 2
				    }
			    ]
};