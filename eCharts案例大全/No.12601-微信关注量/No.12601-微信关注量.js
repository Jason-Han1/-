option = {
    title: {
        text: '微信关注 量',
        textStyle:{
            color:'#fff', 
        },
    },
    backgroundColor:'#141845',
    color: ['#00A2E2'],
				tooltip: {
        trigger: 'axis'
    },
				xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine:{lineStyle:{color:"#fff"}}
    },
    
    yAxis: {
        type: 'value',
        axisLine:{lineStyle:{color:"#fff"}}
    },
    grid: {
	    	top:'14%',
	        left: '3%',
	        right: '8%',
	        bottom: '8%',
	        containLabel: true
	    },
    series: [{
        
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        label: {
			      normal: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: '#00A2E2'
			          }
			      }
			 },
//      smooth: true,
        areaStyle: {},
       
    }
    
    ]
};