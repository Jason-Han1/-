option = {
    title: {
        text: '游客评分排名',
         top: '5%',
    	  x: 'center',
    	  textStyle:{
    	  	color:'#151E26',
    	  	fontSize:14,
    	  	fontWeight:'normal',
    	  }
    },
    tooltip: {
        trigger: 'axis'
    },
	legend: {
		data: ['交通', '配套', '消费', '服务', '景观'],
		textStyle: {
			color: '#B4B4B4'
		},
		icon: 'stack',
		itemWidth:10,
		itemHeight:10,
		bottom:'5%',
	},
    grid: {
        top: '15%',
        width: '85%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
          color: 'rgba(21, 30, 38, .7)'  
        },
    	axisTick: {
			show: false
		},
		axisLine: {
		    show: true,
			lineStyle: {
				color: 'rgba(241, 241, 241, .7)'
			}
		}
    },
    yAxis: {
        type: 'value',
        name: 'OTA数据总量',
		nameTextStyle: {
			color: 'rgba(21, 30, 38, .7)'
		},
        axisLabel: {
          color: 'rgba(21, 30, 38, .7)'  
        },
		axisLine: {
		    show: true,
			lineStyle: {
				color: 'rgba(241, 241, 241, .7)'
			}
		},
		splitLine: {
			show: true,
			lineStyle: {
				type: 'dashed',
				color: 'rgba(241, 241, 241, .7)'
			}
		}
    },
    series: [
        {
            name: '交通',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '配套',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '消费',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '服务',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '景观',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}