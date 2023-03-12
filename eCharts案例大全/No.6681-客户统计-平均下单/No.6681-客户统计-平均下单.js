 option = {
	    tooltip: {
	        trigger: 'axis',
	    },
	    legend: {
       		data:['平均下单']
    	},
	    grid: {
	        left: '4%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        boundaryGap: false,
	        data: ['12月01','12月02','12月03','12月04','12月05','12月06','12月07']
	    },
	    yAxis: {
	    	name:'订单量',
	        type: 'value'
	    },
	    series: [
	        {
	            name:'平均下单',
	            type:'line',
	            data:[0.13, 0.12, 0.11, 0.14, 0.19, 0.13, 0.17, 0.11, 0.5, 0.3, 0.8, 0.12]
	        }
	    ]
	};



        myChart.setOption(option);
        function randomData() {
            return Math.round(Math.random()*1000);
        }