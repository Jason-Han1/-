option = {
    backgroundColor:'#12193a',
	color:['#f0c725','#16f892'],
    title: {
		left: 'center',
		text: '某班某次考试各科成绩',
		textStyle:{
			color:'#FFFFFF',
			fontSize:'14',
		}
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['语文', '数学', '英语', '政治', '历史', '地理','生物','化学','物理'],
        x: 'center',
		top:'25',
        textStyle: {
			color:'#c1cadf',
			"fontSize": 10
		}
    },
    grid: {
		left: '6%',
		right: '4%',
		top:'25%',
		bottom: '3%',
		containLabel: true
	},
    toolbox: {
        show : true,
        orient: 'vertical',
        x: 'right',
        y: 'center'
    },
    xAxis : [
        {
            type : 'category',
			boundaryGap: false,
            data : ['41-50', '51-60', '61-70', '71-80', '81-90','91-100','101-110','111-120','121-130','131-140','141-150'],
			axisLine:{
				lineStyle:{
					color:'rgba(240,199,37,0.5)'
				}
			},
            axisLabel :{  
                interval:0,
				rotate:'45',
				color:'#c1cadf'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
			name: '(人数)',
			nameTextStyle:{
				color:'#c1cadf',
				align:'right',
				lineHeight:10
			},
			axisLine:{
				lineStyle:{
					color:'rgba(240,199,37,0.5)'
				}
			},
            axisLabel :{  
                interval:0,
				color:'#c1cadf'
            },
			splitLine: {
				show: false
			}
        }
    ],
    series : [
        {
            name:'语文',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(240,199,37,0.5)'
				}, {
					offset: 1,
					color: 'rgba(240,199,37,0.01)'
				}])
			},
            data:[3,5,13,22,26,31,10,8,2],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#f0c725' } }
        },{
            name:'数学',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[5,12,20,27,42,11,8,13,5,1],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'英语',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[0,0,8,16,53,27,13,6,2,2,1],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'物理',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[0,7,14,31,12,5],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'化学',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[0,0,24,40,8,2],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'生物',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[2,0,14,31,21,3],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'政治',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[0,0,4,31,39,9],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'历史',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[0,0,34,11,29,19],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'历史',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[0,0,34,11,29,19],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        },{
            name:'地理',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[5,1,19,42,13,15],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        }
        
    ]
};