	option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        left: '4%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis: {
	        name: '库存量',
	        type: 'value',
	        boundaryGap: [0, 0.01]

	    },
	    xAxis: {
	        type: 'category',
	        data: ['A商品', 'B商品', 'C商品', 'D商品', 'E商品', 'F商品', 'G商品', 'H商品', 'I商品', 'J商品'],
	        axisLabel: {
	            interval: 0,
	            rotate: 40
	        }
	    },
	    series: [{
	        name: '库存量',
	        type: 'bar',
	        data: [269, 264, 259, 201, 186, 183, 176, 155, 153, 124]
	    }]
	};



	myChart.setOption(option);

	function randomData() {
	    return Math.round(Math.random() * 1000);
	}