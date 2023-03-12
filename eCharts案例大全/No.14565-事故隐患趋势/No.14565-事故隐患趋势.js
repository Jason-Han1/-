option = {
    	//timeline基本配置都写在baseoption 中
		baseOption: {
			//backgroundColor: '#0f375f',
			timeline: {
				loop: false,        
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 1000,
				data: ['2016', '2017', '2018']
			},
			
			grid: { containLabel: true },
			xAxis: [{
				type: 'category',
				data: ['场所环境类', '设备设施类', '安全管理类', '从业人员类']
			}],
			yAxis: { 
				type: 'value',
				axisLine: {
					show: true,
					lineStyle:{
						color:'#0066CC'
					}
				} 
			},
			series: [
				{
					type: 'bar'
				}
			]
		},
		//变量则写在options中
		options:[
			{
 				series: [{
 				    type: 'line',
					data: [120, 450, 140,230]
				}]
			},
			{
	        	series: [{
	        	    type: 'bar',
                    data: [530, 130, 780,550]
             	}]
			},
			{
				series: [{
				    type: 'bar',
					data: [560, 350, 180,200]
              	}]
      		},
      		{
            	series: [{
            	    type: 'bar',
                    data: [100, 330, 530,230]
				}]
			}
		]
	}