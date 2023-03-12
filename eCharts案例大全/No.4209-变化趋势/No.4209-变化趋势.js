option = {
    backgroundColor:"rgb(11,13,83)",
    title: {
        text: ''
    },
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
        show:false,
        data: [ '变化趋势']
    },
    grid: {
        left: '7%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			 axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:16
                }
            },
            data: ['202001-01', '202001-02', '202001-03', '202001-04', '202001-05']
        }
    ],
    yAxis: [
        {
            name:"变化趋势（ug/m³)",
            type: 'value',
            axisLine:{
				show: false
			},
			axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:16
                }
            },
             nameTextStyle:{
                color:"#fff", 
                fontSize:16,  
            },
			axisTick:{
				show: false
			},
        }
    ],
    series: [
        {
            name: '变化趋势',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            areaStyle: {},
            itemStyle: {
		        normal: {
					color:'#3A84FF',
		            lineStyle: {
						color: "#3A84FF",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(0,192,255,0)'
						}, {
							offset: 1,
							color: 'rgba(0,192,255,0.35)'
						}]),
		            }
		        }
			},
			lineStyle: {
				normal:{
				    width:5
				}
            },
            data: [40, 25, 40, 33, 60]
        }
    ]
};
