var	option = {
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['阿凡达2','战狼2','速度与激情8','金刚狼3','美女与野兽']
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['豆瓣','格瓦拉','时光网','爱奇艺','腾讯视频']
		        
	        }
	    ],
	    yAxis: [{
	            type: 'category',
	            name: '电影',
		        data: ['阿凡达2','战狼2','速度与激情8','金刚狼3','美女与野兽']
	      	},{
	            type: 'value',
	            name: '评分',
	            min: 0,
	            max: 10,
	            interval: 1,
	        }
	    ],
	    series: [{
	            name:'阿凡达2',
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.0, 4.9, 7.0, 6.2, 7.6]
	        },{
	            name:'战狼2',
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.6, 5.9, 9.0, 6.4, 8.7]
	        },{
	            name:'速度与激情8',
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3]
	        },{
	            name:'金刚狼3',
	            type:'line',
	            yAxisIndex: 1,
	            data:[5.6, 6.9, 7.0, 6.4, 7.7]
	        },{
	            name:'美女与野兽',
	            type:'line',
	            yAxisIndex: 1,
	            data:[5.0, 6.2, 7.3, 6.5, 6.3]
	        }
	    ]
	};