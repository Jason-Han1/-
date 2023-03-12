	var base = +new Date(2014, 9, 3, 0);
	var oneDay = 600000;
	var date = [];
	var data = [];
	for (var i = 0; i < 144; i++) {
	    var now = new Date(base += oneDay);
	    date.push([now.getHours(), now.getMinutes()].join(':'));
	    data.push(Math.floor(Math.random() * (1000 + 1 - 400) + 400));
	}
	date.unshift(0.0);
	data.unshift(500);
	option = {
	    color: ['#6EE4C2'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    title: {
	        text: 'xx馆每日进出人次统计',
	    },
	    dataZoom: [{
	        type: 'inside',
	        start: 0,
	        end: 100
	    }],
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    toolbox: {
	        show: true,
	        feature: {
	            restore: {
	                show: true
	            },
	            magicType: {
	                show: true,
	                type: ['line', 'bar', 'stack', 'tiled']
	            },
	        }
	    },
	    xAxis: [{
	        name: '日期',
	        type: 'category',
	        data: date,

	        axisTick: {
	            alignWithLabel: true
	        }
	    }],
	    yAxis: [{
	        name: '进出人次',
	        type: 'value'
	    }],
	    series: [{
	        name: '图书馆每日进出人次统计',
	        type: 'bar',
	        barWidth: '60%',
	        data: data
	    }]
	};