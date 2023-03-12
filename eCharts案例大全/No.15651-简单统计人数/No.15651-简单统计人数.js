option = {
				//提示框组件
			    tooltip: {
			    	//触发类型
			        trigger: 'axis',
			        //指示器
			        axisPointer: {
			            type: 'shadow'
			        },
			       	//提示悬浮文字
			        formatter: "{a} <br/>{b} : {c}"
			    },
			    legend: {
			        data: ['2016年']
			    },
			    grid: {
			        left: '9%',
			        right: '8%',
			        bottom: '5%',
			        top:'2%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'value',
			        name:'人数',
			        nameLocation:'end',
			        position:'top',
			        //去掉，坐标尺度
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            interval: 0,
			            formatter: '{value}',
			        }
			    },
			    yAxis: {
			        type: 'category',
			        name:'单位名称                         	',
			        nameLocation:'start',
			        axisTick: {
			            show: false
			        },
			        inverse:'true', //排序
			        data: ['公司1',
			            '公司1',
			            '公司2',
			            '公司3',
			            '公司4',
			            '公司5',
			            '公司6',
			            '公司7',
			            '公司8',
			            '公司9'
			        ]
			    },
			    series: [{
			        name: '2016年占比',
			        type: 'bar',
			        itemStyle: {
		                    normal: {
		　　　　　　　　　　　　　　		//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
		                        color: '#26C0C0'
		                    }
		                },
			        data: [42, 36, 35, 28, 21, 20, 15, 15, 5, 2]
			    }]
			};