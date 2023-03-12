option = {
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },{
        type: 'category',
        show:false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }],
    yAxis: {
        type: 'value'
    },
    dataZoom: [{
		type:'inside',
		xAxisIndex:[0,1],
		startValue: 0,
		endValue: 4
	},{
		type:'slider',
		xAxisIndex:[0,1],
		startValue: 0,
		endValue: 4
	}],
    series: [{
        data: [80, 70, 50, 40, 60, 20, 30],
        type: 'bar',
        xAxisIndex:0,
    },{
        data: [20, 20, 15, 8, 7, 11, 13],
        type: 'bar',
        xAxisIndex:0,
    },{
        data: [100, 100, 100, 100, 100, 100, 100],
        type: 'bar',
        xAxisIndex:1,
        itemStyle: {
	    	normal: {color: 'rgba(0,0,0,0.05)'}
	    }
    },{
        data: [100, 100, 100, 100, 100, 100, 100],
        type: 'bar',
        xAxisIndex:1,
        itemStyle: {
	    	normal: {color: 'rgba(0,0,0,0.05)'}
	    }
    }]
};
