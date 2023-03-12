option = {
				    tooltip: {
				        trigger: 'item',
				        formatter: '{b}'
				    },
				    series: [{
				        name: '中国',
				        type: 'map',
				        mapType: 'china',
				        selectedMode: 'multiple',
				        itemStyle: {
				            normal: {
				                borderWidth: 1,
				                borderColor: '#fff',
				                areaColor: '#4062a8', 
				                 
				
				            }
				        },
				        data: [{
				            name: '四川',
				            selected: true,
				            label: {
				                normal: {
				                    show: true,
				                    textStyle: {
				                        color: '#fff',
				                        fontSize: '16'
				                    },
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        color: '#fff',
				                        fontSize: '16'
				                    }
				                }
				            },
				            itemStyle: {
				
				                emphasis: {
				                    borderWidth: 1,
				                    borderColor: '#fff',
				                    areaColor: '#e5d670', 
				                     
				
				                }
				            }
				        }]
				    }],
				
				}