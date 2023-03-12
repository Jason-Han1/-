  option = {
	    tooltip: {
	        trigger: 'axis',
	    },
	    legend: {
       		data:['总销量','实际销量','退货量']
    	},
	    grid: {
	        left: '4%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['12月01','12月02','12月03','12月04','12月05','12月06','12月07','12月08','12月09','12月10','12月11','12月12']
	    },
	    yAxis: [
		    {
		        type: 'value',
	            scale: true,
	            name: '总销量',
	            max: 3000,
	            min: 0,
	            boundaryGap: [0.2, 0.2]
		    }
		],   
	    series: [
	        {
	            name:'总销量',
	            type:'line',
	            areaStyle: {},//堆叠图形
	            data:[1120, 1132, 1101, 1134, 1980, 2310, 2110, 2111, 1314, 1910, 2301, 2150]
	        },
	        {
	            name:'实际销量',
	            type:'line',
	            areaStyle: {},//堆叠图形
	            data:[1032, 1032, 1030, 1034, 1790, 2130, 1920, 1911, 1264, 1854, 1943, 1923]
	        },
	        {
	            name:'退货量',
	            type:'line',
	            areaStyle: {},//堆叠图形
	            data:[30, 72, 91, 24, 39, 93, 120, 16, 34, 30, 23, 70]
	        },
	    ]
	};



        myChart.setOption(option);
        function randomData() {
            return Math.round(Math.random()*1000);
        }