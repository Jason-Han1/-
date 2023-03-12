var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var time = [];
var xData= [Math.random() * 300];
var yData=[Math.random() * 300];
var zData=[Math.random() * 300];
for (var i = 1; i < 50000; i++) {
    var now = new Date(base += oneDay);
    time.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    xData.push(Math.round((Math.random() - 0.5) * 20 + xData[i - 1]));
    
      yData.push(Math.round((Math.random() - 0.5) * 20 + yData[i - 1]));
      
      
        zData.push(Math.round((Math.random() - 0.5) * 20 + zData[i - 1]));
   
}

option = {
    tooltip: {
        trigger: 'axis',
        
    },

    xAxis:  [
		        {
		            type : 'category',
		            
		            boundaryGap : false,
		            axisLabel: {
					show: true,
					textStyle: {
						color: '#1ef7ff'
					    }
			    	},
		            axisLine: {
		                onZero: false,
		                lineStyle: {
						color: {
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.5,
							colorStops: [{
								offset: 0,
								color: '#9D96F5' // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#1FF1FE' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						},
						width: 2

					}
		                
		            },
		            data: time
		        },
		        {
		            gridIndex: 1,
		            type : 'category',
		            boundaryGap : false,
		            axisLabel: {
					show: true,
					textStyle: {
						color: '#F4CBE4'
					    }
				    },
		            axisLine: {
		                onZero: false,
		                lineStyle: {
						width: 2,
						color: {
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.5,
							colorStops: [{
								offset: 0,
								color: '#FF1CC5' // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#F4CBE4' // 100% 处的颜色
							}],
							global: false // 缺省为 false
					    	}
				    	},
				    	width: 2
		            },
		            data: time
		            
		        }
		    ],
    yAxis:[{
				name: '形变速率(mm/min)',
				nameTextStyle: {
					color: '#1ef7ff'
				},
				type: 'value',
					boundaryGap: [0, '100%'],
				 sampling: 'average',
				splitLine: {
					show: false
				},
				inverse: false,
				splitArea: {
					show: false
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						width: 2,
						color: {
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.5,
							colorStops: [{
								offset: 0,
								color: '#9D96F5' // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#1FF1FE' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						}
					}
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#1ef7ff'
					},
					

				}
			},
			{
				gridIndex: 1,
				name: '累计形变量(mm)',
				inverse: false,
				nameTextStyle: {
					color: '#ED8EEA'
				},
				type: 'value',
				boundaryGap: [0, '100%'],
				 sampling: 'average',
				splitLine: {
					show: false
				},
				splitArea: {
					show: false
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						width: 2,
						color: {
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.5,
							colorStops: [{
								offset: 0,
								color: '#FF1CC5' // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#F4CBE4' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						}
					}
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#F4CBE4'
					},
				

				}
			}],
    dataZoom: [{
				show: false,
				realtime: true,
				start: 0,
				end: 100,
				backgroundColor :'rgba(126, 224, 209, 0.5)',
				fillerColor: 'rgba(255,216,92,0.6)',
		        borderColor: 'rgba(126, 224, 209, 0.75)',
		        handleStyle: {
		            color: '#23c2aa'
		        },
		        textStyle:{color:'#FFD85C'},
				right: '60',
				left: '80',
				height: '30px',
				xAxisIndex: [0, 1]
				
			},
			{
				type: 'inside',
				realtime: true,
				start: 0,
				end: 100,
				xAxisIndex: [0, 1]
			}],
		    grid: [{
		        left: 80,
		        right: 60,
		        height: '35%'
		    }, {
		        left: 80,
		        right: 60,
		        top: '55%',
		        height: '35%'
		    }],
    series: [
        {
            name:'x方向的形变速率',
            type:'line',
            smooth:true,
        
            sampling: 'average',
            xAxisIndex: 0,
		    yAxisIndex: 0,
            data: xData
        },
         {
            name:'y方向的形变速率',
            type:'line',
            smooth:true,
       
            sampling: 'average',
            xAxisIndex: 0,
		    yAxisIndex: 0,
            data: yData
        },
        {
             name:'z方向的形变速率',
            type:'line',
            smooth:true,
        
            xAxisIndex: 0,
		    yAxisIndex: 0,
            sampling: 'average',
            data: zData
        },
        {
              name:'x方向的形变量值',
            type:'line',
            smooth:true,
       
            sampling: 'average',
            xAxisIndex: 1,
		    yAxisIndex: 1,
            data: xData
        },
         {
              name:'y方向的形变量值',
            type:'line',
            smooth:true,
          
            sampling: 'average',
            xAxisIndex: 1,
		    yAxisIndex: 1,
            data: yData
        },
        {
             name:'z方向的形变量值',
            type:'line',
            smooth:true,
         
            xAxisIndex: 1,
		    yAxisIndex: 1,
            sampling: 'average',
            data: zData
        }
    ]
};
