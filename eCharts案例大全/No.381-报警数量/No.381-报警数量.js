option = {
	    tooltip: {},
	    // 设置图标大小
	    grid: {
           width: '80%',
           height: '40%',
           left: 80,
           top: 30
                },
	    xAxis: {
	        data: ["00:00-2:00","03:00-5:00","06:00-08:00","09:00-11:00","12:00-14:00","15:00-17:00","18:00-20:00","21:00-23:00"]
	    },
	    yAxis: {},
	    series: [{
	        name: '报警数量',
	        type: 'bar',
	        color:'#FACD89',
	        barWidth: 30, // 设单柱状置宽度
	        showBackground: true,//设置柱状的背景虚拟
	        data: [5, 20, 36, 10, 10, 20,30,10]
	    }]
	};
